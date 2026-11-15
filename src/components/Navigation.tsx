'use client';

import React, { useState, useEffect } from 'react';
import { ApsLogo } from '@/components/ApsLogo';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X, ArrowRight } from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  // Cerrar menu con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Evitar scroll de fondo al abrir menu movil
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Detección activa de sección y estado de scroll para compactar navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);

      const sections = ['inicio', 'por-que', 'demostracion', 'contacto'];
      const scrollPosition = scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4 secciones requeridas actualizadas
  const navLinks = [
    { href: '#inicio', id: 'inicio', label: 'Inicio' },
    { href: '#por-que', id: 'por-que', label: 'Por qué APS Conecta' },
    { href: '#demostracion', id: 'demostracion', label: 'Aplicaciones' },
    { href: '#contacto', id: 'contacto', label: 'Contáctanos' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-[var(--aps-nav-bg)] backdrop-blur-xl border-b border-[var(--aps-border-subtle)] transition-all duration-300 ease-out ${
          isScrolled
            ? 'shadow-md shadow-purple-950/5 dark:shadow-purple-950/25'
            : ''
        }`}
      >
        <div
          className={`max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 transition-all duration-300 ease-out ${
            isScrolled ? 'h-13 sm:h-14' : 'h-18'
          }`}
        >
          {/* Logo y Nombre que se compactan suavemente con el scroll */}
          <a
            href="#inicio"
            aria-label="Ir al inicio de APS Conecta"
            className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90 shrink-0"
          >
            <div className={`transition-transform duration-300 origin-left ${isScrolled ? 'scale-85' : 'scale-100'}`}>
              <ApsLogo size={36} />
            </div>
            <span
              className={`font-bold tracking-tight leading-tight text-[var(--aps-text-primary)] transition-all duration-300 ${
                isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}
            >
              APS Conecta
            </span>
          </a>

          {/* Navegacion en pantallas medianas y amplias */}
          <nav
            aria-label="Navegación del sitio"
            className={`hidden md:flex items-center gap-5 lg:gap-7 transition-all duration-300 font-medium ${
              isScrolled ? 'text-xs' : 'text-xs sm:text-sm'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 relative group font-semibold ${
                    isActive
                      ? 'text-[var(--aps-text-primary)] font-bold'
                      : 'text-[var(--aps-text-secondary)] hover:text-[var(--aps-text-primary)]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#7f21fe] rounded-full transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Acciones: Selector de Tema + Acceso a Codigo + Boton Solicitar Piloto */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Botón de alternancia de modo oscuro/claro */}
            <div className={`transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <ThemeToggle />
            </div>

            {/* Enlace a GitHub con versión release v1.1.0 */}
            <a
              href="https://github.com/APS-Conecta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Repositorio de código abierto en GitHub - Release v1.1.0"
              className={`hidden md:inline-flex items-center gap-2 font-semibold rounded-xl text-[var(--aps-text-secondary)] hover:text-[var(--aps-text-primary)] hover:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-white/10 ${
                isScrolled ? 'text-xs px-2 py-1' : 'text-xs px-2.5 py-1.5'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>v1.1.0</span>
              </span>
            </a>

            {/* Boton Solicitar Piloto compacto al scroll */}
            <a
              href="#contacto"
              className={`inline-flex rounded-full bg-[#7f21fe] hover:bg-[#6c1bd9] active:bg-[#581cb1] text-white font-semibold shadow-[0_4px_16px_rgba(127,33,254,0.4)] hover:shadow-[0_6px_24px_rgba(127,33,254,0.6)] transition-all duration-300 items-center gap-1.5 ${
                isScrolled
                  ? 'h-8.5 sm:h-9 px-3.5 sm:px-4 text-xs'
                  : 'h-10 px-4 sm:px-5 text-xs sm:text-sm'
              }`}
            >
              <span>Solicitar Piloto</span>
              <ArrowRight className={`transition-all duration-300 ${isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} aria-hidden="true" />
            </a>

            {/* Boton hamburguesa para movil */}
            <button
              type="button"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-[var(--aps-text-primary)] hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu desplegable movil accesible */}
      {isOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className="fixed inset-0 z-50 md:hidden flex flex-col bg-[var(--aps-canvas-bg)] text-[var(--aps-text-primary)]"
        >
          <div className="flex items-center justify-between p-4 border-b border-[var(--aps-border-subtle)]">
            <div className="flex items-center gap-2.5">
              <ApsLogo size={32} />
              <span className="font-bold text-base">APS Conecta</span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-[var(--aps-text-secondary)] hover:text-[var(--aps-text-primary)] cursor-pointer"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg py-3 border-b border-[var(--aps-border-subtle)] transition-colors ${
                    activeSection === link.id
                      ? 'text-[#7f21fe] font-bold'
                      : 'font-semibold hover:text-[#7f21fe]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-6 space-y-3">
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="w-full h-12 rounded-full bg-[#7f21fe] hover:bg-[#6c1bd9] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#7f21fe]/30 cursor-pointer"
              >
                <span>Solicitar Piloto en tu Comuna</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="https://github.com/APS-Conecta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-full border border-[var(--aps-border-subtle)] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repositorio GitHub</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>v1.1.0</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
