'use client';

import React, { useState, useEffect } from 'react';
import {
  Server,
  HardDrive,
  Layers,
  BrainCircuit,
  CheckCircle2,
  XCircle,
  Wifi,
  WifiOff,
  Sparkles,
  TrendingDown,
  ShieldCheck,
  Building2,
  Users,
  FileCheck,
  Lock,
} from 'lucide-react';

type TabKey = 'soberania' | 'costos' | 'alcance' | 'ia';

interface TabConfig {
  key: TabKey;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  pillText: string;
}

const TABS: TabConfig[] = [
  {
    key: 'soberania',
    label: 'Soberanía y Ubicación',
    shortLabel: 'Soberanía Local',
    icon: Server,
    pillText: '100% On-Premise',
  },
  {
    key: 'costos',
    label: 'Costo del Software',
    shortLabel: 'Costo $0 Licencias',
    icon: HardDrive,
    pillText: '$0 por Usuario',
  },
  {
    key: 'alcance',
    label: 'Foco en el CESFAM',
    shortLabel: 'Trastienda Completa',
    icon: Layers,
    pillText: '17 Apps Nativas',
  },
  {
    key: 'ia',
    label: 'Inteligencia Artificial',
    shortLabel: 'IA Local Offline',
    icon: BrainCircuit,
    pillText: 'Cero Fuga DLP',
  },
];

