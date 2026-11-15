'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, TrendingDown } from 'lucide-react';

export default function CostComparisonCalculator() {
  const [funcionarios, setFuncionarios] = useState<number>(140);

  // Estimaciones basadas en las laminas 31, 32 y 33 del informe SSOT oficial
  const costoMensualSaaS = 18500; // CLP referencial por usuario/mes en suites propietarias en nube
  const inversionUnicaHardware = 3860000; // CLP servidor fisico propio (Ryzen 7/9, 64GB, NVMe, RAID1, UPS)

  const gastoMensualNube = funcionarios * costoMensualSaaS;
  const gastoAnualNube = gastoMensualNube * 12;
  const gastoTresAnosNube = gastoAnualNube * 3;

  // Mes en que se iguala la inversion del servidor fisico frente a pagar licencias recurrentes
  const mesPuntoEquilibrio = Math.max(
    1,
    Math.ceil(inversionUnicaHardware / (gastoMensualNube || 1))
  );

  const ahorroTresAnos = Math.max(0, gastoTresAnosNube - inversionUnicaHardware);

  const formatearCLP = (monto: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0,
    }).format(monto);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-[#e2e5e9] shadow-[0_4px_24px_-8px_rgba(16,24,40,0.10)] p-6 sm:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e2e5e9] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#7f21fe] uppercase tracking-wider font-mono">
            <Calculator className="w-4 h-4 text-[#7f21fe]" aria-hidden="true" />
            <span>Simulador Financiero Municipal (TCO)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#101828] mt-1">
            Comprar una vez frente a pagar licencias para siempre
          </h3>
          <p className="text-xs sm:text-sm text-[#485363] mt-1">
            Calcula el retorno de inversión de un servidor local frente a licencias por usuario al mes.
          </p>
        </div>

        <div className="bg-[#f5f3ff] px-4 py-2.5 rounded-xl border border-[#d9cdff] shrink-0">
          <span className="text-[11px] text-[#581cb1] font-semibold block">
            Punto de Equilibrio:
          </span>
          <span className="text-lg font-bold text-[#7f21fe] font-serif tabular-nums">
            Mes {mesPuntoEquilibrio} de operación
          </span>
        </div>
      </div>

      {/* Control interactivo de funcionarios */}
      <div className="space-y-3 bg-[#f7f8fa] p-5 rounded-xl border border-[#e2e5e9]">
        <div className="flex items-center justify-between">
          <label htmlFor="slider-funcionarios" className="text-xs sm:text-sm font-bold text-[#101828]">
            Número de funcionarios del CESFAM:
          </label>
          <span className="text-base sm:text-lg font-bold text-[#7f21fe] tabular-nums font-mono px-3 py-1 bg-white border border-[#e2e5e9] rounded-lg">
            {funcionarios} personas
          </span>
        </div>

        <input
          id="slider-funcionarios"
          type="range"
          min="40"
          max="260"
          step="10"
          value={funcionarios}
          onChange={(e) => setFuncionarios(Number(e.target.value))}
          className="w-full h-2 bg-[#e2e5e9] rounded-lg appearance-none cursor-pointer accent-[#7f21fe]"
          aria-label="Ajustar número de funcionarios del CESFAM"
        />

        <div className="flex justify-between text-[11px] text-[#485363]">
          <span>Centro Pequeño (40)</span>
          <span>CESFAM Estándar (140)</span>
          <span>Gran Complejo de Salud (260)</span>
        </div>
      </div>

      {/* Comparativa visual en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Columna Nube Propietaria */}
        <div className="p-5 rounded-xl bg-white border border-[#e2e5e9] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#b8002f] uppercase tracking-wider">
              Nube Propietaria (SaaS)
            </span>
            <span className="text-[11px] bg-[#ffe0e6] text-[#b8002f] font-semibold px-2 py-0.5 rounded">
              Gasto Recurrente
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-[#485363]">Gasto acumulado a 3 años:</div>
            <div className="text-2xl font-bold text-[#101828] font-serif tabular-nums">
              {formatearCLP(gastoTresAnosNube)}
            </div>
            <div className="text-xs text-[#b8002f]">
              {formatearCLP(gastoAnualNube)} por año (año tras año sin fin)
            </div>
          </div>

          <ul className="text-xs text-[#485363] space-y-2 pt-2 border-t border-[#e2e5e9]">
            <li className="flex items-start gap-2">
              <span className="text-[#ea003e] font-bold">&times;</span>
              <span>Sujeto a alzas periódicas de precio y tipo de cambio dólar.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ea003e] font-bold">&times;</span>
              <span>Datos institucionales alojados en servidores externos fuera de la comuna.</span>
            </li>
          </ul>
        </div>

        {/* Columna APS Conecta */}
        <div className="p-5 rounded-xl bg-[#f5f3ff] border border-[#7f21fe]/40 space-y-4 shadow-[0_1px_3px_rgba(16,24,40,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#7f21fe] uppercase tracking-wider">
              APS Conecta (Servidor Físico)
            </span>
            <span className="text-[11px] bg-[#c4f1da] text-[#006b46] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
              Inversión Única
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-[#581cb1]">Costo total de hardware:</div>
            <div className="text-2xl font-bold text-[#7f21fe] font-serif tabular-nums">
              {formatearCLP(inversionUnicaHardware)}
            </div>
            <div className="text-xs font-semibold text-[#006b46]">
              $0 en licencias por usuario. El sistema es del CESFAM para siempre.
            </div>
          </div>

          <ul className="text-xs text-[#101828] space-y-2 pt-2 border-t border-[#d9cdff]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#009764] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Soberanía total: ningún dato clínico o administrativo sale a la nube.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#009764] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Hardware amortizado rápidamente en el primer semestre de uso.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Recuadro de ahorro neto a 3 anos */}
      <div className="bg-[#f7f8fa] p-5 rounded-xl border border-[#e2e5e9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-[#009764]" aria-hidden="true" />
            <span className="text-xs font-bold text-[#101828]">Ahorro municipal estimado a 3 años:</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-[#006b46] font-serif tabular-nums">
            {formatearCLP(ahorroTresAnos)}
          </div>
          <p className="text-[11px] text-[#485363]">
            Recursos liberados que la Dirección Comunal puede reinvertir en equipamiento y atención de usuarios.
          </p>
        </div>

        <a
          href="#contacto"
          className="h-10 px-4 rounded-xl bg-[#7f21fe] hover:bg-[#6c1bd9] active:bg-[#581cb1] text-white text-xs font-bold transition-all shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <span>Solicitar Cotización Comunal</span>
        </a>
      </div>
    </div>
  );
}
