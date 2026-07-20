import type { Metadata } from "next";
import Link from "next/link";
import FrancaMark from "../components/FrancaMark";
import { IconArrowRight } from "../components/icons";

export const metadata: Metadata = {
  title: "Política de Privacidade | Franca",
  description:
    "Como a Franca coleta, usa e protege os dados informados na página da série ao vivo.",
};

/*
  Política de privacidade enxuta e real (LGPD Tier 1).
  Cobre: quais dados, finalidade, base legal, compartilhamento,
  retenção e direitos do titular.
*/
export default function Privacidade() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="mb-10 flex items-center gap-2.5">
        <FrancaMark size={30} label="Franca" />
        <span className="text-sm font-semibold text-white">Franca</span>
      </div>

      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Política de Privacidade
      </h1>
      <p className="mt-3 text-sm text-white/50">
        Referente à captação de inscrições da série ao vivo.
      </p>

      <div className="mt-10 space-y-8 text-white/70">
        <Bloco titulo="1. Dados que coletamos">
          Coletamos apenas o que você informa no formulário: nome, e-mail e
          número de WhatsApp.
        </Bloco>

        <Bloco titulo="2. Para que usamos">
          Usamos esses dados exclusivamente para enviar o link dos episódios da
          série e comunicações relacionadas a ela. Não vendemos nem alugamos
          seus dados.
        </Bloco>

        <Bloco titulo="3. Base legal">
          O tratamento se dá mediante o seu consentimento, coletado no momento
          da inscrição (art. 7º, I, da LGPD).
        </Bloco>

        <Bloco titulo="4. Compartilhamento">
          Os dados podem ser processados por serviços de infraestrutura que nos
          apoiam no envio das mensagens e no armazenamento das inscrições,
          sempre limitados a essa finalidade.
        </Bloco>

        <Bloco titulo="5. Retenção">
          Mantemos seus dados enquanto a série estiver ativa ou até você
          solicitar a remoção.
        </Bloco>

        <Bloco titulo="6. Seus direitos">
          Você pode solicitar acesso, correção ou exclusão dos seus dados, além
          de revogar o consentimento a qualquer momento, entrando em contato com
          a Franca.
        </Bloco>
      </div>

      <Link
        href="/"
        className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-green transition-colors hover:text-green-hover"
      >
        <IconArrowRight size={18} className="rotate-180" />
        Voltar para a página
      </Link>
    </main>
  );
}

function Bloco({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white">{titulo}</h2>
      <p className="mt-2 text-sm leading-relaxed">{children}</p>
    </section>
  );
}
