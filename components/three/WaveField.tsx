'use client';

import { useEffect, useRef } from 'react';

/**
 * WaveField — the site-wide 3D layer.
 *
 * A single fixed, pointer-transparent WebGL canvas that renders a flowing
 * gradient field behind the existing DOM. It never moves or resizes layout, so
 * every section keeps its current structure.
 *
 * Fallbacks:
 *  - `prefers-reduced-motion`: one static frame, no animation loop.
 *  - No WebGL / lost context: a CSS gradient stays on the element.
 */

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 u_res;
uniform float u_time;
uniform float u_scroll;
uniform float u_intensity;
uniform vec3 u_base;
uniform vec3 u_mid;
uniform vec3 u_high;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p *= 2.02;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;

  float t = u_time * 0.05;
  float warp = fbm(p * 1.7 + vec2(t, u_scroll * 0.55));
  float bands = sin((p.y * 5.0 + warp * 2.6 + u_scroll * 1.8) * 3.14159) * 0.5 + 0.5;
  float field = smoothstep(0.32, 1.0, bands * 0.62 + warp * 0.58);

  vec3 color = mix(u_base, u_mid, field);
  color = mix(color, u_high, pow(field, 3.0) * 0.75);

  // Soft vignette keeps type legible at the edges.
  float vignette = smoothstep(1.35, 0.25, length(p));
  color *= vignette;

  // Fade the field out behind the top navigation band.
  float topFade = smoothstep(1.0, 0.55, uv.y);
  color *= mix(0.55, 1.0, topFade);

  gl_FragColor = vec4(color * u_intensity, vignette * 0.85);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function WaveField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = (canvas.getContext('webgl', {
        alpha: true,
        antialias: false,
        depth: false,
        powerPreference: 'low-power',
        premultipliedAlpha: false,
      }) ?? canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    } catch {
      gl = null;
    }

    // No WebGL: the CSS gradient on the element remains as the fallback.
    if (!gl) return;

    const vertexShader = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, 'u_res'),
      time: gl.getUniformLocation(program, 'u_time'),
      scroll: gl.getUniformLocation(program, 'u_scroll'),
      intensity: gl.getUniformLocation(program, 'u_intensity'),
      base: gl.getUniformLocation(program, 'u_base'),
      mid: gl.getUniformLocation(program, 'u_mid'),
      high: gl.getUniformLocation(program, 'u_high'),
    };

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const lightPalette: [number[], number[], number[]] = [
      [0.973, 0.980, 0.996],
      [0.055, 0.647, 0.914],
      [0.388, 0.400, 0.945],
    ];
    const darkPalette: [number[], number[], number[]] = [
      [0.043, 0.071, 0.125],
      [0.016, 0.372, 0.529],
      [0.220, 0.239, 0.749],
    ];
    let palette = lightPalette;

    const readPalette = () => {
      const isDark = document.documentElement.classList.contains('dark');
      palette = isDark ? darkPalette : lightPalette;
    };
    readPalette();

    const themeObserver = new MutationObserver(readPalette);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl!.viewport(0, 0, width, height);
      gl!.uniform2f(uniforms.resolution, width, height);
      gl!.uniform1f(uniforms.intensity, isDark() ? 0.85 : 0.55);
    };

    const isDark = () => document.documentElement.classList.contains('dark');

    let scrollValue = 0;
    let targetScroll = 0;
    let frame = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const elapsed = (now - start) / 1000;
      gl!.clearColor(0, 0, 0, 0);
      gl!.clear(gl!.COLOR_BUFFER_BIT);

      targetScroll = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      scrollValue += (targetScroll - scrollValue) * 0.06;

      gl!.uniform1f(uniforms.time, reducedMotion.matches ? 6.0 : elapsed);
      gl!.uniform1f(uniforms.scroll, scrollValue);
      gl!.uniform1f(uniforms.intensity, isDark() ? 0.85 : 0.55);
      gl!.uniform3fv(uniforms.base, palette[0]);
      gl!.uniform3fv(uniforms.mid, palette[1]);
      gl!.uniform3fv(uniforms.high, palette[2]);

      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      draw(now);
      frame = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      resize();
      if (reducedMotion.matches) draw(performance.now());
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (!frame && !reducedMotion.matches) {
        frame = requestAnimationFrame(loop);
      }
    };

    const handleReducedMotion = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      draw(performance.now());
      if (!reducedMotion.matches) frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    reducedMotion.addEventListener('change', handleReducedMotion);

    if (reducedMotion.matches) {
      draw(performance.now());
    } else {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      reducedMotion.removeEventListener('change', handleReducedMotion);
      themeObserver.disconnect();
      gl!.deleteBuffer(buffer);
      gl!.deleteProgram(program);
      gl!.deleteShader(vertexShader);
      gl!.deleteShader(fragmentShader);
      const extension = gl!.getExtension('WEBGL_lose_context');
      extension?.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      tabIndex={-1}
      className={`wave-field ${className}`}
    />
  );
}
