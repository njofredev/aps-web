'use client';

import React from 'react';
import {
  FileText,
  BrainCircuit,
  Server,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
} from 'lucide-react';

export default function DailyContrast() {
  return (
    <div className="space-y-6 text-left relative z-10">
      {/* Grilla limpia de 3 pilares editoriales (sin micro-widgets ni saturación de texto) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* =========================================================================
            TARJETA 1: GESTIÓN DOCUMENTAL Y ACREDITACIÓN
        ========================================================================= */}
        <div className="rounded-3xl p-7 sm:p-8 bg-[#0e1424] border border-white/10 hover:border-purple-500/40 hover:bg-[#12192d] transition-all duration-300 flex flex-col justify-between gap-6 group relative overflow-hidden shadow-lg shadow-black/20">
          {/* Resplandor sutil al hover */}
          <div
            className="absolute -top-16 -right-16 w-36 h-36 bg-[#7f21fe]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"
            aria-hidden="true"
          />

          <div className="space-y-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6" aria-hidden="true" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
                Acreditación y Control
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                De carpetas perdidas a trazabilidad oficial
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Oficios ministeriales, circulares y protocolos centralizados en un único repositorio. Cada estamento registra su acuse de lectura firmado, listo para auditorías de la Superintendencia de Salud.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 relative z-10 flex items-center gap-2 text-xs text-purple-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Firma de acuse legal para los 10 estamentos</span>
          </div>
        </div>

        {/* =========================================================================
            TARJETA 2: INTELIGENCIA ARTIFICIAL EN SERVIDOR FÍSICO
        ========================================================================= */}
        <div className="rounded-3xl p-7 sm:p-8 bg-[#0e1424] border border-white/10 hover:border-purple-500/40 hover:bg-[#12192d] transition-all duration-300 flex flex-col justify-between gap-6 group relative overflow-hidden shadow-lg shadow-black/20">
          <div
            className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"
            aria-hidden="true"
          />

          <div className="space-y-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <BrainCircuit className="w-6 h-6 text-purple-400" aria-hidden="true" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
                IA Local On-Premise
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                Resúmenes normativos sin tocar datos sensibles
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Modelos abiertos ejecutados físicamente dentro del rack de tu CESFAM mediante Ollama. Clasifica resoluciones y redacta actas sin que ningún dato clínico o sensible viaje a nubes comerciales.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 relative z-10 flex items-center gap-2 text-xs text-purple-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
            <span>Procesamiento 100% offline (Cero fuga a la nube)</span>
          </div>
        </div>

        {/* =========================================================================
            TARJETA 3: AUTONOMÍA OPERATIVA Y $0 EN LICENCIAS
        ========================================================================= */}
        <div className="rounded-3xl p-7 sm:p-8 bg-[#0e1424] border border-white/10 hover:border-purple-500/40 hover:bg-[#12192d] transition-all duration-300 flex flex-col justify-between gap-6 group relative overflow-hidden shadow-lg shadow-black/20">
          <div
            className="absolute -top-16 -right-16 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"
            aria-hidden="true"
          />

          <div className="space-y-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Server className="w-6 h-6 text-purple-400" aria-hidden="true" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
                Soberanía y Resiliencia
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                Tu centro sigue funcionando si se corta internet
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              APS Conecta opera en la red LAN del establecimiento. Farmacia, turnos y mensajería continúan al 100% aunque caiga la fibra óptica exterior, sin pagar licencias mensuales por funcionario.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 relative z-10 flex items-center gap-2 text-xs text-purple-300 font-medium">
            <HardDrive className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
            <span>Operación continua en red local ($0 en licencias)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
