import { LIVE_HORARIO } from "../lib/config";

/*
  Indicador "ao vivo": ponto verde pulsando + horário da série.
  Reutilizado na top bar e no eyebrow do hero.
*/
type LiveBadgeProps = {
  /** variante compacta (top bar) ou completa (eyebrow do hero) */
  variant?: "compact" | "full";
};

export default function LiveBadge({ variant = "full" }: LiveBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-green/25 bg-green/10 px-3.5 py-1.5">
      {/* Ponto pulsante (a classe live-dot faz o halo animado) */}
      <span className="relative flex h-2 w-2">
        <span className="live-dot absolute inline-flex h-2 w-2 rounded-full bg-green" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-tint">
        {variant === "compact" ? (
          <>Ao vivo · {LIVE_HORARIO}</>
        ) : (
          <>Série ao vivo · todo dia às {LIVE_HORARIO}</>
        )}
      </span>
    </span>
  );
}
