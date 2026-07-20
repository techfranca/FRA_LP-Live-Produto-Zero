/*
  Ícones em SVG de linha (stroke) — nunca emoji como ícone.
  Herdam a cor via `currentColor` e o tamanho via prop.
*/
type IconProps = {
  className?: string;
  size?: number;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

/** Check dentro de círculo — usado nos pilares */
export function IconCheck({ className, size = 22 }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

/** Ponto/onda de transmissão — indicador "ao vivo" */
export function IconBroadcast({ className, size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
    </svg>
  );
}

/** Seta para a direita — CTAs */
export function IconArrowRight({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Alvo/mira — passo "produto" */
export function IconTarget({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

/** Funil — passo "oferta/funil" */
export function IconFunnel({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M3 4h18l-7 8v7l-4 2v-9L3 4Z" />
    </svg>
  );
}

/** Curva de crescimento — passo "tráfego/escala" */
export function IconGrowth({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M3 17c4 0 5-9 9-9 3 0 3 4 6 4" />
      <path d="M18 8h3v3" />
    </svg>
  );
}
