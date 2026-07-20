import LeadForm from "./components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-blue relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        {/* Linhas diagonais */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/10 to-transparent rotate-6" />
        <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/5 to-transparent -rotate-3" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Badge */}
        <div className="text-center mb-10">
          <span className="inline-block bg-brand-green text-brand-blue font-bold text-sm px-4 py-1.5 rounded-full tracking-wide">
            SERIE AO VIVO — TODO DIA AS 17H25
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo — Copy */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Criando um{" "}
              <span className="text-brand-green">produto do zero</span>
              <br />a{" "}
              <span className="text-brand-green">R$100 mil/mês</span>
              <br />
              <span className="text-white/80 text-3xl md:text-4xl lg:text-5xl">
                em tempo real
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Sem roteiro pronto, sem edição pra maquiar o processo. Cada
              decisão acontecendo ao vivo — do absoluto zero até o faturamento.
              Você acompanha os erros, os testes e os resultados reais.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-brand-green text-xl mt-0.5">✓</span>
                <span className="text-gray-200">
                  Como definir um produto que vende do zero
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-green text-xl mt-0.5">✓</span>
                <span className="text-gray-200">
                  Como montar uma oferta e um funil que converte
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-green text-xl mt-0.5">✓</span>
                <span className="text-gray-200">
                  Como escalar o faturamento mês a mês com tráfego pago
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-green text-xl mt-0.5">✓</span>
                <span className="text-gray-200">
                  Execução real, episódio por episódio, até R$100 mil
                </span>
              </div>
            </div>
          </div>

          {/* Lado direito — Formulário */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-center mb-2">
              Garanta sua vaga
            </h2>
            <p className="text-gray-400 text-center text-sm mb-6">
              Receba o link da live direto no seu WhatsApp
            </p>

            <LeadForm />
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            Franca Marketing — Todos os direitos reservados
          </p>
        </div>
      </div>
    </main>
  );
}
