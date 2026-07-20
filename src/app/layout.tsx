import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

/*
  Fontes oficiais da marca Franca (MIV 2.0):
  - Poppins: títulos / wordmark
  - Montserrat: corpo
  Carregadas via next/font (self-hosted, sem request externo = mais performance).
*/
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Produto do Zero a R$100 mil/mês | Série ao vivo — Franca",
  description:
    "Acompanhe a construção de um produto digital do absoluto zero até R$100 mil de faturamento mensal, em tempo real e sem roteiro. Todo dia às 17h25.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Produto do Zero a R$100 mil/mês | Série ao vivo",
    description:
      "Série ao vivo: criando um produto digital do zero até R$100 mil/mês. Sem roteiro, sem edição. Execução real, todo dia às 17h25.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
