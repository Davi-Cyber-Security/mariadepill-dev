"use client";
import Link from "next/link";
import Image from "next/image";
import imagem from "../../../public/selecionada 8.png";
import styles from "../styles/Hero/hero.module.css";
import { useTheme } from "@/src/contexts/ThemeContext";

export default function Hero() {
  const { isRoxoTheme } = useTheme();

  return (
    <section className={`${styles.heroSection} w-full flex items-center justify-center bg-background px-6 md:px-20`}>
      <div className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${styles.heroGrid}`}>
        <div className="flex flex-col gap-6">
          <h1
            className={`text-5xl ${styles.heroTitle}`}
            style={isRoxoTheme ? { color: "#463E70" } : undefined}
          >
            Pele Suave e <br /> Duradoura
          </h1>
          <Link
            href={"https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20depila%C3%A7%C3%A3o.%0APoderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?%0A%C3%81reas%20desejadas:%20%5Binformar%20aqui%5D"}
            className={`${styles.heroButton} bg-botao-principal txt-white rounded-full max-w-fit`}
            style={isRoxoTheme ? { backgroundColor: "#463E70", color: "#FFFFFF" } : undefined}
          >
            <span className="p-5 md:p-5">Agendar Horário</span>
          </Link>
        </div>
        <Image
          src={imagem}
          priority
          alt="Imagem de fundo"
          className={`w-full max-w-lg object-contain ${styles.heroImage}`}
        />
      </div>
    </section>
  );
}