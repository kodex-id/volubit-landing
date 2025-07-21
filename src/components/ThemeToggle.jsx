import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: 24,
        marginRight: 16,
        transition: 'color 0.2s',
        color: 'var(--color-accent)'
      }}
    >
      {theme === 'dark' ? (
        <span role="img" aria-label="Light Mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark Mode">🌙</span>
      )}
    </button>
  );
}
