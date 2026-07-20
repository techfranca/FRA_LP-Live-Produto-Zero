import Image from "next/image";
import markSrc from "../../../public/franca-mark.png";

/*
  Marca "F." da Franca — logo OFICIAL (public/franca-mark.png, 702x607, RGBA).
  API mantida (size = largura em px; label opcional). Sem label = decorativa.
  Usa next/image para otimização; PNG transparente funciona sobre o navy.
*/
type FrancaMarkProps = {
  className?: string;
  size?: number;
  /** ariaLabel: se ausente, marca é decorativa (alt vazio) */
  label?: string;
};

// Proporção original da logo (702x607) para calcular a altura a partir do size
const RATIO = 607 / 702;

export default function FrancaMark({ className, size = 40, label }: FrancaMarkProps) {
  return (
    <Image
      src={markSrc}
      alt={label ?? ""}
      aria-hidden={label ? undefined : true}
      width={size}
      height={Math.round(size * RATIO)}
      className={className}
      // Preflight do Tailwind aplica height:auto em img; declaramos explícito
      // para manter a proporção e silenciar o aviso do next/image.
      style={{ height: "auto" }}
      priority
    />
  );
}
