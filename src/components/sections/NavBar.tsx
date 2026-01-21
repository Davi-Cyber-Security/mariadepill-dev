"use client";
import Link from "next/link";
import Image from "next/image";
import IconeWhatsapp from '../../../public/icone-whatsapp.png';
import { BiAdjust } from "react-icons/bi";
import { useState } from "react";

export default function NavBar() {
  const [alterarModoParaRoxo, setAlterarModoParaRoxo] = useState(false);

  return (
    <nav className="fixed top-2 inset-x-0 z-50 flex justify-center px-2">
      <div className=" w-full flex items-center justify-between bg-black shadow-lg rounded-2xl">
        <Image className="flex w-14 h-14" src={IconeWhatsapp} alt="Logo" />
        <ul className="text-white absolute left-1/2 -translate-x-1/2 flex gap-6 list-none items-center">
          <li>Sobre nós</li>
          <li>Serviços</li>
          <li>Beneficios</li>
          <li>Endereço</li>
        </ul>
        <div className="flex items-center gap-4 mr-5">
          <div className="flex items-center w-60 h-9 gap-5 bg-red-700 rounded-2xl  ">
            <Image className="flex ml-2 items-center gap-2 w-10 h-10" src={IconeWhatsapp} alt="" />
            <p>Fale Conosco</p>
          </div>       
          <BiAdjust 
            className="cursor-pointer text-2xl text-white" 
            onClick={() => setAlterarModoParaRoxo(!alterarModoParaRoxo)}
          />
        </div>
      </div>
    </nav>
  );
}