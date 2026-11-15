'use client';

import React, { useState, useRef, useCallback } from 'react';
import {
  Folder,
  BrainCircuit,
  BarChart2,
  Pill,
  Map,
  Monitor,
  Activity,
  Image as ImageIcon,
  Calendar,
  Users,
  Layers,
  Radio,
  Edit3,
  FileText,
  CheckSquare,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { ApsLogo } from '@/components/ApsLogo';

interface AppTile {
  id: string;
  nombre: string;
  motorOpenSource: string;
  icono: React.ElementType;
  colorIcono: string;
  bgIcono: string;
  colorHex: string;
  descripcionCorta: string;
  // Ruta de circuito ortogonal que viaja por los pasillos entre tarjetas
  circuitPath: string;
  // Retardo de inicio desfasado para el flujo animado pasivo hacia el centro
  passiveDelay: number;
}

// Las 17 aplicaciones exactas del dock dispuestas en 5 filas en diamante/cruz
const DOCK_APPS: AppTile[] = [
  // Fila 1 (Norte: 3 apps centradas)
  {
    id: 'archivos',
    nombre: 'Archivos',
    motorOpenSource: 'Nextcloud Files',
    icono: Folder,
    colorIcono: 'text-purple-600 dark:text-purple-400',
    bgIcono: 'bg-purple-100 dark:bg-purple-950/60',
    colorHex: '#c084fc',
    descripcionCorta: 'Gestión documental y oficios con acuse de lectura legal.',
    circuitPath: 'M 300 150 L 300 380',
    passiveDelay: 0.0,
  },
  {
    id: 'asistente',
    nombre: 'Asistente de Decisiones',
    motorOpenSource: 'Ollama AI Local',
    icono: BrainCircuit,
    colorIcono: 'text-amber-600 dark:text-amber-400',
    bgIcono: 'bg-amber-100 dark:bg-amber-950/60',
    colorHex: '#fbbf24',
    descripcionCorta: 'Síntesis de circulares y clasificación de oficios en el rack.',
    circuitPath: 'M 500 150 L 500 380',
    passiveDelay: 1.2,
  },
  {
    id: 'estadistica',
    nombre: 'Estadística',
    motorOpenSource: 'Nextcloud Analytics',
    icono: BarChart2,
    colorIcono: 'text-blue-600 dark:text-blue-400',
    bgIcono: 'bg-blue-100 dark:bg-blue-950/60',
    colorHex: '#60a5fa',
    descripcionCorta: 'Monitoreo de metas REM (Ley 19.813) y reportes de corte.',
    circuitPath: 'M 700 150 L 700 380',
    passiveDelay: 2.4,
  },

  // Fila 2 (4 apps)
  {
    id: 'farmacia',
    nombre: 'Farmacia',
    motorOpenSource: 'Nextcloud Tables',
    icono: Pill,
    colorIcono: 'text-emerald-600 dark:text-emerald-400',
    bgIcono: 'bg-emerald-100 dark:bg-emerald-950/60',
    colorHex: '#34d399',
    descripcionCorta: 'Petitorio comunal de fármacos y alertas de quiebre de stock.',
    circuitPath: 'M 180 310 L 180 410 L 300 410',
    passiveDelay: 0.6,
  },
  {
    id: 'territorio',
    nombre: 'Territorio',
    motorOpenSource: 'PostGIS / Maps',
    icono: Map,
    colorIcono: 'text-sky-600 dark:text-sky-400',
    bgIcono: 'bg-sky-100 dark:bg-sky-950/60',
    colorHex: '#38bdf8',
    descripcionCorta: 'Sectorización MAIS en 4 cuadrantes y pacientes PADI.',
    circuitPath: 'M 390 310 L 390 380',
    passiveDelay: 1.8,
  },
  {
    id: 'totem',
    nombre: 'Totem',
    motorOpenSource: 'Nextcloud Kiosk',
    icono: Monitor,
    colorIcono: 'text-indigo-600 dark:text-indigo-400',
    bgIcono: 'bg-indigo-100 dark:bg-indigo-950/60',
    colorHex: '#818cf8',
    descripcionCorta: 'Pantallas en salas de espera para orientación comunitaria.',
    circuitPath: 'M 610 310 L 610 380',
    passiveDelay: 2.9,
  },
  {
    id: 'epidemiologia',
    nombre: 'Epidemiología',
    motorOpenSource: 'Nextcloud Alerts',
    icono: Activity,
    colorIcono: 'text-rose-600 dark:text-rose-400',
    bgIcono: 'bg-rose-100 dark:bg-rose-950/60',
    colorHex: '#f87171',
    descripcionCorta: 'Vigilancia comunal de brotes y seguimiento de alertas ENO.',
    circuitPath: 'M 820 310 L 820 410 L 700 410',
    passiveDelay: 0.4,
  },

  // Fila 3 (Flanco Izquierdo y Derecho con APS Conecta al centro exacto)
  {
    id: 'fotos',
    nombre: 'Fotos',
    motorOpenSource: 'Nextcloud Memories',
    icono: ImageIcon,
    colorIcono: 'text-teal-600 dark:text-teal-400',
    bgIcono: 'bg-teal-100 dark:bg-teal-950/60',
    colorHex: '#2dd4bf',
    descripcionCorta: 'Respaldo visual seguro de operativos en terreno y comités.',
    circuitPath: 'M 200 450 L 300 450',
    passiveDelay: 1.6,
  },
  {
    id: 'calendario',
    nombre: 'Calendario',
    motorOpenSource: 'Nextcloud Calendar',
    icono: Calendar,
    colorIcono: 'text-purple-600 dark:text-purple-400',
    bgIcono: 'bg-purple-100 dark:bg-purple-950/60',
    colorHex: '#a78bfa',
    descripcionCorta: 'Agenda de boxes clínicos y turnos de urgencia SAPU/SAR.',
    circuitPath: 'M 800 450 L 700 450',
    passiveDelay: 2.7,
  },

  // Fila 4 (4 apps)
  {
    id: 'contactos',
    nombre: 'Contactos',
    motorOpenSource: 'Nextcloud Contacts',
    icono: Users,
    colorIcono: 'text-blue-600 dark:text-blue-400',
    bgIcono: 'bg-blue-100 dark:bg-blue-950/60',
    colorHex: '#60a5fa',
    descripcionCorta: 'Guía de anexos internos de SOME, farmacia y red comunal.',
    circuitPath: 'M 180 590 L 180 490 L 300 490',
    passiveDelay: 0.9,
  },
  {
    id: 'deck',
    nombre: 'Deck',
    motorOpenSource: 'Nextcloud Deck',
    icono: Layers,
    colorIcono: 'text-fuchsia-600 dark:text-fuchsia-400',
    bgIcono: 'bg-fuchsia-100 dark:bg-fuchsia-950/60',
    colorHex: '#e879f9',
    descripcionCorta: 'Tableros Kanban visuales para comités técnicos y compras.',
    circuitPath: 'M 390 590 L 390 520',
    passiveDelay: 2.1,
  },
  {
    id: 'intravox',
    nombre: 'IntraVox',
    motorOpenSource: 'Nextcloud Collectives',
    icono: Radio,
    colorIcono: 'text-pink-600 dark:text-pink-400',
    bgIcono: 'bg-pink-100 dark:bg-pink-950/60',
    colorHex: '#f472b6',
    descripcionCorta: 'Base de conocimiento comunal, circulares y resoluciones directivas.',
    circuitPath: 'M 610 590 L 610 520',
    passiveDelay: 0.3,
  },
  {
    id: 'notas',
    nombre: 'Notas',
    motorOpenSource: 'Nextcloud Notes',
    icono: Edit3,
    colorIcono: 'text-amber-600 dark:text-amber-400',
    bgIcono: 'bg-amber-100 dark:bg-amber-950/60',
    colorHex: '#fbbf24',
    descripcionCorta: 'Bitácoras clínicas de enlace y traspaso rápido de turnos.',
    circuitPath: 'M 820 590 L 820 490 L 700 490',
    passiveDelay: 1.5,
  },

  // Fila 5 (Sur: 4 apps de pedestal)
  {
    id: 'oficina',
    nombre: 'Oficina',
    motorOpenSource: 'OnlyOffice Local',
    icono: FileText,
    colorIcono: 'text-sky-600 dark:text-sky-400',
    bgIcono: 'bg-sky-100 dark:bg-sky-950/60',
    colorHex: '#38bdf8',
    descripcionCorta: 'Editor colaborativo de documentos clínicos y memorándums.',
    circuitPath: 'M 180 750 L 180 550 L 300 550',
    passiveDelay: 2.6,
  },
  {
    id: 'tareas',
    nombre: 'Tareas',
    motorOpenSource: 'Nextcloud Tasks',
    icono: CheckSquare,
    colorIcono: 'text-emerald-600 dark:text-emerald-400',
    bgIcono: 'bg-emerald-100 dark:bg-emerald-950/60',
    colorHex: '#34d399',
    descripcionCorta: 'Listas de verificación para entrega de turno y auditoría interna.',
    circuitPath: 'M 390 750 L 390 520',
    passiveDelay: 0.7,
  },
  {
    id: 'actividad',
    nombre: 'Actividad',
    motorOpenSource: 'Nextcloud Audit Log',
    icono: Zap,
    colorIcono: 'text-yellow-600 dark:text-yellow-400',
    bgIcono: 'bg-yellow-100 dark:bg-yellow-950/60',
    colorHex: '#facc15',
    descripcionCorta: 'Bitácora inmutable de auditoría conforme a la Ley 19.628.',
    circuitPath: 'M 610 750 L 610 520',
    passiveDelay: 1.9,
  },
  {
    id: 'talk',
    nombre: 'Talk',
    motorOpenSource: 'Nextcloud Talk',
    icono: MessageSquare,
    colorIcono: 'text-purple-600 dark:text-purple-400',
    bgIcono: 'bg-purple-100 dark:bg-purple-950/60',
    colorHex: '#c084fc',
    descripcionCorta: 'Mensajería instantánea y llamadas seguras por red LAN.',
    circuitPath: 'M 820 750 L 820 550 L 700 550',
    passiveDelay: 3.1,
  },
];

export default function ShowcaseViewer() {
  const [hoveredApp, setHoveredApp] = useState<AppTile | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCardEnter = useCallback((app: AppTile) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredApp(app);
  }, []);

  const handleCardLeave = useCallback(() => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredApp(null);
    }, 80);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto text-left select-none">
      
      {/* =========================================================================
          CAPA 1: RED DE CIRCUITOS ORTOGONALES POR LOS PASILLOS (DESKTOP)
          (Las líneas viajan por los espacios entre tarjetas directamente al hub)
      ========================================================================= */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 1000 900"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Rutas individuales de circuitos pasivos y activos */}
          {DOCK_APPS.map((app) => {
            const isHovered = hoveredApp?.id === app.id;
            return (
              <g key={`circuit-group-${app.id}`}>
                {/* Línea base sutil */}
                <path
                  d={app.circuitPath}
                  fill="none"
                  stroke={isHovered ? '#c084fc' : '#7f21fe'}
                  strokeWidth={isHovered ? '3.5' : '1.2'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={isHovered ? 'none' : '4 6'}
                  strokeOpacity={isHovered ? '1' : '0.22'}
                  filter={isHovered ? 'url(#circuitGlow)' : undefined}
                  className="transition-all duration-300"
                />

                {/* Pulso ACTIVO cuando se hace mouseover sobre esta tarjeta específica */}
                <circle
                  r="4.5"
                  fill="#ffffff"
                  filter="url(#circuitGlow)"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.2s ease-out',
                  }}
                >
                  <animateMotion
                    path={app.circuitPath}
                    dur="0.85s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Grupo de Pulsos PASIVOS continuos */}
          <g
            className="transition-opacity duration-300 ease-in-out pointer-events-none"
            style={{ opacity: hoveredApp ? 0.08 : 0.95 }}
          >
            {DOCK_APPS.map((app) => (
              <circle
                key={`passive-pulse-${app.id}`}
                r="3"
                fill={app.colorHex}
                filter="url(#circuitGlow)"
              >
                <animateMotion
                  path={app.circuitPath}
                  dur="3.2s"
                  begin={`${app.passiveDelay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.9;0.9;0"
                  keyTimes="0;0.15;0.85;1"
                  dur="3.2s"
                  begin={`${app.passiveDelay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>
        </svg>
      </div>

      {/* =========================================================================
          CAPA 2: ESTRUCTURA EN CRUZ / DIAMANTE SIMÉTRICO EN 5 FILAS (DESKTOP)
          Fila 1 (Norte): 3 cards centradas
          Fila 2: 4 cards centradas
          Fila 3 (Centro Exacto): Fotos | APS Conecta (Hub Central) | Calendario
          Fila 4: 4 cards centradas
          Fila 5 (Sur): 4 cards centradas
      ========================================================================= */}
      <div className="hidden md:flex flex-col gap-3.5 lg:gap-4 items-center w-full relative z-10">
        
        {/* Fila 1: 3 cards centradas (Archivos, Asistente, Estadística) */}
        <div className="flex justify-center gap-3.5 lg:gap-4 w-full">
          {DOCK_APPS.slice(0, 3).map((app) => (
            <DentalinkCard
              key={app.id}
              app={app}
              isHovered={hoveredApp?.id === app.id}
              onEnter={() => handleCardEnter(app)}
              onLeave={handleCardLeave}
              className="w-[155px] lg:w-[175px]"
            />
          ))}
        </div>

        {/* Fila 2: 4 cards centradas (Farmacia, Territorio, Totem, Epidemiología) */}
        <div className="flex justify-center gap-3.5 lg:gap-4 w-full">
          {DOCK_APPS.slice(3, 7).map((app) => (
            <DentalinkCard
              key={app.id}
              app={app}
              isHovered={hoveredApp?.id === app.id}
              onEnter={() => handleCardEnter(app)}
              onLeave={handleCardLeave}
              className="w-[155px] lg:w-[175px]"
            />
          ))}
        </div>

        {/* Fila 3 (Centro Exacto): Fotos (izq) | APS Conecta (centro elevado) | Calendario (der) */}
        <div className="flex justify-center items-center gap-3.5 lg:gap-4 w-full">
          <DentalinkCard
            app={DOCK_APPS[7]}
            isHovered={hoveredApp?.id === DOCK_APPS[7].id}
            onEnter={() => handleCardEnter(DOCK_APPS[7])}
            onLeave={handleCardLeave}
            className="w-[155px] lg:w-[175px]"
          />

          <div className="w-[360px] lg:w-[420px] flex-shrink-0 z-20">
            <CenterHubCard hoveredApp={hoveredApp} />
          </div>

          <DentalinkCard
            app={DOCK_APPS[8]}
            isHovered={hoveredApp?.id === DOCK_APPS[8].id}
            onEnter={() => handleCardEnter(DOCK_APPS[8])}
            onLeave={handleCardLeave}
            className="w-[155px] lg:w-[175px]"
          />
        </div>

        {/* Fila 4: 4 cards centradas (Contactos, Deck, IntraVox, Notas) */}
        <div className="flex justify-center gap-3.5 lg:gap-4 w-full">
          {DOCK_APPS.slice(9, 13).map((app) => (
            <DentalinkCard
              key={app.id}
              app={app}
              isHovered={hoveredApp?.id === app.id}
              onEnter={() => handleCardEnter(app)}
              onLeave={handleCardLeave}
              className="w-[155px] lg:w-[175px]"
            />
          ))}
        </div>

        {/* Fila 5: 4 cards de base centradas (Oficina, Tareas, Actividad, Talk) */}
        <div className="flex justify-center gap-3.5 lg:gap-4 w-full">
          {DOCK_APPS.slice(13, 17).map((app) => (
            <DentalinkCard
              key={app.id}
              app={app}
              isHovered={hoveredApp?.id === app.id}
              onEnter={() => handleCardEnter(app)}
              onLeave={handleCardLeave}
              className="w-[155px] lg:w-[175px]"
            />
          ))}
        </div>

      </div>

      {/* Versión Móvil accesible: Hub superior + Grilla de 2 columnas */}
      <div className="md:hidden flex flex-col gap-3 w-full relative z-10">
        <div className="w-full mb-1">
          <CenterHubCard hoveredApp={hoveredApp} />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {DOCK_APPS.map((app) => (
            <DentalinkCard
              key={app.id}
              app={app}
              isHovered={hoveredApp?.id === app.id}
              onEnter={() => handleCardEnter(app)}
              onLeave={handleCardLeave}
              className="w-full"
            />
          ))}
        </div>
      </div>

    </div>
  );
}

// Tarjeta Central On-Premise APS Conecta (compartida entre Desktop y Móvil)
function CenterHubCard({ hoveredApp }: { hoveredApp: AppTile | null }) {
  return (
    <div className="w-full h-full min-h-[120px] sm:min-h-[135px] rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#0c1020] border-2 border-[#7f21fe] dark:border-purple-500 shadow-xl shadow-purple-900/20 flex flex-col items-center justify-center text-center gap-2 relative overflow-hidden group">
      {/* Pulso de radar animado en el fondo */}
      <div
        className="absolute inset-0 rounded-3xl bg-purple-500/10 animate-ping opacity-25 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center gap-2">
        <ApsLogo size={32} />
        <span className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
          APS Conecta
        </span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700/60">
          Nextcloud Hub
        </span>
      </div>

      {/* Mensaje dinámico con altura fija y sin saltos al alternar entre tarjetas */}
      <div className="relative z-10 w-full min-h-[44px] flex flex-col items-center justify-center text-center space-y-1 px-2">
        {hoveredApp ? (
          <>
            <h3 className="text-xs sm:text-sm font-bold text-[#7f21fe] dark:text-purple-300 flex items-center justify-center gap-1.5 truncate max-w-full animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>{hoveredApp.nombre}</span>
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium truncate max-w-md mx-auto animate-fadeIn">
              {hoveredApp.descripcionCorta}
            </p>
          </>
        ) : (
          <>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate max-w-full">
              Toda la trastienda de tu CESFAM conectada
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal truncate max-w-sm mx-auto">
              Explora las 17 aplicaciones
            </p>
          </>
        )}
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 pt-0.5 text-[10px] font-mono text-purple-700 dark:text-purple-300">
        <span className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/40">
          100% Red LAN Local
        </span>
        <span className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/40">
          $0 en Licencias
        </span>
      </div>
    </div>
  );
}

// Renderizado de cada tarjeta simple al estilo Dentalink:
// Icono centrado, Nombre en negrita, escala suave al mouseover y señal luminosa
function DentalinkCard({
  app,
  isHovered,
  onEnter,
  onLeave,
  className = '',
}: {
  app: AppTile;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  className?: string;
}) {
  const Icon = app.icono;

  return (
    <div
      key={app.id}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`rounded-2xl p-3 sm:p-3.5 bg-white dark:bg-[#0e1424] border flex flex-col items-center justify-center text-center gap-1.5 cursor-pointer transition-all duration-200 ease-out select-none min-h-[92px] sm:min-h-[105px] relative ${
        isHovered
          ? 'scale-[1.04] sm:scale-105 shadow-xl shadow-purple-500/20 border-[#7f21fe] dark:border-purple-400 z-30 bg-purple-50/90 dark:bg-[#13192f]'
          : 'border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/50 shadow-xs'
      } ${className}`}
    >
      {/* Contenedor del icono suave */}
      <div
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-transform duration-200 ${
          isHovered
            ? 'scale-110 bg-[#7f21fe] text-white shadow-md shadow-purple-500/30'
            : `${app.bgIcono} ${app.colorIcono}`
        }`}
      >
        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" aria-hidden="true" />
      </div>

      {/* Nombre de la app (conciso y directo como Dentalink) */}
      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight leading-tight line-clamp-1">
        {app.nombre}
      </span>

      {/* Pequeña etiqueta de motor open source visible de forma sutil */}
      <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-semibold opacity-75 group-hover:opacity-100 truncate max-w-full">
        {app.motorOpenSource}
      </span>
    </div>
  );
}
