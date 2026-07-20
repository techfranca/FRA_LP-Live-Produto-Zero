import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import ProofSection from "./components/ProofSection";
import Footer from "./components/Footer";

/*
  Página da série ao vivo "Produto do Zero a R$100 mil/mês".
  Composição enxuta (foco em conversão): top bar + hero com form + prova + rodapé.
*/
export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <ProofSection />
      </main>
      <Footer />
    </>
  );
}
