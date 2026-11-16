import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ApsLogo } from '@/components/ApsLogo';
import ThemeToggle from '@/components/ThemeToggle';
import ContactForm from '@/components/ContactForm';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowLeft, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Postula tu CESFAM al Piloto 2027 | APS Conecta',
  description:
    'Agenda la instalación de un servidor de prueba en tu red local con las 17 aplicaciones operativas. $0 en licencias y sin tocar RAYEN ni OMI.',
};

export default function AgendaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--aps-canvas-bg)] text-[var(--aps-text-primary)] transition-colors duration-200 selection:bg-[#7f21fe]/30 selection:text-purple-200">
      
      {/* Header simplificado y enfocado en conversión */}
      <header className="sticky top-0 z-40 bg-[var(--aps-nav-bg)] backdrop-blur-xl border-b border-[var(--aps-border-subtle)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
          {/* Logo y Enlace a Home */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90 group"
          >
            <ApsLogo size={32} />
            <span className="font-extrabold text-base tracking-tight text-[var(--aps-text-primary)]">
              APS Conecta
            </span>
          </Link>

          {/* Acciones derechas: Volver + Selector de Modo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[var(--aps-text-secondary)] hover:text-[var(--aps-text-primary)] hover:bg-white/5 transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Volver</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Contenido principal de la Landing Page de Agenda */}
      <main className="flex-1 py-12 sm:py-20 lg:py-24 relative overflow-hidden flex items-center">
        {/* Resplandor ambiental de fondo */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-500/10 via-[#7f21fe]/15 to-[#f28f36]/10 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* COLUMNA 1: TÍTULO, SUBTÍTULOS Y GARANTÍAS INSTITUCIONALES */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/40 text-[#7f21fe] dark:text-purple-300 text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                <span>Convocatoria Nacional 2027</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--aps-text-primary)] leading-[1.15]">
                Postula tu{' '}
                <span className="bg-gradient-to-r from-purple-500 via-[#e06f00] to-[#f28f36] bg-clip-text text-transparent">
                  CESFAM
                </span>{' '}
                al piloto
              </h1>

              <p className="text-sm sm:text-base text-[var(--aps-text-secondary)] leading-relaxed font-normal">
                Instalamos un servidor de prueba en tu red local con las 17 aplicaciones operativas. $0 en licencias, total soberanía de datos y sin duplicar ni tocar RAYEN ni OMI.
              </p>

              {/* 3 Garantías apiladas o en lista limpia */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 dark:text-emerald-200">100% Red LAN Local</h4>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-300/80">Opera en el rack del centro sin cortes por internet.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-50/80 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-500/20">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-purple-950 dark:text-purple-200">$0 en Licencias</h4>
                    <p className="text-[11px] text-purple-700 dark:text-purple-300/80">Código abierto AGPL-3.0 sin cobros por funcionario.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-500/20">
                  <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-amber-950 dark:text-amber-200">Respaldo Colmed 3</h4>
                    <p className="text-[11px] text-amber-700 dark:text-amber-300/80">Proyecto validado con Medicina Familiar UANDES.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA 2: FORMULARIO LIMPIO Y PROTAGÓNICO */}
            <div className="lg:col-span-7">
              <div className="bg-white/95 dark:bg-[#0c1122]/90 dark:backdrop-blur-xl p-6 sm:p-9 lg:p-10 rounded-3xl border border-purple-200/70 dark:border-white/[0.09] shadow-2xl shadow-purple-500/10 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-left relative overflow-hidden">
                {/* Acento superior de degradado de marca */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-[#e06f00] to-[#f28f36]" />
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer mínimo */}
      <footer className="border-t border-[var(--aps-border-subtle)] bg-[#050811] text-slate-400 text-xs py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p>&copy; 2027 APS Conecta &bull; Proyecto financiado por Fondos Concursables CRS Colmed 3.</p>
          <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
            Volver a apsconecta.cl
          </Link>
        </div>
      </footer>
    </div>
  );
}
