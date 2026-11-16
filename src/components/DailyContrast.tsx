'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
} from 'lucide-react';

interface TabItem {
  id: string;
  pillLabel: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  // Problemática concreta del "Antes de APS Conecta"
  problematica: {
    titulo: string;
    items: string[];
  };
  highlightCard: {
    tag: string;
    headline: string;
    subline: string;
    metricLabel: string;
    metricValue: string;
    features: string[];
    bgAccent: string;
    borderAccent: string;
  };
}

const TABS_DATA: TabItem[] = [
  {
    id: 'acreditacion',
    pillLabel: 'Acreditación y Documentos',
    badge: 'Trazabilidad Legal',
    title: 'De carpetas perdidas a trazabilidad oficial',
    description:
      'Centraliza oficios ministeriales, circulares y protocolos clínicos con acuse de lectura legal por funcionario. Preparado para fiscalizaciones y acreditación de la Superintendencia de Salud.',
    ctaText: 'Ver Gestión Documental',
    ctaHref: '#demostracion',
    problematica: {
      titulo: 'El antes (Problemática diaria del CESFAM):',
      items: [
        'Oficios y circulares impresas que se extravían en carpetas físicas de pasillo.',
        'Funcionarios que no se enteran de cambios en protocolos GES o flujos de derivación.',
        'Imposible certificar ante la Superintendencia quién leyó o firmó las normativas vigentes.',
      ],
    },
    highlightCard: {
      tag: 'Superintendencia de Salud',
      headline: 'Acreditación CESFAM',
      subline: 'Oficios MINSAL clasificados y distribuidos en segundos.',
      metricLabel: 'Cumplimiento Normativo',
      metricValue: '100% Trazable',
      features: [
        'Firma de acuse legal para los 10 estamentos',
        'Repositorio inmutable de resoluciones directivas',
        'Búsqueda instantánea de memorándums por RUT o materia',
      ],
      bgAccent: 'from-purple-950/70 via-[#10162a] to-[#0c1020]',
      borderAccent: 'border-purple-500/30',
    },
  },
  {
    id: 'ia-local',
    pillLabel: 'IA Local en el Rack',
    badge: 'Ollama On-Premise',
    title: 'Resúmenes automáticos sin tocar datos sensibles',
    description:
      'Inteligencia artificial que corre físicamente dentro del servidor de tu establecimiento. Resume circulares de 80 páginas, redacta actas de sector y asiste la gestión sin enviar un solo byte a OpenAI o a la nube comercial.',
    ctaText: 'Explorar Asistente de IA',
    ctaHref: '#demostracion',
    problematica: {
      titulo: 'El antes (Problemática diaria del CESFAM):',
      items: [
        'Profesionales sobrecargados leyendo documentos de 70+ páginas fuera de horario.',
        'Uso no autorizado de ChatGPT comercial con riesgo de fuga de datos sensibles y RUTs.',
        'Falta de síntesis operativa clara para los equipos clínicos en sus reuniones matutinas.',
      ],
    },
    highlightCard: {
      tag: 'Privacidad Estricta',
      headline: 'Ollama + Mistral Local',
      subline: 'Modelos de lenguaje en servidor físico propio.',
      metricLabel: 'Fuga de Datos a la Nube',
      metricValue: '0.00% (Offline)',
      features: [
        'Filtro DLP automático que bloquea RUT y diagnósticos',
        'Briefing matutino de novedades para equipos de cabecera',
        'Cero costo por token o suscripciones de API foráneas',
      ],
      bgAccent: 'from-amber-950/60 via-[#10162a] to-[#0c1020]',
      borderAccent: 'border-amber-500/30',
    },
  },
  {
    id: 'soberania',
    pillLabel: 'Soberanía y Red Local',
    badge: 'Resiliencia Crítica',
    title: 'Tu CESFAM sigue operando si se corta internet',
    description:
      'Construido sobre Nextcloud Hub para operar en la red LAN del centro. Si se cae la fibra óptica comunal o el enlace exterior, farmacia, entrega de turnos, anexos y mensajería continúan al 100% sin detener la atención.',
    ctaText: 'Revisar Arquitectura Local',
    ctaHref: '#contacto',
    problematica: {
      titulo: 'El antes (Problemática diaria del CESFAM):',
      items: [
        'Caída de internet que paraliza la coordinación interna y entrega de turnos de boxes.',
        'Gastos millonarios anuales en licencias SaaS privativas por cada funcionario.',
        'Dependencia de nubes externas sin soberanía ni control del departamento de salud.',
      ],
    },
    highlightCard: {
      tag: 'Disponibilidad Continua',
      headline: 'Servidor Físico On-Prem',
      subline: 'Autonomía total ante contingencias de telecomunicaciones.',
      metricLabel: 'Operatividad ante caídas de enlace',
      metricValue: '100% en LAN',
      features: [
        'Turnos, agendas y farmacia siguen respondiendo en red interna',
        '$0 en licencias mensuales o por puesto de trabajo (AGPL-3.0)',
        'Respaldo de datos soberano bajo control municipal',
      ],
      bgAccent: 'from-emerald-950/60 via-[#10162a] to-[#0c1020]',
      borderAccent: 'border-emerald-500/30',
    },
  },
  {
    id: 'equipo',
    pillLabel: 'Coordinación de Sectores',
    badge: 'Modelo MAIS',
    title: 'Fin a los grupos de WhatsApp y notas en papel',
    description:
      'Canales de comunicación interna cifrados por sector territorial (Azul, Verde, Rojo), tableros Kanban para comités de farmacia y directorio telefónico de anexos siempre actualizado para evitar interrupciones al box.',
    ctaText: 'Ver Canales y Tableros',
    ctaHref: '#demostracion',
    problematica: {
      titulo: 'El antes (Problemática diaria del CESFAM):',
      items: [
        'Comités y urgencias coordinadas por WhatsApp mezclando vida laboral y personal.',
        'Interrupciones constantes golpeando puertas de box por anexos telefónicos desactualizados.',
        'Pérdida de continuidad de cuidados y tareas críticas en el cambio de turno.',
      ],
    },
    highlightCard: {
      tag: 'Red Territorial MAIS',
      headline: 'Nextcloud Talk + Deck',
      subline: 'Salas seguras por sector, SOME, farmacia y urgencia SAR.',
      metricLabel: 'Tiempo recuperado al día',
      metricValue: '~45 min / profesional',
      features: [
        'Canales institucionales protegidos sin compartir números personales',
        'Tableros visuales para auditorías y solicitudes de insumos',
        'Traspaso ordenado de pendientes en cambio de turno',
      ],
      bgAccent: 'from-blue-950/60 via-[#10162a] to-[#0c1020]',
      borderAccent: 'border-blue-500/30',
    },
  },
];

