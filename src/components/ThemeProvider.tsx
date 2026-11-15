'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('aps-theme-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('aps-theme-change', callback);
  };
}

function getSnapshot(): Theme {
  try {
    const saved = localStorage.getItem('aps_theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Modo de seguridad ante navegadores con storage restringido
  }
  return 'dark';
}

function getServerSnapshot(): Theme {
  return 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = (newTheme: Theme) => {
    try {
      localStorage.setItem('aps_theme', newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      document.documentElement.style.colorScheme = newTheme;
      window.dispatchEvent(new Event('aps-theme-change'));
    } catch {
      // Ignorar errores de acceso
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
