import type { Metadata } from "next";
import { Playfair_Display, Lato, Open_Sans  } from "next/font/google";
import "./globals.css";


const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="{`${playfair.variable}`}">
        {children}
      </body>
    </html>
  );
}
