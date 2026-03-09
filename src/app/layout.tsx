import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Academia Saikoo | Transforme seu corpo. Supere seus limites.",
  description:
    "A Academia Saikoo oferece estrutura completa, equipamentos modernos e ambiente motivador para você alcançar seus objetivos. Matricule-se agora!",
  keywords: [
    "academia",
    "fitness",
    "musculação",
    "treino",
    "saikoo",
    "saúde",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
