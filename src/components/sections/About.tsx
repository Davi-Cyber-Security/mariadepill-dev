"use client";
import Link from "next/link";
import Image from "next/image";
import imagem from "@/public/Imagem.svg"

export default function About(){
    return (
        <section className={"max-w-7xl mx-auto my-30 flex w-full items-center justify-between px-6 md:px-12"}> 
            <div className={"container-about"}>
                <h2 className="text-6xl mb-6 text-text-principal font-playfair-display">Resultados duradouros e uma<br/>experiência inesquecivel</h2>
                <p className="text-4xl mb-12 text-text-secundario font-lato">Comprometimento com a<br/>excelência e um atendimento<br/>de qualidade superior.</p>
                
                <Link href={"#linkwhatsapp"} className="font-questrial inline-block text-center text-[32px] justify-center bg-botao-principal rounded-[50px] txt-white px-6 hover:bg-[#3b3654] transition-colors">
                    Mande uma mensagem
                </Link>
            </div>
            <figure className={"relative flex-1 flex justify-end"}>
                <Image src={imagem} alt="Imagem da cera de depilação" className="imagem"/>
            </figure>
        </section>
    )
}