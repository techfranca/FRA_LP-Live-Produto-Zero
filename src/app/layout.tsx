import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Live | Produto do Zero a R$100 Mil/mês",
  description:
    "Acompanhe a construção de um produto digital do absoluto zero até R$100 mil de faturamento mensal — em tempo real, sem roteiro.",
  openGraph: {
    title: "Live | Produto do Zero a R$100 Mil/mês",
    description:
      "Série ao vivo: criando um produto digital do zero até R$100 mil/mês. Sem roteiro, sem edição. Execução real.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
