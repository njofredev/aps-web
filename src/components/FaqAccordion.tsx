'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿APS Conecta reemplaza a RAYEN u OMI en el centro de salud?',
    answer:
      'No. Los sistemas como RAYEN u OMI son fichas clínicas electrónicas (EHR) diseñadas para registrar la atención directa del paciente. APS Conecta atiende el vacío institucional: coordina la trastienda del CESFAM (distribución de oficios ministeriales, turnos de boxes, protocolos clínicos vigentes, directorio telefónico y redes territoriales) sin duplicar ni intervenir la ficha clínica.',
  },
  {
    question: '¿Cómo protege la privacidad y los datos de los pacientes?',
    answer:
      'Mediante una arquitectura de soberanía digital: el 100% de la información reside dentro del servidor local del CESFAM. Los modelos de IA (Ollama con Mistral o Qwen) se ejecutan localmente en el propio equipo. Un filtro DLP automático asegura que ningún RUT, nombre ni antecedente sensible sea transferido a servicios externos, dando estricto cumplimiento a la Ley 19.628, Ley 20.584 y Ley 21.656.',
  },
  {
    question: '¿Tiene costo recurrente de licencias por usuario o por box?',
    answer:
      '$0 en licencias. APS Conecta se distribuye íntegramente bajo licencia de código abierto AGPL-3.0. A diferencia de las soluciones SaaS comerciales que cobran tarifas mensuales por funcionario, la comuna es dueña absoluta de sus datos y su software sin cobros ocultos de suscripción.',
  },
  {
    question: '¿Funciona en la nube o es local?',
    answer:
      'Está diseñado para operar de forma local (On-Premise) en la red del CESFAM o de la comuna, garantizando soberanía de datos y rapidez de acceso. No obstante, si el municipio lo prefiere, también puede desplegarse en una nube privada institucional o en servidores dedicados comunales. La gran ventaja es que la institución siempre mantiene el control absoluto de su infraestructura y sus datos, sin quedar atada a un proveedor de nube cautivo.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10 text-left">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4 sm:py-5 transition-colors">
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className={`w-full flex items-center justify-between gap-4 text-left font-semibold text-sm sm:text-base transition-colors duration-200 focus:outline-none cursor-pointer group ${
                isOpen
                  ? 'text-[#7f21fe] dark:text-purple-300'
                  : 'text-slate-900 dark:text-slate-100 hover:text-[#7f21fe] dark:hover:text-purple-300'
              }`}
            >
              <span>{faq.question}</span>
              <span
                className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'bg-purple-100 dark:bg-purple-950/60 border-purple-300 dark:border-purple-500/40 text-[#7f21fe] dark:text-purple-300 rotate-180'
                    : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 group-hover:border-purple-300 dark:group-hover:border-purple-500/30 rotate-0'
                }`}
              >
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5 text-[#7f21fe] dark:text-purple-400" aria-hidden="true" />
                ) : (
                  <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                )}
              </span>
            </button>

            {/* Contenedor colapsable con animación CSS Grid suave para abrir y cerrar */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pt-3 pr-8 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