export default function BentoComparison() {
  const [activeTab, setActiveTab] = useState<TabKey>('soberania');
  const [simulatedInternetCut, setSimulatedInternetCut] = useState(false);
  const [yearsSlider, setYearsSlider] = useState(3);
  const [selectedScopeView, setSelectedScopeView] = useState<'aps' | 'rayen'>('aps');

  // Auto-rotación sutil opcional si el usuario no interactúa, pero fácil de pausar
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = TABS.findIndex((t) => t.key === current);
        const nextIndex = (currentIndex + 1) % TABS.length;
        return TABS[nextIndex].key;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="space-y-6 text-left"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Encabezado minimalista */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#7f21fe] dark:text-purple-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
            <span>Matriz Dinámica de Arquitectura</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Por qué la Atención Primaria requiere un enfoque distinto.
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm font-normal">
          Compara en un clic el impacto real entre un servidor físico local y los esquemas tradicionales.
        </p>
      </div>

      {/* Selector de pestañas dinámico */}
      <div
        role="tablist"
        aria-label="Dimensiones de comparación de arquitectura"
        className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10"
      >
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiveTab(tab.key);
                setIsPaused(true);
              }}
              className={`flex items-center justify-between gap-2 px-3.5 py-3 rounded-xl text-left transition-all duration-200 ${
                isActive
                  ? 'bg-white dark:bg-[#151c33] text-[#7f21fe] dark:text-purple-300 shadow-sm border border-purple-200 dark:border-purple-500/40 ring-1 ring-purple-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? 'text-[#7f21fe] dark:text-purple-400' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm font-bold truncate">{tab.shortLabel}</span>
              </div>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 hidden sm:inline-block ${
                  isActive
                    ? 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-semibold'
                    : 'bg-slate-200/70 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {tab.pillText}
              </span>
            </button>
          );
        })}
      </div>

      {/* Escenario de comparación interactivo y minimalista */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* ================= COLUMNA PRINCIPAL: APS CONECTA (Cols 1-7) ================= */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0e1424] border border-purple-200 dark:border-purple-500/30 shadow-sm dark:shadow-xl dark:shadow-purple-950/20 flex flex-col justify-between gap-6 relative overflow-hidden">
          
          {/* Halo sutil de fondo */}
          <div
            className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-4 relative z-10">
            {/* Header del contenido activo */}
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Enfoque APS Conecta</span>
              </div>
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold">
                {activeTab === 'soberania' && 'Red Local 1 Gbps'}
                {activeTab === 'costos' && 'Costo Fijo CAPEX'}
                {activeTab === 'alcance' && '10 Estamentos'}
                {activeTab === 'ia' && 'Ollama en Rack'}
              </span>
            </div>

            {/* Título de impacto */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {activeTab === 'soberania' && 'Servidor Físico Local en el Rack del CESFAM'}
                {activeTab === 'costos' && '$0 en Costos de Licencia por Usuario'}
                {activeTab === 'alcance' && 'La Trastienda Completa que Ningún Software Cubría'}
                {activeTab === 'ia' && 'Modelos Abiertos Ejecutados Dentro del Centro'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {activeTab === 'soberania' &&
                  'Los datos institucionales nunca salen de la comuna. Toda la operación funciona en la red LAN aunque se corte el enlace exterior a internet.'}
                {activeTab === 'costos' &&
                  'Inversión única en micro-servidor (~$3.86M CLP). Código abierto AGPL-3.0 sin mensualidades por box ni cobros en dólares por funcionario.'}
                {activeTab === 'alcance' &&
                  'RAYEN y OMI gestionan la ficha médica. APS Conecta organiza los oficios, turnos, farmacia, metas REM y comités de todo el equipo.'}
                {activeTab === 'ia' &&
                  'Mistral y Qwen leen y clasifican circulares en servidor local, con filtro DLP que bloquea cualquier dato sensible antes de procesarlo.'}
              </p>
            </div>

            {/* Puntos clave ultracortos (sin párrafos densos) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {activeTab === 'soberania' && (
                <>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="font-medium">100% Operativo sin internet</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span className="font-medium">Ley 19.628 y Ley 21.656</span>
                  </div>
                </>
              )}

              {activeTab === 'costos' && (
                <>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="font-medium">Hardware amortizado en 6 meses</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200">
                    <TrendingDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="font-medium">Ahorro proyectado a 3 años &gt; 70%</span>
                  </div>
                </>
              )}

              {activeTab === 'alcance' && (
                <>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200">
                    <Building2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span className="font-medium">SOME, Farmacia, Boxes y Terreno</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200">
                    <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-medium">100 a 200 funcionarios coordinados</span>
                  </div>
                </>
              )}

              {activeTab === 'ia' && (
                <>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200">
                    <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="font-medium">Filtro DLP automático en memoria</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200">
                    <FileCheck className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span className="font-medium">Supervisión humana obligatoria</span>
                  </div>
                </>
              )}
            </div>

            {/* MICRO-ANIMACIÓN / SIMULADOR DINÁMICO SEGÚN LA PESTAÑA */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-white/10">
              
              {/* Animación 1: Simulador de Red Local */}
              {activeTab === 'soberania' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Simulación de Enlace y Red
                    </span>
                    <button
                      type="button"
                      onClick={() => setSimulatedInternetCut(!simulatedInternetCut)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                        simulatedInternetCut
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40'
                          : 'bg-slate-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                      }`}
                    >
                      {simulatedInternetCut ? (
                        <>
                          <WifiOff className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Internet Cortado (Click para restaurar)</span>
                        </>
                      ) : (
                        <>
                          <Wifi className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Simular corte de fibra exterior</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Fibra Exterior</div>
                      <div
                        className={`font-bold mt-1 flex items-center justify-center gap-1 ${
                          simulatedInternetCut ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            simulatedInternetCut ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'
                          }`}
                        />
                        <span>{simulatedInternetCut ? 'Caída / 0 Kbps' : 'Activa'}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/40">
                      <div className="text-[10px] text-purple-900 dark:text-purple-300 font-medium">Rack Servidor CESFAM</div>
                      <div className="font-bold text-[#7f21fe] dark:text-purple-300 mt-1 flex items-center justify-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span>100% Operativo</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Terminales en Box / SOME</div>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center justify-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>LAN Local 1 Gbps</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Animación 2: Comparador Dinámico de Costos */}
              {activeTab === 'costos' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-600 dark:text-slate-400">
                      Proyección de Costo Acumulado a {yearsSlider} {yearsSlider === 1 ? 'Año' : 'Años'}:
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((y) => (
                        <button
                          key={y}
                          type="button"
                          onClick={() => setYearsSlider(y)}
                          className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                            yearsSlider === y
                              ? 'bg-[#7f21fe] text-white'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {y}A
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] font-medium mb-1">
                        <span className="text-purple-900 dark:text-purple-300 font-bold">
                          APS Conecta (Hardware único):
                        </span>
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          $3.860.000 CLP (Fijo)
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-[#7f21fe] rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(15, 30 / yearsSlider)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-medium mb-1">
                        <span className="text-rose-900 dark:text-rose-300 font-bold">
                          Suites en la Nube (150 usuarios):
                        </span>
                        <span className="font-mono font-bold text-rose-600 dark:text-rose-400">
                          ${(yearsSlider * 21600000).toLocaleString('es-CL')} CLP
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-rose-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, 33 * yearsSlider)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Animación 3: Visualizador de Cobertura en el CESFAM */}
              {activeTab === 'alcance' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-600 dark:text-slate-400">
                      Comparativa de Cobertura de Procesos:
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => setSelectedScopeView('aps')}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                          selectedScopeView === 'aps'
                            ? 'bg-[#7f21fe] text-white'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        APS Conecta
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedScopeView('rayen')}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                          selectedScopeView === 'rayen'
                            ? 'bg-slate-700 text-white'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Ficha Clínica
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                    <div
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        selectedScopeView === 'aps'
                          ? 'bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-200 font-bold'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-400 line-through'
                      }`}
                    >
                      Oficios y Actas
                    </div>
                    <div
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        selectedScopeView === 'aps'
                          ? 'bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-200 font-bold'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-400 line-through'
                      }`}
                    >
                      Turnos y Boxes
                    </div>
                    <div
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        selectedScopeView === 'aps'
                          ? 'bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-200 font-bold'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-400 line-through'
                      }`}
                    >
                      Metas REM
                    </div>
                    <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-200 font-bold">
                      Box Médico
                    </div>
                  </div>
                </div>
              )}

              {/* Animación 4: Simulador de Pipeline DLP de IA */}
              {activeTab === 'ia' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span>Pipeline de Privacidad:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">● DLP Activo</span>
                  </div>

                  <div className="flex items-center justify-between gap-1 text-[11px]">
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-center flex-1">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">1. Oficio</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">Entrada PDF</div>
                    </div>
                    <span className="text-slate-400">&rarr;</span>
                    <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/40 text-center flex-1">
                      <div className="text-[10px] text-purple-800 dark:text-purple-300">2. Filtro DLP</div>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400">RUTs Anónimos</div>
                    </div>
                    <span className="text-slate-400">&rarr;</span>
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-center flex-1">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">3. Ollama Local</div>
                      <div className="font-bold text-[#7f21fe] dark:text-purple-300">Resumen 1.4s</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Pie de tarjeta con sello */}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 relative z-10">
            <span className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Garantía de Soberanía Comunal</span>
            </span>
            <span className="font-mono text-[#7f21fe] dark:text-purple-400 font-bold">
              0% Dependencia Nube
            </span>
          </div>
        </div>

        {/* ================= COLUMNA SECUNDARIA: ALTERNATIVAS TRADICIONALES (Cols 8-12) ================= */}
        <div className="lg:col-span-5 rounded-3xl p-6 sm:p-7 bg-slate-50 dark:bg-[#090d18] border border-slate-200 dark:border-white/10 flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-400 text-xs font-semibold">
              <XCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Alternativas Tradicionales</span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {activeTab === 'soberania' && 'Dependencia de Nube y Enlaces Externos'}
              {activeTab === 'costos' && 'Suscripciones Recurrentes de Alto Costo'}
              {activeTab === 'alcance' && 'Foco Exclusivo en la Consulta Médica'}
              {activeTab === 'ia' && 'Transferencia de Datos a Servidores en el Extranjero'}
            </h4>

            {/* Comparación directa en 2 filas limpias */}
            <div className="space-y-3 pt-1 text-xs">
              
              {/* Bloque Sistemas Clínicos */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#111728] border border-slate-200 dark:border-white/10 space-y-1">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Sistemas Clínicos (RAYEN / OMI)
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">
                  {activeTab === 'soberania' &&
                    'Alojan la ficha del paciente bajo Ley 20.584, pero no resuelven la intranet del personal ni el flujo de oficios.'}
                  {activeTab === 'costos' &&
                    'Licencia institucional asignada únicamente al registro clínico, dejando desatendida la gestión administrativa.'}
                  {activeTab === 'alcance' &&
                    'Terminan en la puerta del box del paciente. No coordinan turnos, comités técnicos ni distribución de circulares.'}
                  {activeTab === 'ia' &&
                    'No incluyen herramientas locales para clasificar circulares ni resumir oficios ministeriales.'}
                </p>
              </div>

              {/* Bloque Suites de Nube Comercial */}
              <div className="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-500/25 space-y-1">
                <span className="text-[11px] font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider block">
                  Suites de Pago en la Nube
                </span>
                <p className="text-rose-950 dark:text-rose-300 leading-snug">
                  {activeTab === 'soberania' &&
                    'Servidores fuera de Chile sujetos a leyes extranjeras (Cloud Act). Si se corta el enlace exterior, se detiene el trabajo.'}
                  {activeTab === 'costos' &&
                    'Cobro mensual en dólares por funcionario. Para 150 usuarios supera los $18.000.000 CLP anuales sin fin.'}
                  {activeTab === 'alcance' &&
                    'Carpetas genéricas sin jerarquía de sectores de salud ni estructura para acreditación sanitaria.'}
                  {activeTab === 'ia' &&
                    'Envían el texto de oficios a APIs comerciales de terceros, con riesgo permanente de filtración de datos.'}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Riesgo Operativo:</span>
            <span className="font-semibold text-rose-600 dark:text-rose-400">
              {activeTab === 'soberania' && 'Cortes y Enlaces Foráneos'}
              {activeTab === 'costos' && 'Gasto Presupuestario Infinito'}
              {activeTab === 'alcance' && 'Descoordinación Interna'}
              {activeTab === 'ia' && 'Filtraciones a Terceros'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
