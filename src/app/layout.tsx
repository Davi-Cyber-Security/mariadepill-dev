"use client";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/contexts/ThemeContext";
import { useEffect } from "react";
import Script from "next/script";
import Logo from '../../public/logo.png';

function Tracker() {
  useEffect(() => {
    const inicio = Date.now();

    fetch("/api/acesso", { method: "POST" });

    const onUnload = () => {
      const segundos = Math.round((Date.now() - inicio) / 1000);
      navigator.sendBeacon(
        "/api/tempo",
        new Blob([JSON.stringify({ segundos })], { type: "application/json" })
      );
    };

    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, []);

  return null;
}

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
      <meta name="description" content="Maria Depill oferece serviços de depilação profissional em Nova Crixás, Goiás. Depilação a cera de alta qualidade para uma pele suave e duradoura." />
      <meta name="keywords" content="Maria Depill, depilação, depilação a cera, Nova Crixás, Goiás, Brasil, estética, beleza, depilacao em nova crixas, depilação em nova crixás" />
      <meta property="og:site_name" content="Maria Depill" />
      <meta property="og:title" content="Maria Depill" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Maria Depill" />
      <meta name="geo.placename" content="Nova Crixás" />
      <meta name="geo.region" content="BR-GO" />
      <meta itemProp="name" content="Maria Depill - Depilação Profissional em Nova Crixás, Goiás" />
      <meta itemProp="description" content="Maria Depill oferece serviços de depilação profissional em Nova Crixás, Goiás. Depilação a cera de alta qualidade para uma pele suave e duradoura." />
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D6YXF74BTQ" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-D6YXF74BTQ');
      `}} />
        <meta name="google-site-verification" content="VpJU2_WzlWKsD0-QB4L1NxHh6QnU79L2N1e3v0YJH8" />
        <link rel="icon" href={Logo.src} />
      </head>
      <body className={playfair.variable}>
        <ThemeProvider>
          <Tracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
