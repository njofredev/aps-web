import React from 'react';
import Navigation from '@/components/Navigation';
import HeroInteractivePreview from '@/components/HeroInteractivePreview';
import ShowcaseViewer from '@/components/ShowcaseViewer';
import ContactForm from '@/components/ContactForm';
import FaqAccordion from '@/components/FaqAccordion';
import DailyContrast from '@/components/DailyContrast';
import { ApsLogo } from '@/components/ApsLogo';
import {
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  Play,
  Award,
  Stethoscope,
  Sparkles,
  CheckCircle2,
  Folder,
  Pill,
  Calendar,
  Layers,
  Activity,
} from 'lucide-react';

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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--aps-canvas-bg)] text-[var(--aps-text-primary)] transition-colors duration-200 selection:bg-[#7f21fe]/30 selection:text-purple-200">
      
      {/* ===================== NAVEGACIÓN PRINCIPAL ===================== */}
      <Navigation />

      <main id="main-content" className="flex-1">
        {/* =========================================================================
            SECCIÓN 1: HERO (EL PUNTO CIEGO)
        ========================================================================= */}
        <section
          id="inicio"
          aria-labelledby="inicio-heading"
          className="scroll-mt-24 relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-[var(--aps-border-subtle)] ambient-glow-top"
        >
          {/* Luces radiales ambientales de fondo */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7f21fe]/15 rounded-full blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 text-center">
            
            {/* Cintillo superior con respaldo de Nextcloud (Color oficial #0082c9) y Colmed 3 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0082c9]/10 dark:bg-[#0082c9]/20 border border-[#0082c9]/35 dark:border-[#0082c9]/50 text-[#00659e] dark:text-[#38bdf8] text-xs font-semibold shadow-xs mb-6 sm:mb-8 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0082c9] dark:text-[#38bdf8]" aria-hidden="true" />
              <span>Con la potencia de Nextcloud Hub &bull; Proyecto Colmed 3</span>
            </div>

            {/* Gran titular centrado con píldoras interactivas de aplicaciones */}
            <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
              
              {/* Píldora 1: Archivos (Arriba a la izquierda) */}
              <div className="hidden xl:block absolute -left-6 2xl:-left-12 -top-5 z-10">
                <div
                  className="animate-float-1 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#0e1424]/95 text-slate-800 dark:text-slate-100 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-purple-950/10 dark:shadow-purple-950/40 text-xs font-semibold flex items-center gap-2 backdrop-blur-md cursor-pointer select-none transition-all duration-300 hover:scale-110 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95"
                  title="Nextcloud Files: Repositorio central de documentos y oficios"
                >
                  <span className="p-1 rounded-lg bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                    <Folder className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>Archivos</span>
                </div>
              </div>

              {/* Píldora 2: Farmacia (Medio a la izquierda) */}
              <div className="hidden xl:block absolute -left-10 2xl:-left-16 top-24 z-10">
                <div
                  className="animate-float-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#0e1424]/95 text-slate-800 dark:text-slate-100 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-purple-950/10 dark:shadow-purple-950/40 text-xs font-semibold flex items-center gap-2 backdrop-blur-md cursor-pointer select-none transition-all duration-300 hover:scale-110 hover:border-emerald-400 dark:hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/25 active:scale-95"
                  title="Nextcloud Tables: Petitorio comunal y trazabilidad de medicamentos"
                >
                  <span className="p-1 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <Pill className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>Farmacia</span>
                </div>
              </div>

              {/* Píldora 3: Asistente AI (Abajo a la izquierda) */}
              <div className="hidden xl:block absolute -left-6 2xl:-left-12 bottom-12 z-10">
                <div
                  className="animate-float-3 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#0e1424]/95 text-slate-800 dark:text-slate-100 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-purple-950/10 dark:shadow-purple-950/40 text-xs font-semibold flex items-center gap-2 backdrop-blur-md cursor-pointer select-none transition-all duration-300 hover:scale-110 hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/25 active:scale-95"
                  title="Ollama Local: Síntesis de circulares y clasificación de oficios en el rack"
                >
                  <span className="p-1 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
                    <BrainCircuit className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>Asistente AI</span>
                </div>
              </div>

              {/* Píldora 4: Calendario (Arriba a la derecha) */}
              <div className="hidden xl:block absolute -right-6 2xl:-right-12 -top-5 z-10">
                <div
                  className="animate-float-4 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#0e1424]/95 text-slate-800 dark:text-slate-100 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-purple-950/10 dark:shadow-purple-950/40 text-xs font-semibold flex items-center gap-2 backdrop-blur-md cursor-pointer select-none transition-all duration-300 hover:scale-110 hover:border-violet-400 dark:hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/25 active:scale-95"
                  title="Nextcloud Calendar: Agenda de boxes clínicos y turnos de urgencia"
                >
                  <span className="p-1 rounded-lg bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>Calendario</span>
                </div>
              </div>

              {/* Píldora 5: Deck Kanban (Medio a la derecha) */}
              <div className="hidden xl:block absolute -right-10 2xl:-right-16 top-24 z-10">
                <div
                  className="animate-float-5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#0e1424]/95 text-slate-800 dark:text-slate-100 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-purple-950/10 dark:shadow-purple-950/40 text-xs font-semibold flex items-center gap-2 backdrop-blur-md cursor-pointer select-none transition-all duration-300 hover:scale-110 hover:border-fuchsia-400 dark:hover:border-fuchsia-400 hover:shadow-xl hover:shadow-fuchsia-500/25 active:scale-95"
                  title="Nextcloud Deck: Tableros Kanban para comités técnicos y compras"
                >
                  <span className="p-1 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">
                    <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>Deck Kanban</span>
                </div>
              </div>

              {/* Píldora 6: Epidemiología (Abajo a la derecha) */}
              <div className="hidden xl:block absolute -right-6 2xl:-right-12 bottom-12 z-10">
                <div
                  className="animate-float-6 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#0e1424]/95 text-slate-800 dark:text-slate-100 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-purple-950/10 dark:shadow-purple-950/40 text-xs font-semibold flex items-center gap-2 backdrop-blur-md cursor-pointer select-none transition-all duration-300 hover:scale-110 hover:border-rose-400 dark:hover:border-rose-400 hover:shadow-xl hover:shadow-rose-500/25 active:scale-95"
                  title="Nextcloud Alerts: Vigilancia comunal y seguimiento de alertas sanitarias"
                >
                  <span className="p-1 rounded-lg bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400">
                    <Activity className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>Epidemiología</span>
                </div>
              </div>

              <h1
                id="inicio-heading"
                className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08] text-[var(--aps-text-primary)] max-w-3xl mx-auto"
              >
                La gestión interna que un CESFAM{' '}
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                  nunca tuvo.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-[var(--aps-text-secondary)] leading-relaxed max-w-3xl mx-auto font-normal">
                Deja atrás las planillas sueltas, los correos perdidos y los papeles de pasillo. APS Conecta reúne la coordinación diaria de tu CESFAM (turnos, farmacia, oficios y metas) en un sistema propio, privado y gratuito.
              </p>

              {/* Botones CTA principales */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contacto"
                  className="h-12 sm:h-13 px-7 rounded-full bg-[#7f21fe] hover:bg-[#6c1bd9] active:bg-[#581cb1] text-white text-sm font-bold shadow-[0_8px_30px_rgba(127,33,254,0.5)] hover:shadow-[0_10px_35px_rgba(127,33,254,0.7)] transition-all flex items-center gap-2"
                >
                  <span>Solicitar Piloto en tu Comuna</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#explorar-demo"
                  className="h-12 sm:h-13 px-7 rounded-full bg-white/10 dark:bg-white/10 light:bg-slate-200 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-slate-300 text-[var(--aps-text-primary)] border border-white/15 dark:border-white/15 light:border-slate-300 text-sm font-semibold transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <Play className="w-4 h-4 fill-current text-purple-400" aria-hidden="true" />
                  <span>Explorar Demostración</span>
                </a>
              </div>
            </div>

            {/* Mockup interactivo limpio sin etiquetas flotantes */}
            <div id="explorar-demo" className="scroll-mt-24 mt-12 sm:mt-16 ambient-glow-bottom pt-4 pb-2">
              <HeroInteractivePreview />
            </div>

            {/* Barra de respaldo institucional sobria */}
            <div className="mt-14 sm:mt-20 pt-8 border-t border-[var(--aps-border-subtle)]">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--aps-text-muted)] mb-6">
                Respaldo institucional y estándares técnicos de salud pública:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-[var(--aps-text-secondary)] opacity-85">
                <span className="flex items-center gap-2 hover:text-[var(--aps-text-primary)] transition-colors">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Colegio Médico de Chile (CRS)</span>
                </span>
                <span className="flex items-center gap-2 hover:text-[var(--aps-text-primary)] transition-colors">
                  <Stethoscope className="w-4 h-4 text-purple-400" />
                  <span>Medicina Familiar UANDES</span>
                </span>
                <span className="flex items-center gap-2 hover:text-[var(--aps-text-primary)] transition-colors">
                  <GithubIcon className="w-4 h-4" />
                  <span>Código Abierto AGPL-3.0 (v1.1.0)</span>
                </span>
                <span className="flex items-center gap-2 hover:text-[var(--aps-text-primary)] transition-colors">
                  <BrainCircuit className="w-4 h-4 text-emerald-400" />
                  <span>Ollama Local AI (Mistral/Qwen)</span>
                </span>
                <span className="flex items-center gap-2 hover:text-[var(--aps-text-primary)] transition-colors">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Ley 21.454 Transformación Digital</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECCIÓN 2: EL CONTRASTE DIARIO (PROBLEMA VS. SOLUCIÓN LOCAL)
        ========================================================================= */}
        <section
          id="por-que"
          aria-labelledby="por-que-heading"
          className="scroll-mt-24 relative py-20 sm:py-28 border-y border-white/10 bg-[#0a0f1d] text-white overflow-hidden"
        >
          {/* Resplandor violeta ambiental centrado para profundidad */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7f21fe]/12 rounded-full blur-[130px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
                POR QUÉ APS CONECTA
              </span>
              <h2
                id="por-que-heading"
                className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
              >
                Todo lo que ocurre fuera del box,{' '}
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                  por fin
                </span>{' '}
                en un solo lugar.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                La Atención Primaria no falla por falta de vocación, sino por una trastienda fragmentada en planillas sueltas, carpetas extraviadas y grupos de WhatsApp.
              </p>
            </div>

            {/* Las 3 Tarjetas de Valor (Diseño sobrio, oscuro y de alto contraste) */}
            <DailyContrast />
          </div>
        </section>

        {/* =========================================================================
            SECCIÓN 3: LAS 17 APLICACIONES DE TU CESFAM (OPEN SOURCE EN NEXTCLOUD)
        ========================================================================= */}
        <section
          id="demostracion"
          aria-labelledby="demostracion-heading"
          className="scroll-mt-24 py-16 sm:py-20 border-b border-[var(--aps-border-subtle)] bg-[var(--aps-canvas-bg)]"
        >
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
            
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <span className="text-xs font-mono font-bold text-[#7f21fe] dark:text-purple-400 uppercase tracking-widest">
                APLICACIONES INCLUIDAS
              </span>
              <h2
                id="demostracion-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--aps-text-primary)]"
              >
                Las{' '}
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                  17 aplicaciones
                </span>{' '}
                de tu CESFAM
              </h2>
              <p className="text-sm text-[var(--aps-text-secondary)] font-normal">
                Todas de código abierto sobre Nextcloud Hub, ejecutadas en tu servidor físico y con $0 en licencias.
              </p>
            </div>

            {/* Showcase Viewer: Las 17 aplicaciones del CESFAM */}
            <ShowcaseViewer />
          </div>
        </section>

        {/* =========================================================================
            SECCIÓN 4: IMPACTO EN BURNOUT + INVITACIÓN AL PILOTO Y FORMULARIO
        ========================================================================= */}
        <section
          id="contacto"
          aria-labelledby="contacto-heading"
          className="scroll-mt-24 py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-50/40 to-slate-100/60 dark:from-transparent dark:to-transparent dark:bg-[var(--aps-canvas-subtle)]"
        >
          {/* Resplandor violeta ambiental centrado para modo claro y oscuro */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-500/10 via-[#7f21fe]/12 to-amber-500/10 rounded-full blur-[140px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12 relative z-10">
            
            {/* Formulario minimalista centrado */}
            <div className="max-w-2xl mx-auto space-y-6">
              
              {/* Encabezado centrado y directo */}
              <div className="text-center space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/40 text-[#7f21fe] dark:text-purple-300 text-xs font-bold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                  <span>Convocatoria 2026</span>
                </div>
                <h2
                  id="contacto-heading"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--aps-text-primary)] leading-tight"
                >
                  Postula tu{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                    CESFAM
                  </span>{' '}
                  al piloto
                </h2>
                <p className="text-xs sm:text-sm text-[var(--aps-text-secondary)] leading-relaxed max-w-lg mx-auto">
                  Instalamos un servidor de prueba en tu red local con las 17 aplicaciones operativas. $0 en licencias y sin tocar RAYEN ni OMI.
                </p>

                {/* 3 Garantías con acentos cromáticos armoniosos en modo claro y oscuro */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/25 text-emerald-800 dark:text-emerald-300 font-semibold shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>100% Red LAN Local</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 text-purple-800 dark:text-purple-300 font-semibold shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" aria-hidden="true" />
                    <span>$0 en Licencias (AGPL-3.0)</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-500/25 text-amber-900 dark:text-amber-300 font-semibold shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                    <span>Respaldo Colmed 3</span>
                  </span>
                </div>
              </div>

              {/* Tarjeta del Formulario centrada con relieve y borde iluminado */}
              <div className="bg-white dark:bg-[#0c1020] p-6 sm:p-8 rounded-3xl border border-purple-200/70 dark:border-white/10 shadow-2xl shadow-purple-500/10 dark:shadow-purple-950/40 text-left relative overflow-hidden">
                {/* Acento superior de degradado de marca */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-amber-300" />
                <ContactForm />
              </div>

            </div>

            {/* Preguntas Frecuentes */}
            <div className="max-w-3xl mx-auto space-y-6 pt-10">
              <div className="text-center space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--aps-text-primary)]">
                  Preguntas Frecuentes sobre{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                    APS Conecta
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--aps-text-secondary)]">
                  Respuestas técnicas y operativas sobre infraestructura, privacidad y financiamiento.
                </p>
              </div>

              <FaqAccordion />
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER INSTITUCIONAL ===================== */}
      <footer className="border-t border-[var(--aps-border-subtle)] bg-[#050811] text-slate-400 text-xs py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <ApsLogo className="w-8 h-8 text-[#7f21fe]" />
                <span className="font-extrabold text-base tracking-tight text-white">
                  APS Conecta
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
                Plataforma de soberanía digital para la Atención Primaria chilena. Desarrollada bajo código abierto para coordinar procesos clínico-administrativos sin depender de la nube.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold pt-1">
                <a
                  href="https://github.com/APS-Conecta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub de APS Conecta</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Navegación
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#inicio" className="hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#por-que" className="hover:text-white transition-colors">
                    Por qué APS Conecta
                  </a>
                </li>
                <li>
                  <a href="#demostracion" className="hover:text-white transition-colors">
                    Aplicaciones
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition-colors">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Respaldos
              </h4>
              <ul className="space-y-2.5 text-slate-400">
                <li>Medicina Familiar UANDES</li>
                <li>Licencia AGPL-3.0</li>
                <li>Ley 21.454</li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-400 mb-2">Solicita Reunión:</div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Solicitar Piloto</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>
              &copy; 2026 APS Conecta. Proyecto financiado por Fondos Concursables CRS Colegio Médico de Chile (Colmed 3). Publicado bajo licencia AGPL-3.0.
            </p>
            <p className="italic text-purple-300">
              «La salud primaria que compartimos es la que mejora»
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
