import FrancaMark from "./FrancaMark";
import LiveBadge from "./LiveBadge";

/*
  Top bar minimalista e fixa: marca Franca à esquerda,
  indicador "ao vivo" à direita. Fundo com leve blur para
  destacar sobre o conteúdo ao rolar.
*/
export default function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Marca */}
        <a
          href="#topo"
          aria-label="Franca — início da página"
          className="flex items-center gap-2.5"
        >
          <FrancaMark size={30} label="Franca" />
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:inline">
            Franca
          </span>
        </a>

        {/* Indicador ao vivo (compacto) */}
        <LiveBadge variant="compact" />
      </div>
    </header>
  );
}
