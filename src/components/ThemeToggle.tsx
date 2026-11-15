'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
      }
      title={
        theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
      }
      className={`relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-200 focus:outline-none ${
        theme === 'dark'
          ? 'bg-[#121829] border-white/10 text-amber-300 hover:text-amber-200 hover:border-white/25 hover:bg-[#182138] shadow-[0_0_12px_rgba(245,158,11,0.15)]'
          : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
      } ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 rotate-0 hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 -rotate-12 hover:rotate-0" aria-hidden="true" />
      )}
    </button>
  );
}
