'use client';

import { useEffect } from 'react';

/**
 * TiltController — DOM-mirrored depth for the existing cards.
 *
 * Cards keep their markup: add `data-tilt` (and optional `data-tilt-strength`)
 * and this controller applies a pointer-driven perspective transform. It reads
 * and writes CSS custom properties only, so no section structure changes.
 *
 * Disabled entirely under `prefers-reduced-motion: reduce`.
 */

const MAX_TILT = 7;
const LIFT = 6;

export default function TiltController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    let active: HTMLElement | null = null;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const apply = () => {
      frame = 0;
      if (!active) return;
      const rect = active.getBoundingClientRect();
      const strength = Number(active.dataset.tiltStrength ?? 1) || 1;
      const dx = (pointerX - rect.left) / rect.width - 0.5;
      const dy = (pointerY - rect.top) / rect.height - 0.5;
      active.style.setProperty('--tilt-x', `${(-dy * MAX_TILT * strength).toFixed(2)}deg`);
      active.style.setProperty('--tilt-y', `${(dx * MAX_TILT * strength).toFixed(2)}deg`);
      active.style.setProperty('--tilt-lift', `${LIFT}px`);
      active.style.setProperty('--sheen-x', `${((dx + 0.5) * 100).toFixed(1)}%`);
      active.style.setProperty('--sheen-y', `${((dy + 0.5) * 100).toFixed(1)}%`);
    };

    const reset = (element: HTMLElement | null) => {
      if (!element) return;
      element.classList.remove('is-tilting');
      element.style.removeProperty('--tilt-x');
      element.style.removeProperty('--tilt-y');
      element.style.removeProperty('--tilt-lift');
    };

    const onPointerMove = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest?.('[data-tilt]') as HTMLElement | null;
      if (target !== active) {
        reset(active);
        active = target;
        active?.classList.add('is-tilting');
      }
      if (!active) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onPointerLeave = (event: PointerEvent) => {
      if (active && !active.contains(event.relatedTarget as Node | null)) {
        reset(active);
        active = null;
      }
    };

    const onReducedMotionChange = () => {
      if (!reducedMotion.matches) return;
      reset(active);
      active = null;
    };

    document.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave, { passive: true });
    reducedMotion.addEventListener('change', onReducedMotionChange);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      reducedMotion.removeEventListener('change', onReducedMotionChange);
      reset(active);
    };
  }, []);

  return null;
}
