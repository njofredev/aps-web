'use client';

import React, { useState } from 'react';
import { Shield, Lock, HardDrive, Network, CheckCircle2, Terminal } from 'lucide-react';

type SecurityLayer = 'lan' | 'web' | 'vpn' | 'docker';

export default function ArchitectureInteractive() {
  const [activeLayer, setActiveLayer] = useState<SecurityLayer>('lan');

  const layers = [
    {
      id: 'lan' as SecurityLayer,
      name: 'Nivel 1: Red Local (LAN)',
      subtitle: '~90% del personal',
      badge: 'Acceso Primario',
      icon: Network,
      color: '#009764',
      bgColor: '#c4f1da',
      textColor: '#006b46',
      description:
        'El personal clínico y administrativo accede a la plataforma directamente desde los computadores de box y mesón mediante el navegador web institucional.',
      points: [
        'Sin necesidad de instalar VPN ni clientes de escritorio pesados en cada PC.',
        'Tráfico confinado a la red local de alta velocidad dentro del edificio del centro.',
        'Acceso instantáneo a protocolos clínicos, directorio y novedades de turno.',
      ],
    },
    {
      id: 'web' as SecurityLayer,
      name: 'Nivel 2: Web Endurecida',
      subtitle: 'Acceso remoto supervisado',
      badge: '2FA Obligatorio',
      icon: Lock,
      color: '#7f21fe',
      bgColor: '#ece6ff',
      textColor: '#6c1bd9',
      description:
        'Diseñado para directores de centro y jefaturas de sector que necesitan consultar indicadores de gestión o responder oficios fuera del establecimiento.',
      points: [
        'Caddy como proxy inverso con certificados HTTPS automáticos y calificación A+.',
        'Autenticación centralizada (SSO) mediante Authentik con segundo factor obligatorio (2FA/Passkeys).',
        'Filtro perimetral con CrowdSec, limitación de peticiones y bloqueo geográfico para tráfico chileno.',
      ],
    },
    {
      id: 'vpn' as SecurityLayer,
      name: 'Nivel 3: Operación Técnica',
      subtitle: 'Administración y soporte',
      badge: 'WireGuard Exclusivo',
      icon: Terminal,
      color: '#bd5b00',
      bgColor: '#ffe9cf',
      textColor: '#9a4700',
      description:
        'Toda labor de mantención de infraestructura, actualización de contenedores y copias de respaldo se efectúa mediante un túnel privado encriptado.',
      points: [
        'El puerto SSH nunca se expone a internet bajo ninguna circunstancia.',
        'Conexión autenticada exclusivamente con llaves criptográficas modernas ed25519.',
        'Acceso fuera de banda con tarjeta PiKVM para diagnóstico de hardware a nivel de BIOS.',
      ],
    },
    {
      id: 'docker' as SecurityLayer,
      name: 'Aislamiento Docker Interno',
      subtitle: 'Red protegida sin salida',
      badge: 'Cero Fuga',
      icon: HardDrive,
      color: '#101828',
      bgColor: '#f1f2f4',
      textColor: '#101828',
      description:
        'Los motores de inteligencia artificial, bases de datos y escaneo antivirus se ejecutan en una red interna de contenedores sin salida a internet.',
      points: [
        'Ollama y PostgreSQL no tienen ruteo al exterior ni puertos publicados.',
        'ClamAV inspecciona cada archivo adjunto antes de permitir su ingreso al archivo.',
        'Filtro de prevención de fuga de datos (DLP) para impedir el ingreso de fichas clínicas de pacientes.',
      ],
    },
  ];

  const current = layers.find((l) => l.id === activeLayer) || layers[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-[#e2e5e9] shadow-[0_4px_24px_-8px_rgba(16,24,40,0.10)] overflow-hidden">
      <div className="bg-[#101828] text-white p-6 sm:p-8 border-b border-[#26094f]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#a477ff] uppercase tracking-wider font-mono">
          <Shield className="w-4 h-4 text-[#f28f36]" aria-hidden="true" />
          <span>Defensa en Profundidad y Aislamiento Perimetral</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
          Capas de seguridad: no una sola muralla
        </h3>
        <p className="text-xs sm:text-sm text-[#d9cdff] mt-1">
          Selecciona cada nivel para explorar los mecanismos de protección implementados en el servidor local.
        </p>

        {/* Pestanas interactivas de capas */}
        <div
          role="tablist"
          aria-label="Capas de seguridad de la arquitectura"
          className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6"
        >
          {layers.map((layer) => {
            const isSelected = activeLayer === layer.id;
            const Icon = layer.icon;
            return (
              <button
                key={layer.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveLayer(layer.id)}
                className={`p-3 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-white text-[#101828] border-white shadow-md'
                    : 'bg-[#26094f]/60 text-[#c2aaff] border-white/10 hover:border-white/30 hover:bg-[#26094f]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    className="w-4 h-4 shrink-0"
                    style={{ color: isSelected ? layer.color : '#a477ff' }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold truncate">{layer.name}</span>
                </div>
                <div
                  className="text-[11px] truncate mt-0.5"
                  style={{ color: isSelected ? '#485363' : '#a477ff' }}
                >
                  {layer.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detalle interactivo de la capa seleccionada */}
      <div className="p-6 sm:p-8 bg-[#f7f8fa] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: current.bgColor, color: current.color }}
            >
              <current.icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#101828]">
                {current.name}
              </h4>
              <p className="text-xs text-[#485363]">{current.subtitle}</p>
            </div>
          </div>

          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: current.bgColor, color: current.textColor }}
          >
            {current.badge}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#101828] leading-relaxed bg-white p-4 rounded-xl border border-[#e2e5e9]">
          {current.description}
        </p>

        <div className="space-y-2.5">
          <span className="text-xs font-bold text-[#485363] uppercase tracking-wider block">
            Garantías operativas de esta capa:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.points.map((pt, i) => (
              <div
                key={i}
                className="bg-white p-3.5 rounded-xl border border-[#e2e5e9] space-y-1.5 flex flex-col justify-start"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#006b46]">
                  <CheckCircle2 className="w-4 h-4 text-[#009764] shrink-0" aria-hidden="true" />
                  <span>Criterio verificado</span>
                </div>
                <p className="text-xs text-[#485363] leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-[11px] text-[#485363] border-t border-[#e2e5e9] flex flex-wrap items-center justify-between gap-2">
          <span>
            Arquitectura conforme a las exigencias de ciberseguridad para servicios de salud en Chile.
          </span>
          <span className="font-mono text-[#7f21fe] font-semibold">
            Invariante: Ningún dato clínico sensible en reposo sale del CESFAM.
          </span>
        </div>
      </div>
    </div>
  );
}
