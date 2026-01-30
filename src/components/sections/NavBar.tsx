"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/logo.webp';
import IconeWhatsapp from '../../../public/icone-whatsapp.webp';
import { BiAdjust } from "react-icons/bi";
import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Sobre nós', href: '#sobre-nos'},
  { label: 'Serviços', href: '#servicos'},
  { label: 'Benefícios', href: '#beneficios'},
  { label: 'Endereço', href: '#endereco'},
];

export default function NavBar() {
  const [alterarModoParaRoxo, setAlterarModoParaRoxo] = useState(false);

  return (
    <nav className="fixed top-2 inset-x-0 z-50 flex justify-center px-2">
      <div className=" w-full flex items-center justify-between bg-offwhite shadow-lg rounded-full">
        
        <Image className="flex background-rosa-escuro m-1 rounded-full w-18 h-18" src={Logo} alt="Logo" />
        
        <ul className="flex gap-10">
        {/*Adicionar essa parada aqui como className scroll-mt-28; serve para quando utilizar o link na navbar, não bloquear o titulo da sesão com a nav*/}
         {navLinks.map((link) => (
          <li key={link.href}>
              <Link href={link.href} className="hover:text-purple-600 transition-colors font-konkhmer txt-rosa">
                {link.label}
              </Link>
          </li>
         ))}
        </ul>
        <div className="flex items-center gap-4 mr-5">
          <Link href={"#linkWhatsapp"} className="flex items-center w-60 h-9 gap-5 background-rosa-escuro text-white rounded-2xl  ">
                <Image className="flex ml-2 items-center gap-2 w-10 h-10" src={IconeWhatsapp} alt="" aria-hidden="true" /> 
                {/* Você pode ver esse aria-hidden e o aria-label
                    nessa Image e no BiAdjust, o aria-hidden esconde 
                    elementos não necessario no modo acessibilidade.
                    E o aria-label é o nome de um elemento da interface.
                */}
               <span>Fale Conosco</span>     
          </Link>
          <BiAdjust 
            aria-label="Alternar modo de cor"
            style={alterarModoParaRoxo ? { color: '#463E70' } : { color: '#AA6BC8' }} className="botaoModo" 
            onClick={() => setAlterarModoParaRoxo(!alterarModoParaRoxo)}
          />
        </div>
      </div>
    </nav>
  );
}