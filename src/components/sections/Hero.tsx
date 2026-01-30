"use client";
import Link from "next/link";
import Image from "next/image";
import imagem from "../../../public/selecionada 8.webp";

export default function Hero() {
    return (
      <section className="w-full relative overflow-hidden bg-[linear-gradient(270deg,#FFFFFF_36%,#9D8BFF_86%)]">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-20">
          
          <div className="flex flex-col gap-6 flex-[1.2] pt-16 pb-8 lg:py-32 text-center lg:text-left items-center lg:items-start z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-text-principal font-playfair-display leading-[1.1]">
              Pele Suave e <br className="hidden sm:block" /> Duradoura 
            </h1>
            
            <Link 
              href="#agendarLink" 
              className="bg-botao-principal text-white px-8 py-4 md:p-5 rounded-full font-questrial text-xl md:text-2xl lg:text-[32px] max-w-fit hover:bg-[#3b3654] hover:scale-105 transition-transform shadow-lg"
            >
              Agendar Horário
            </Link>
          </div>

          <div className="relative flex-1 w-full flex justify-center lg:justify-end items-end self-end">
            <div className="w-[80%] sm:w-[60%] lg:w-full max-w-112.5 lg:max-w-lg xl:max-w-xl">
              <Image 
                src={imagem} 
                priority 
                alt="Imagem de fundo" 
                className="w-full h-auto object-contain block align-bottom"
              />
            </div>
          </div>
          
        </div>
      </section>
    );
}