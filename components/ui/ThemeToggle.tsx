'use client';

import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../providers/ThemeProvider';

/**
 * Theme controls render their final markup on the server.
 *
 * The previous `mounted` gate emitted an `animate-pulse` skeleton into the
 * prerendered HTML, so first paint showed an empty box. The server and the
 * client now agree on the default (`system` -> Monitor / Sun), and the saved
 * preference is applied in the provider's effect.
 */

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="relative">
      <div className="flex items-center rounded-lg border border-gray-300 bg-white p-1 dark:border-gray-600 dark:bg-gray-800">
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            className={`
              flex h-8 w-8 items-center justify-center rounded-md transition-colors
              ${
                theme === value
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
              }
            `}
            title={label}
            aria-label={`Switch to ${label} theme`}
            aria-pressed={theme === value}
            data-testid={`theme-toggle-${value}`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ThemeToggleButton() {
  const { theme, setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const Icon = theme === 'system' ? Monitor : actualTheme === 'dark' ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      title={`Current theme: ${theme}. Click to cycle through themes.`}
      aria-label="Toggle theme"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
