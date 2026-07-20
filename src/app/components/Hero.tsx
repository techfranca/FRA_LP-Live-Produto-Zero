import LeadForm from "./LeadForm";
import LiveBadge from "./LiveBadge";
import { IconCheck } from "./icons";
import { PILARES } from "../lib/config";

/*
  HERO — primeira dobra. Copy à esquerda, formulário (card glass) à direita.
  Fundo: navy + trama diagonal nítida da marca (sem glows borrados).
  A copy é a do briefing, apenas refinada.
*/
export default function Hero() {
  return (
    <section
      id="topo"
      className="grain brand-hairlines relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      {/* Camadas decorativas de fundo (não interativas) — geometria nítida */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Brilho linear discreto no topo, só para profundidade (sem blob) */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/[0.035] to-transparent" />
        {/* Linha diagonal única de acento no ângulo do slant (divide copy/form) */}
        <div className="slant-accent absolute -top-12 left-[57%] hidden h-[130%] w-px bg-gradient-to-b from-transparent via-green/25 to-transparent lg:block" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* ---------- Coluna da copy ---------- */}
        <div className="lg:col-span-7">
          <LiveBadge variant="full" />

          <h1 className="mt-6 text-balance text-[2.5rem] font-bold leading-[1.04] text-white sm:text-6xl lg:text-[4.2rem]">
            Criando um produto{" "}
            <span className="text-green">do&nbsp;zero</span>{" "}
            a&nbsp;<span className="relative inline-block whitespace-nowrap text-green">
              R$100&nbsp;mil/mês
              {/* Sublinhado de acento sob o número-âncora */}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-green/25"
              />
            </span>
            <span className="mt-2 block text-3xl font-semibold text-white/70 sm:text-4xl lg:text-5xl">
              em tempo real
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            Sem roteiro pronto, sem edição pra maquiar o processo. Cada decisão
            acontece ao vivo, do absoluto zero até o faturamento. Você acompanha
            os erros, os testes e os resultados reais.
          </p>

          {/* Os 4 pilares (copy do briefing) */}
          <ul className="mt-9 grid max-w-xl gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {PILARES.map((pilar) => (
              <li key={pilar} className="flex items-start gap-3">
                <IconCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-green"
                />
                <span className="text-sm leading-snug text-white/80">
                  {pilar}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Coluna do formulário ---------- */}
        <div id="form" className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-800/80 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:p-7">
            {/* Dobra verde no canto (motivo da logo) */}
            <span
              aria-hidden
              className="absolute right-0 top-0 h-16 w-16"
              style={{
                background:
                  "linear-gradient(135deg, transparent 50%, var(--green-fold) 50%)",
              }}
            />

            <div className="mb-6">
              <h2 className="text-xl font-bold text-white">Garanta sua vaga</h2>
              <p className="mt-1 text-sm text-white/55">
                Receba o link da live direto no seu WhatsApp.
              </p>
            </div>

            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
