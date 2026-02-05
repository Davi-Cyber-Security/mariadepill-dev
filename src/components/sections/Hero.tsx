"use client";
import Link from "next/link";
import Image from "next/image";
import imagem from "../../../public/selecionada 8.png";
import styles from "../styles/Hero/hero.module.css";
export default function Hero() {
    return (
      <section className={`${styles.heroSection} w-full flex items-center justify-center bg-[linear-gradient(270deg,#FFFFFF_36%,#AA6BC8_86%)] px-6 md:px-20`}>
        <div className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${styles.heroGrid}`}>
          <div className="flex flex-col gap-6">
          <h1 className={`text-5xl text-text-principal ${styles.heroTitle}`}>Pele Suave e <br /> Duradoura </h1>
            <Link href={"#agendarLink"} className={`${styles.heroButton} bg-botao-principal txt-white rounded-full max-w-fit`}>
              <span className="p-5 md:p-5">Agendar Horário</span>
            </Link>
          </div>
            <Image src={imagem} priority alt="Imagem de fundo" className={`w-full max-w-lg object-contain ${styles.heroImage}`}/>
        </div>
        
      </section>
    );
}