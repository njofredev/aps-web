'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Cpu,
  Server,
  Users,
} from 'lucide-react';

interface StepCard {
  step: number;
  id: string;
  category: string;
  title: string;
  description: string;
  // Problemática concreta
  painPoint: string;
  // Solución activa
  solutionHeadline: string;
  solutionSub: string;
  metric: string;
  metricLabel: string;
  // Rol / persona
  persona: {
    name: string;
    role: string;
    avatarBg: string;
    initials: string;
  };
  tags: string[];
  mockVisual: {
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    detailTitle: string;
    detailItems: string[];
  };
}

const STEPS: StepCard[] = [
  {
    step: 1,
    id: 'acreditacion',
    category: 'Acreditación y Legal',
    title: 'Trazabilidad oficial de oficios y circulares',
    description:
      'Distribución centralizada de resoluciones ministeriales y protocolos clínicos con firma y acuse de lectura legal por funcionario. Preparado para fiscalización de la Superintendencia de Salud.',
    painPoint:
      'Oficios impresos extraviados en carpetas físicas y protocolos sin lectura comprobable.',
    solutionHeadline: 'Acreditación CESFAM 100% al día',
    solutionSub: 'Acuse de lectura legal firmado para los 10 estamentos del centro.',
    metric: '100% Trazable',
    metricLabel: 'Cumplimiento SuperSalud',
    persona: {
      name: 'Dra. Marcela Gómez',
      role: 'Directora Técnica CESFAM',
      avatarBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      initials: 'MG',
    },
    tags: ['Acreditación', 'Oficios MINSAL', 'Acuse Legal'],
    mockVisual: {
      icon: Building2,
      accentColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      detailTitle: 'Expediente Normativo SuperSalud',
      detailItems: [
        'Firma de acuse legal registrada por funcionario',
        'Repositorio inmutable de resoluciones directivas',
        'Búsqueda de memorándums por RUT o materia',
      ],
    },
  },
  {
    step: 2,
    id: 'ia-local',
    category: 'IA Local en el Rack',
    title: 'Asistente de síntesis clínica en servidor propio',
    description:
      'Modelos de IA (Ollama + Mistral) instalados en el rack físico del centro para resumir normativas extensas sin enviar datos confidenciales de pacientes a nubes externas.',
    painPoint:
      'Sobrecarga leyendo documentos de 70+ págs o uso de ChatGPT con fuga de datos sensibles.',
    solutionHeadline: 'Ollama Offline en Red Local',
    solutionSub: 'Filtro DLP automático: cero fuga de datos sensibles de pacientes.',
    metric: '0.00% Fuga',
    metricLabel: 'Soberanía de Datos',
    persona: {
      name: 'Dr. Felipe Soto',
      role: 'Médico Jefe Sector Azul',
      avatarBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      initials: 'FS',
    },
    tags: ['Ollama Offline', 'DLP Filter', 'Sin Suscripción'],
    mockVisual: {
      icon: Cpu,
      accentColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      detailTitle: 'Motor de Inferencia On-Premise',
      detailItems: [
        'Filtro DLP que bloquea RUT y nombres de pacientes',
        'Briefing matutino automático para equipos de cabecera',
        '$0 costo por token o suscripciones externas',
      ],
    },
  },
  {
    step: 3,
    id: 'soberania',
    category: 'Soberanía y Red Local',
    title: 'Autonomía total si se corta el enlace de internet',
    description:
      'Arquitectura LAN local sobre Nextcloud Hub: farmacia, agendas de boxes, anexos y archivos internos siguen funcionando al 100% aunque caiga la fibra óptica comunal.',
    painPoint:
      'Caídas de enlace exterior que paralizan SOME, entrega de turnos y coordinación de urgencias.',
    solutionHeadline: 'Servidor Local Autónomo',
    solutionSub: 'Turnos y mensajería continúan operando en red interna sin pausa.',
    metric: '100% en LAN',
    metricLabel: 'Disponibilidad Continua',
    persona: {
      name: 'Carlos Miranda',
      role: 'Encargado de Informática Comunal',
      avatarBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      initials: 'CM',
    },
    tags: ['Red LAN Local', '$0 Licencias', 'Respaldo Físico'],
    mockVisual: {
      icon: Server,
      accentColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      detailTitle: 'Resiliencia de Red Local (Offline)',
      detailItems: [
        'Agendas de boxes y entrega de turnos activa',
        'Directorio de anexos telefónicos en red interna',
        'Control municipal directo sin dependencia externa',
      ],
    },
  },
  {
    step: 4,
    id: 'equipo',
    category: 'Modelo MAIS Territorial',
    title: 'Canales seguros por sector y tableros de gestión',
    description:
      'Salas seguras por sector territorial (Azul, Verde, Rojo), tableros Kanban para comités y directorio telefónico de anexos en tiempo real para evitar interrupciones al box.',
    painPoint:
      'Grupos de WhatsApp con datos de pacientes personales e interrupciones golpeando puertas de box.',
    solutionHeadline: 'Nextcloud Talk + Deck Seguro',
    solutionSub: 'Canales cifrados sin compartir números de teléfono personales.',
    metric: '~45 min/día',
    metricLabel: 'Tiempo Ahorrado por Turno',
    persona: {
      name: 'Valentina Lagos',
      role: 'Enfermera Coordinadora Sector',
      avatarBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      initials: 'VL',
    },
    tags: ['Sector MAIS', 'Deck Kanban', 'Talk Seguro'],
    mockVisual: {
      icon: Users,
      accentColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      detailTitle: 'Coordinación Interdisciplinaria',
      detailItems: [
        'Canales institucionales protegidos sin celular privado',
        'Tableros Kanban de insumos y auditorías clínicas',
        'Traspaso ordenado de pendientes en cambio de turno',
      ],
    },
  },
];

