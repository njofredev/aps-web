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
    <form action={formAction} className="space-y-3.5 text-left">
      {state?.message && !state.success && (
        <div
          role="alert"
          className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-600 dark:text-rose-400 text-xs flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" aria-hidden="true" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Nombre */}
        <div className="space-y-1">
          <label htmlFor="nombre" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            Nombre <span className="text-rose-500">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Dra. Marcela Gómez"
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-[#13192f] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200 focus:bg-white dark:focus:bg-[#151c36] focus:outline-none focus:ring-2 focus:ring-purple-500/15 ${
              state?.errors?.nombre
                ? 'border-rose-500 bg-rose-500/10'
                : 'border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 focus:border-[#7f21fe]'
            }`}
          />
          {state?.errors?.nombre && (
            <p className="text-[11px] text-rose-500 font-semibold">{state.errors.nombre}</p>
          )}
        </div>

        {/* Correo Electrónico */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            Correo <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="marcela@salud.cl"
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-[#13192f] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200 focus:bg-white dark:focus:bg-[#151c36] focus:outline-none focus:ring-2 focus:ring-purple-500/15 ${
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Establecimiento o Comuna */}
        <div className="space-y-1">
          <label htmlFor="establecimiento" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            CESFAM o Comuna <span className="text-rose-500">*</span>
          </label>
          <input
            id="establecimiento"
            name="establecimiento"
            type="text"
            required
            placeholder="CESFAM Damianovic"
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-[#13192f] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200 focus:bg-white dark:focus:bg-[#151c36] focus:outline-none focus:ring-2 focus:ring-purple-500/15 ${
              state?.errors?.establecimiento
                ? 'border-rose-500 bg-rose-500/10'
                : 'border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 focus:border-[#7f21fe]'
            }`}
          />
          {state?.errors?.establecimiento && (
            <p className="text-[11px] text-rose-500 font-semibold">{state.errors.establecimiento}</p>
          )}
        </div>

        {/* Rol o Estamento */}
        <div className="space-y-1">
          <label htmlFor="estamento" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            Rol en el centro <span className="text-rose-500">*</span>
          </label>
          <select
            id="estamento"
            name="estamento"
            required
            defaultValue=""
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-[#13192f] text-slate-900 dark:text-slate-100 transition-all duration-200 focus:bg-white dark:focus:bg-[#151c36] focus:outline-none focus:ring-2 focus:ring-purple-500/15 cursor-pointer ${
              state?.errors?.estamento
                ? 'border-rose-500 bg-rose-500/10'
                : 'border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 focus:border-[#7f21fe]'
            }`}
          >
            <option value="" disabled>
              Selecciona tu rol
            </option>
            <option value="Dirección de Salud Municipal (DISAM/DESAM)">
              Dirección DISAM / DESAM
            </option>
            <option value="Dirección de CESFAM / CECOSF">Dirección CESFAM / CECOSF</option>
            <option value="Jefatura de Sector / SOME">Jefatura SOME / Sector</option>
            <option value="Encargado/a de Informática y TI Comunal">
              Informática y TI Comunal
            </option>
            <option value="Profesional Clínico (Médico, Enfermero/a, etc.)">
              Profesional Clínico/a
            </option>
            <option value="Personal Administrativo / TENS">Administrativo / TENS</option>
            <option value="Otro">Otro cargo</option>
          </select>
          {state?.errors?.estamento && (
            <p className="text-[11px] text-rose-500 font-semibold">{state.errors.estamento}</p>
          )}
        </div>
      </div>

      {/* Mensaje o requerimiento */}
      <div className="space-y-1">
        <label htmlFor="mensaje" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
          Consulta o Requerimiento <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={2}
          required
          placeholder="Cuéntanos brevemente sobre tu CESFAM o qué dudas tienes..."
          className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50/90 dark:bg-[#13192f] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200 focus:bg-white dark:focus:bg-[#151c36] focus:outline-none focus:ring-2 focus:ring-purple-500/15 resize-none ${
            state?.errors?.mensaje
              ? 'border-rose-500 bg-rose-500/10'
              : 'border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 focus:border-[#7f21fe]'
          }`}
        />
        {state?.errors?.mensaje && (
          <p className="text-[11px] text-rose-500 font-semibold">{state.errors.mensaje}</p>
        )}
      </div>

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto h-11 px-6 rounded-full bg-[#7f21fe] hover:bg-[#6c1bd9] active:bg-[#581cb1] text-white text-xs sm:text-sm font-bold shadow-[0_8px_24px_-4px_rgba(127,33,254,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Solicitar Piloto</span>
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
