import FrancaMark from "./FrancaMark";
import { WHATSAPP_FRANCA, LIVE_HORARIO } from "../lib/config";

/*
  Rodapé — projeto INTERNO da Franca (a própria Franca é a dona).
  Estrutura premium: marca + tagline / coluna de links / barra inferior.
  Acento superior no ângulo/verde da marca. Link de política (LGPD Tier 1).
*/
export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-navy">
      {/* Fio de acento verde no topo (grafismo da marca) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Marca + tagline */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <FrancaMark size={30} label="Franca Marketing" />
              <span className="text-base font-semibold text-white">
                Franca Marketing
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/45">
              Vendas, tráfego e crescimento acontecendo em tempo real.
            </p>
          </div>

          {/* Coluna de links */}
          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
              Links
            </span>
            <a
              href="/privacidade"
              className="text-white/60 transition-colors hover:text-green"
            >
              Política de privacidade
            </a>
            <a
              href={WHATSAPP_FRANCA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-green"
            >
              Falar com a Franca
            </a>
          </nav>
        </div>

        {/* Barra inferior: direitos + selo da série */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/35 sm:flex-row">
          <span>
            © {ano} Franca Marketing. Todos os direitos reservados.
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Série ao vivo · todo dia às {LIVE_HORARIO}
          </span>
        </div>
      </div>
    </footer>
  );
}