export default function DailyContrast() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < STEPS.length - 1 ? prev + 1 : 0));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : STEPS.length - 1));
  }, []);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Manejador de touch swipe
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 select-none">
      
      {/* =========================================================================
          CONTENEDOR DEL CARRUSEL: ALINEACIÓN PERFECTA DE LA TARJETA ACTIVA
      ========================================================================= */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full overflow-hidden py-2"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            // Desplazamiento exacto de 100% por paso para que la tarjeta activa comience desde el borde izquierdo sin cortes
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {STEPS.map((step, idx) => {
            const isSelected = idx === activeIndex;
            const MockIcon = step.mockVisual.icon;

            return (
              <div
                key={step.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="w-full shrink-0 pr-0 sm:pr-8 lg:pr-12"
              >
                <div
                  className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-9 text-left flex flex-col justify-between transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#24314c] via-[#1a2337] to-[#121929] border-2 border-[#7f21fe]/70 shadow-2xl shadow-purple-950/50 opacity-100'
                      : 'bg-white/[0.04] border border-white/10 opacity-40'
                  }`}
                >
                  {/* Barra superior con gradiente oficial */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-[#e06f00] to-[#f28f36]" />

                  {/* Cabecera del paso */}
                  <div className="space-y-3.5 sm:space-y-4">
                    <div className="flex items-center justify-between gap-2.5 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 shadow-md font-black text-xs sm:text-sm flex items-center justify-center shrink-0">
                          {step.step}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-bold px-2.5 sm:px-3 py-1 rounded-full bg-[#7f21fe]/30 text-purple-200 border border-purple-400/30">
                          {step.category}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[9px] sm:text-[10px] text-slate-400 block font-medium">Impacto medido</span>
                        <span className="text-xs sm:text-base font-mono font-bold text-emerald-400">
                          {step.metric}
                        </span>
                      </div>
                    </div>

                    {/* Título y descripción sin recortes */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-white tracking-tight leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    {/* Caja de problemática (El Antes de APS Conecta) */}
                    <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-rose-950/30 border border-rose-500/25 flex items-start gap-2.5 sm:gap-3 text-rose-200/90">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider block">
                          Problemática antes de APS Conecta:
                        </span>
                        <p className="text-[11px] sm:text-xs leading-relaxed">{step.painPoint}</p>
                      </div>
                    </div>
                  </div>

                  {/* Zona inferior de la tarjeta: Persona clínica y mockup funcional */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10 items-center">
                    
                    {/* Tarjeta flotante de la persona clínica (estilo Letters) */}
                    <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white text-slate-900 shadow-xl shadow-black/25 flex items-center gap-2.5 sm:gap-3">
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-black text-xs text-white shrink-0 shadow-xs ${step.persona.avatarBg}`}
                      >
                        {step.persona.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                          {step.persona.name}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                          {step.persona.role}
                        </p>
                        <span className="inline-block text-[9px] sm:text-[10px] text-purple-700 font-bold uppercase tracking-wider">
                          Usuario verificado APS
                        </span>
                      </div>
                    </div>

                    {/* Detalle visual de solución técnica */}
                    <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 space-y-1 sm:space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`p-1 rounded-md border ${step.mockVisual.accentColor}`}>
                          <MockIcon className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs font-bold text-white truncate">
                          {step.mockVisual.detailTitle}
                        </span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-slate-300">
                        {step.mockVisual.detailItems.slice(0, 2).map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          CONTROLES DE NAVEGACIÓN Y DOTS INFERIORES
      ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 pt-1">
        
        {/* Indicadores de avance (dots interactivos con gradiente) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {STEPS.map((step, idx) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Ir al paso ${idx + 1}: ${step.title}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-7 sm:w-10 bg-gradient-to-r from-purple-500 via-[#e06f00] to-[#f28f36]'
                  : 'w-2 sm:w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
          <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono ml-1.5">
            {activeIndex + 1}/{STEPS.length}
          </span>
        </div>

        {/* Botones de avance / retroceso estilo carrusel */}
        <div className="flex items-center gap-2 text-slate-300">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Paso anterior (izquierda)"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Paso siguiente (derecha)"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-purple-500/40 shadow-lg shadow-purple-900/30 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 ring-1 ring-purple-400/40"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
}
