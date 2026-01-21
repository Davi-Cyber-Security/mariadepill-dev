"use client";
import Link from "next/link";
import Image from "next/image";
import IconeWhatsapp from '../../../public/icone-whatsapp.png';
import { BiAdjust } from "react-icons/bi";
import { useState } from "react";

export default function NavBar() {
  const [alterarModoParaRoxo, setAlterarModoParaRoxo] = useState(false);
  
    return (
      <header>
        <div className={"background-white"}>
          {/* <Image className={"Logo aqui"} src={""} alt=""/> */}
          <div>
            <Link href={"#Sobre nós"}>
              <p className={"txt-rosa"}>Sobre nós</p>
            </Link>
            <Link href={"#Serviços"}>
              <p className={"txt-rosa"}>Serviços</p>
            </Link>
            <Link href={"#Benefícios"}>
              <p className={"txt-rosa"}>Benefícios</p>
            </Link>
            <Link href={"#Endereço"}>
              <p className={"txt-rosa"}>Endereço</p>
            </Link>
            <Link href={"#linkWhatsapp"} className={"sem-line background-rosa-escuro txt-white"}>
            <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={"icone"}/>
              Fale Conosco
            </Link>
            <div className={"modo-escuro"} onClick={() => setAlterarModoParaRoxo(!alterarModoParaRoxo)}>
              <BiAdjust style={alterarModoParaRoxo ? {color: '#AA6BC8'} : {color: '#463E70'}}/>
            </div>
          </div>
        </div>
      </header>
    );
}