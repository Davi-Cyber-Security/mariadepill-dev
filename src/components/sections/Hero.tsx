"use client";
import Link from "next/link";
import Image from "next/image";
import imagem from "../../../public/selecionada 8.png";
export default function Hero() {
    return (
      <section className="w-full flex items-center justify-center bg-[linear-gradient(270deg,#FFFFFF_36%,#9D8BFF_86%)] px-6 md:px-20">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="flex flex-col gap-6">
          <h1 className="text-8xl text-text-principal font-playfair-display">Pele Suave e <br /> Duradoura </h1>
            <Link href={"#agendarLink"} className={"bg-botao-principal txt-white p-5 rounded-full font-questrial text-[32px] max-w-fit hover:bg-[#3b3654] hover:scale-105 transition-transform"}>
              Agendar Horário
            </Link>
          </div>
          <div className="relative flex justify-end">
            <Image src={imagem} priority alt="Imagem de fundo" className="w-full max-w-lg object-contain"/>
          </div>
        </div>
        
      </section>
    );
}