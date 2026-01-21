"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
      <div className={"container"}>
        <div className={"container-hero"}>
          <h1 className="text-5xl titulo-txt-rosa">Pele Suave e <br /> Duradoura </h1>
          <Link href={"#agendarLink"} className={"background-rosa-escuro txt-white"}>
            Agendar Horário
          </Link>
        </div>
        <Image src={""} alt="Imagem de fundo" />
      </div>
    );
}