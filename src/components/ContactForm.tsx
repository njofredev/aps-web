'use client';

import React, { useActionState, useState } from 'react';
import { submitContactAction, type ContactState } from '@/app/actions/contact';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactState | null, FormData>(
    submitContactAction,
    null
  );

  const [submittedAgain, setSubmittedAgain] = useState(false);

  if (state?.success && !submittedAgain) {
    return (
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 dark:bg-emerald-950/30 p-6 sm:p-8 text-left space-y-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-900/30">
            <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Solicitud de Piloto Registrada
            </h3>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              Coordinación directa con el equipo médico y técnico de APS Conecta
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed bg-white dark:bg-[#13192f] p-4 rounded-xl border border-emerald-500/30">
          {state.message}
        </p>

        <button
          type="button"
          onClick={() => setSubmittedAgain(true)}
          className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white dark:bg-[#13192f] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold transition-all shadow-sm"
        >
          Enviar otra consulta o requerimiento
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4 text-left">
      {state?.message && !state.success && (
        <div
          role="alert"
          className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-600 dark:text-rose-400 text-xs flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" aria-hidden="true" />
          <span>{state.message}</span>
        </div>
      )}

      {/* Nombre y Correo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="space-y-1">
          <label htmlFor="nombre" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            Tu Nombre <span className="text-rose-500">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Dra. Marcela Gómez"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900/90 focus:outline-none focus:ring-2 focus:ring-purple-500/15 ${
              state?.errors?.nombre
                ? 'border-rose-500 bg-rose-500/10'
                : 'border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 focus:border-[#7f21fe]'
            }`}
          />
          {state?.errors?.nombre && (
            <p className="text-[11px] text-rose-500 font-semibold">{state.errors.nombre}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            Correo de contacto <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="marcela@salud.cl"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900/90 focus:outline-none focus:ring-2 focus:ring-purple-500/15 ${
              state?.errors?.email
                ? 'border-rose-500 bg-rose-500/10'
                : 'border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 focus:border-[#7f21fe]'
            }`}
          />
          {state?.errors?.email && (
            <p className="text-[11px] text-rose-500 font-semibold">{state.errors.email}</p>
          )}
        </div>
      </div>

      {/* CESFAM o Comuna */}
      <div className="space-y-1">
        <label htmlFor="establecimiento" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
          CESFAM, CECOSF o Comuna <span className="text-rose-500">*</span>
        </label>
        <input
          id="establecimiento"
          name="establecimiento"
          type="text"
          required
          placeholder="Ej: CESFAM Juan Damianovic, Punta Arenas"
          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900/90 focus:outline-none focus:ring-2 focus:ring-purple-500/15 ${
            state?.errors?.establecimiento
              ? 'border-rose-500 bg-rose-500/10'
              : 'border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 focus:border-[#7f21fe]'
          }`}
        />
        {state?.errors?.establecimiento && (
          <p className="text-[11px] text-rose-500 font-semibold">{state.errors.establecimiento}</p>
        )}
      </div>

      {/* Consulta o requerimiento (Opcional) */}
      <div className="space-y-1">
        <label htmlFor="mensaje" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
          ¿Alguna duda o requerimiento previo? <span className="text-slate-400 font-normal">(Opcional)</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={2}
          placeholder="Ej: Cuéntanos brevemente si tienen servidor disponible o fecha estimada para el piloto..."
          className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900/90 focus:outline-none focus:ring-2 focus:ring-purple-500/15 resize-none border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 focus:border-[#7f21fe]"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row-reverse sm:items-center justify-between gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto h-11 px-7 rounded-full bg-[#7f21fe] hover:bg-[#6c1bd9] active:bg-[#581cb1] text-white text-xs sm:text-sm font-bold shadow-[0_8px_24px_-4px_rgba(127,33,254,0.45)] hover:shadow-[0_12px_28px_-4px_rgba(127,33,254,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Postular al Piloto</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Datos protegidos (Ley 19.628). Sin spam.
        </p>
      </div>
    </form>
  );
}
