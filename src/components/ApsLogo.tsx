import React from 'react';

interface ApsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  monochrome?: boolean;
}

export function ApsLogo({ size = 36, monochrome = false, className = '', ...props }: ApsLogoProps) {
  if (monochrome) {
    return (
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        role="img"
        aria-label="APS Conecta"
        className={className}
        {...props}
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M32 12 L45 23 M32 12 L19 23 M45 23 L38 39 M19 23 L26 39 M38 39 L26 39 M38 39 L45 51 M26 39 L19 51"
            strokeWidth="1.6"
            opacity="0.55"
          />
          <path d="M11 33 Q23 27 32 33 T53 30" strokeWidth="2" />
        </g>
        <g fill="currentColor">
          <circle cx="45" cy="23" r="2.5" />
          <circle cx="19" cy="23" r="2.5" />
          <circle cx="38" cy="39" r="2.3" />
          <circle cx="26" cy="39" r="2.3" />
          <circle cx="45" cy="51" r="2.1" />
          <circle cx="19" cy="51" r="2.1" />
          <path d="M32 7.2 L33.25 10.75 L36.8 12 L33.25 13.25 L32 16.8 L30.75 13.25 L27.2 12 L30.75 10.75 Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="APS Conecta"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="apsLogoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#893dff" />
          <stop offset="100%" stopColor="#5315a8" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="15" fill="url(#apsLogoGrad)" />
      {/* Lineas de constelacion */}
      <path
        d="M32 12 L45 23 M32 12 L19 23 M45 23 L38 39 M19 23 L26 39 M38 39 L26 39 M38 39 L45 51 M26 39 L19 51"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Arco de la serpiente dorada */}
      <path d="M11 33 Q23 27 32 33 T53 30" fill="none" stroke="#e06f00" strokeWidth="2" strokeLinecap="round" />
      {/* Estrellas nodos */}
      <circle cx="45" cy="23" r="2.5" fill="#ffffff" />
      <circle cx="19" cy="23" r="2.5" fill="#ffffff" />
      <circle cx="38" cy="39" r="2.3" fill="#ffffff" />
      <circle cx="26" cy="39" r="2.3" fill="#ffffff" />
      <circle cx="45" cy="51" r="2.1" fill="#ffffff" />
      <circle cx="19" cy="51" r="2.1" fill="#ffffff" />
      {/* Estrella guia superior */}
      <path
        d="M32 7.2 L33.25 10.75 L36.8 12 L33.25 13.25 L32 16.8 L30.75 13.25 L27.2 12 L30.75 10.75 Z"
        fill="#f28f36"
      />
    </svg>
  );
}

export function ApsLockup({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ApsLogo size={size} />
      <div className="flex flex-col">
        <span className="font-bold tracking-tight text-lg leading-tight text-[#101828]">
          APS Conecta
        </span>
        <span className="text-[11px] text-[#485363] font-medium leading-none">
          Atención Primaria conectada
        </span>
      </div>
    </div>
  );
}
