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
      className={`group relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 ease-out focus:outline-none cursor-pointer hover:scale-105 active:scale-95 ${
        theme === 'dark'
          ? 'bg-[#121829] border-white/15 text-amber-300 hover:text-amber-200 hover:border-amber-400/40 hover:bg-[#161d30] shadow-sm hover:shadow-md'
          : 'bg-white border-slate-200 text-slate-700 hover:text-[#7f21fe] hover:border-purple-300 hover:bg-slate-50 shadow-sm hover:shadow-md'
      } ${className}`}
    >
      {theme === 'dark' ? (
        <Sun
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-all duration-500 ease-out rotate-0 group-hover:rotate-45 group-hover:scale-110 text-amber-400 group-hover:text-amber-300"
          aria-hidden="true"
        />
      ) : (
        <Moon
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-all duration-500 ease-out -rotate-12 group-hover:rotate-0 group-hover:scale-110 text-slate-700 group-hover:text-[#7f21fe]"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
