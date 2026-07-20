import Reveal from "./Reveal";
import FrancaMark from "./FrancaMark";
import { IconTarget, IconFunnel, IconGrowth, IconArrowRight } from "./icons";
import { LIVE_HORARIO } from "../lib/config";

/*
  Segunda dobra — PROVA e reforço da conversão:
  1) Manifesto (o "cru/real" é o diferencial)
  2) A jornada em 3 passos (produto -> oferta/funil -> tráfego/escala)
  3) Autoridade da marca Franca
  4) CTA final que leva de volta ao formulário
  Divisória diagonal no topo ecoa o slant da marca.
*/

// Passos da jornada (narrativa episódica até R$100 mil)
const JORNADA = [
  {
    num: "01",
    Icon: IconTarget,
    titulo: "Produto do zero",
    texto: "Definir e validar uma oferta que realmente vende, começando do nada.",
  },
  {
    num: "02",
    Icon: IconFunnel,
    titulo: "Oferta e funil",
    texto: "Montar a estrutura de venda e o funil que transforma atenção em receita.",
  },
  {
    num: "03",
    Icon: IconGrowth,
    titulo: "Tráfego e escala",
    texto: "Escalar o faturamento mês a mês com tráfego pago, até os R$100 mil.",
  },
];

export default function ProofSection() {
  return (
    <section className="relative overflow-hidden bg-navy-800 pb-20 pt-24 lg:pt-28">
      {/* Divisória diagonal no topo (grafismo do slant) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-16 bg-navy"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------- Manifesto ---------- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-tint">
            Por que essa série é diferente
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-white sm:text-5xl">
            Sem roteiro. Sem edição.{" "}
            <span className="whitespace-nowrap text-green">Sem maquiagem.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            A maioria dos conteúdos mostra só o resultado pronto. Aqui você vê o
            processo inteiro acontecendo ao vivo: as decisões, os erros, os
            testes e os números reais, episódio por episódio.
          </p>
        </Reveal>

        {/* ---------- A jornada em 3 passos ---------- */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {JORNADA.map((passo, i) => (
            <Reveal
              key={passo.num}
              as="article"
              delay={i * 90}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-700/60 p-6 transition-colors hover:border-green/40"
            >
              {/* Número gigante de fundo (âncora visual) */}
              <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-7xl font-bold text-white/[0.04]">
                {passo.num}
              </span>

              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green/12 text-green">
                <passo.Icon size={24} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {passo.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {passo.texto}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Linha de chegada — R$100 mil */}
        <Reveal className="mt-10 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-10 bg-white/15" />
          <span className="text-sm text-white/50">
            O destino de tudo isso:{" "}
            <strong className="font-semibold text-green">R$100 mil/mês</strong>
          </span>
          <span className="h-px w-10 bg-white/15" />
        </Reveal>

        {/* ---------- Autoridade Franca + CTA final ---------- */}
        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-700 to-navy p-8 text-center sm:p-14">
            {/* Acento nítido: hairline verde no topo + dobra no canto (sem glow) */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green/60 to-transparent"
            />
            <span
              aria-hidden
              className="absolute right-0 top-0 h-14 w-14"
              style={{
                background:
                  "linear-gradient(135deg, transparent 50%, var(--green-fold) 50%)",
              }}
            />

            <div className="relative">
              <div className="mx-auto mb-5 flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                <FrancaMark size={22} label="Franca" />
                <span className="text-sm font-medium text-white/70">
                  Uma construção da Franca
                </span>
              </div>

              <h2 className="mx-auto max-w-2xl text-balance text-2xl font-bold leading-tight text-white sm:text-4xl">
                Isso acontece ao vivo, todo dia{" "}
                <span className="whitespace-nowrap">às {LIVE_HORARIO}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
                Entre na lista e receba o link de cada episódio no seu WhatsApp.
                Acompanhe a construção em tempo real, do zero ao resultado.
              </p>

              {/* CTA volta ao formulário do hero (âncora #form) */}
              <a
                href="#form"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-green px-8 py-4 text-base font-bold text-navy shadow-[0_16px_40px_-16px_rgba(125,224,141,0.7)] transition-all hover:bg-green-hover"
              >
                Garantir minha vaga na série
                <IconArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
