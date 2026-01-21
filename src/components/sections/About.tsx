"use client";
import Link from "next/link";
import Image from "next/image";

export default function About(){
    return (
        <div className={"container"}> 
            <div className={"container-aboud"}>
                <h2 className="text-4xl titulo-txt-rosa">Resultados duradouros e uma experiência inesquecivel</h2>
                <p className="txt-rosa">Comprometimento com a excelência e um atendimento de qualidade superior.</p>
                <Link href={"#linkwhatsapp"} className="background-rosa-claro txt-white">
                    Mande uma mensagem
                </Link>
            </div>

            <div className={"imagem-container"}>
                <Image src={""} alt="Imagem da cera de depilação" className="imagem"/>
            </div>
        </div>
    )
}