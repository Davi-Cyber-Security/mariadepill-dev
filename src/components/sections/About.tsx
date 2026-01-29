"use client";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Style-About/about.module.css';
import segundaImagem from '../../../public/MariaDepill/segundaImagem.png';

export default function About() {
    return (
        <section className="max-w-7xl mx-auto my-12 md:my-30 flex flex-col md:flex-row w-full items-center justify-between px-6 md:px-12 gap-10"> 
            <div className="container-about text-center md:text-left flex-1">
                <h2 className="text-4xl md:text-6xl mb-6 text-text-principal font-playfair-display leading-tight">
                    Resultados duradouros e uma<br className="hidden md:block"/> experiência inesquecível
                </h2>
                <p className="text-xl md:text-4xl mb-8 md:mb-12 text-text-secundario font-lato">
                    Comprometimento com a<br className="hidden md:block"/> excelência e um atendimento<br className="hidden md:block"/> de qualidade superior.
                </p>
                
                <Link 
                    href="#linkwhatsapp" 
                    className="font-questrial inline-block text-center text-xl md:text-[32px] bg-botao-principal rounded-[50px] text-white px-8 py-3 md:px-10 md:py-4 hover:bg-[#3b3654] transition-colors w-full md:w-auto"
                >
                    Mande uma mensagem
                </Link>
            </div>
            <figure className="relative flex-1 w-full max-w-100 md:max-w-none flex justify-center md:justify-end">
                <Image 
                    src={segundaImagem} 
                    alt="Imagem da cera de depilação" 
                    className={`${styles.imagem} w-full h-auto object-contain`}
                    priority
                />
            </figure>
        </section>
    );
}