import type { Metadata } from "next";
import { Playfair_Display, Questrial, Lato,  Konkhmer_Sleokchher } from "next/font/google";
import "./globals.css";


const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: "400"
});
const questrial = Questrial({
  subsets: ['latin'],
  variable: '--font-questrial',
  display: 'swap',
  weight: "400"
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif", 
});
const konkhmer = Konkhmer_Sleokchher({ 
  subsets: ["latin"],
  variable: "--font-serif", 
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="{`${playfair.variable} ${questrial.variable} ${lato.variable} ${konkhmer.variable}`}">
        {children}
      </body>
    </html>
  );
}