export default function DailyContrast() {
  const [activeTabId, setActiveTabId] = useState<string>('acreditacion');

  const currentIndex = TABS_DATA.findIndex((t) => t.id === activeTabId);
  const activeTab = TABS_DATA[currentIndex] || TABS_DATA[0];

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % TABS_DATA.length;
    setActiveTabId(TABS_DATA[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + TABS_DATA.length) % TABS_DATA.length;
    setActiveTabId(TABS_DATA[prevIdx].id);
  };

  return (
    <div className="space-y-8 text-left relative z-10 w-full max-w-5xl mx-auto">
      
      {/* =========================================================================
          PÍLDORAS SUPERIORES ESTILO HEADSPACE (SELECTOR DE CATEGORÍAS)
      ========================================================================= */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {TABS_DATA.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer select-none ${
                isActive
                  ? 'bg-white text-slate-900 shadow-md shadow-white/10 scale-105'
                  : 'bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/[0.12] border border-white/5'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-[#7f21fe] scale-125' : 'bg-transparent'
                }`}
              />
              <span>{tab.pillLabel}</span>
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          CONTENEDOR SLIDER / VITRINA HERO INTERACTIVA ESTILO HEADSPACE
      ========================================================================= */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0e1424] via-[#090d18] to-[#050811] shadow-2xl shadow-purple-950/30">
        
        {/* Resplandor ambiental de fondo reactivo */}
        <div
          className="absolute -top-24 left-1/3 w-96 h-96 bg-[#7f21fe]/15 rounded-full blur-[120px] pointer-events-none transition-all duration-700"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 p-6 sm:p-10 lg:p-12 items-center relative z-10">
          
          {/* LADO IZQUIERDO: TEXTOS, PROBLEMÁTICA CONCRETA Y CTA */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeTab.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {activeTab.title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              {activeTab.description}
            </p>

            {/* CAJA DE PROBLEMÁTICAS: EL "ANTES DE APS CONECTA" */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-rose-950/25 border border-rose-500/25 space-y-2">
              <div className="flex items-center gap-2 text-rose-300 text-xs font-bold">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{activeTab.problematica.titulo}</span>
              </div>
              <ul className="space-y-1.5 text-[11px] sm:text-xs text-rose-200/85">
                {activeTab.problematica.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={activeTab.ctaHref}
                className="h-11 px-6 rounded-full bg-[#7f21fe] hover:bg-[#6c1bd9] text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>{activeTab.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Controles de avance / retroceso suaves */}
              <div className="flex items-center gap-1.5 text-slate-400">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Pilar anterior"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Pilar siguiente"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: MAQUETA DE TARJETA INTERACTIVA (EL "DESPUÉS CON APS CONECTA") */}
          <div className="lg:col-span-6">
            <div
              className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${activeTab.highlightCard.bgAccent} border ${activeTab.highlightCard.borderAccent} shadow-xl relative overflow-hidden transition-all duration-500`}
            >
              {/* Header de la tarjeta con badge de solución activa */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                <span className="text-[11px] font-mono font-bold text-purple-300 uppercase tracking-wider">
                  {activeTab.highlightCard.tag}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Solución Activa</span>
                </span>
              </div>

              {/* Título y subtítulo */}
              <div className="py-4 space-y-1">
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {activeTab.highlightCard.headline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeTab.highlightCard.subline}
                </p>
              </div>

              {/* Métrica destacada */}
              <div className="my-2 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {activeTab.highlightCard.metricLabel}
                </span>
                <span className="text-sm sm:text-base font-mono font-bold text-white">
                  {activeTab.highlightCard.metricValue}
                </span>
              </div>

              {/* Lista de beneficios con APS Conecta */}
              <ul className="pt-3 space-y-2.5">
                {activeTab.highlightCard.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Indicador de puntos (dots) en la parte inferior */}
        <div className="flex justify-center items-center gap-2 pb-5">
          {TABS_DATA.map((tab, idx) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              aria-label={`Ir a pilar ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                tab.id === activeTabId
                  ? 'w-6 bg-[#7f21fe]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
