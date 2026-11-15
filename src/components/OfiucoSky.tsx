import React from 'react';

export function OfiucoSky({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
    >
      <defs>
        <radialGradient id="skyGradA" cx="28%" cy="26%" r="65%">
          <stop offset="0%" stopColor="#a477ff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#a477ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="skyGradB" cx="82%" cy="88%" r="55%">
          <stop offset="0%" stopColor="#26094f" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#26094f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#skyGradA)" />
      <rect width="1280" height="720" fill="url(#skyGradB)" />
      {/* Estrellas del fondo celestial */}
      <g fill="#ffffff" opacity="0.45">
        <circle cx="120" cy="88" r="1.8" />
        <circle cx="286" cy="42" r="1.5" />
        <circle cx="430" cy="122" r="2.1" />
        <circle cx="612" cy="60" r="1.6" />
        <circle cx="742" cy="150" r="2.4" />
        <circle cx="905" cy="70" r="1.7" />
        <circle cx="1052" cy="132" r="2.0" />
        <circle cx="1190" cy="54" r="1.5" />
        <circle cx="72" cy="330" r="1.9" />
        <circle cx="248" cy="470" r="1.6" />
        <circle cx="520" cy="560" r="2.2" />
        <circle cx="700" cy="420" r="1.5" />
        <circle cx="880" cy="590" r="1.8" />
        <circle cx="1080" cy="440" r="2.1" />
        <circle cx="1210" cy="640" r="1.6" />
        <circle cx="360" cy="672" r="1.7" />
      </g>
      {/* Geometria canonica de la constelacion de Ofiuco */}
      <g transform="translate(388 128) scale(9.6)" fill="none" strokeLinecap="round">
        <path
          d="M32 12 L45 23 M32 12 L19 23 M45 23 L38 39 M19 23 L26 39 M38 39 L26 39 M38 39 L45 51 M26 39 L19 51"
          stroke="#ffffff"
          strokeWidth="1.6"
          opacity="0.12"
        />
        <path d="M11 33 Q23 27 32 33 T53 30" stroke="#f28f36" strokeWidth="2" opacity="0.22" />
        <g fill="#ffffff" opacity="0.18" stroke="none">
          <circle cx="45" cy="23" r="2.5" />
          <circle cx="19" cy="23" r="2.5" />
          <circle cx="38" cy="39" r="2.3" />
          <circle cx="26" cy="39" r="2.3" />
          <circle cx="45" cy="51" r="2.1" />
          <circle cx="19" cy="51" r="2.1" />
        </g>
        <path
          d="M32 7.2 L33.25 10.75 L36.8 12 L33.25 13.25 L32 16.8 L30.75 13.25 L27.2 12 L30.75 10.75 Z"
          fill="#f28f36"
          opacity="0.28"
          stroke="none"
        />
      </g>
    </svg>
  );
}
