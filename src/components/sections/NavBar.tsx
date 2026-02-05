"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/logo.png';
import IconeWhatsapp from '../../../public/icone-whatsapp.png';
import styles from "../styles/NavBar/navbar.module.css";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`${styles.navBar} fixed top-2 inset-x-0 flex justify-center px-2`}>
      
      <div className={`${styles.navContent} w-full flex items-center justify-between bg-offwhite shadow-lg rounded-2xl`}>
        
        <Image className={`${styles.logo} flex background-rosa-escuro m-1 rounded-full w-18 h-18`} src={Logo} alt="Logo" />
        
        <ul className="flex gap-10">
        {/*Adicionar essa parada aqui como className scroll-mt-28; serve para quando utilizar o link na navbar, não bloquear o titulo da sesão com a nav*/}
         {navLinks.map((link) => (
          <li key={link.href}>
              <Link href={link.href} className={`${styles.linkNav} hover:text-purple-600 transition-colors txt-rosa`}>
                {link.label}
              </Link>
          </li>
         ))}
        </ul>
        <div className="flex items-center gap-4 mr-5">
          <Link href={"#linkWhatsapp"} className="flex items-center w-60 h-9 gap-5 background-rosa-escuro text-white rounded-2xl  ">
                <Image className="flex ml-2 items-center gap-2 w-10 h-10" src={IconeWhatsapp} alt="" aria-hidden="true" /> 
               <span>Fale Conosco</span>     
          </Link>
          <BiAdjust 
            aria-label="Alternar modo de cor"
            style={alterarModoParaRoxo ? { color: '#9583f1' } : { color: '#AA6BC8' }} className={`${styles.botao} botaoModo`} 
            onClick={() => setAlterarModoParaRoxo(!alterarModoParaRoxo)}
          />
        </div>
      </div>

      {/* Mobile: quando a tela for menor, este bloco aparece (somente logo + toggle + hamburger) */}
      <div className={`${styles.mobileNav} w-full items-center justify-between bg-offwhite shadow-lg rounded-2xl px-3`}> 
        <div className="flex items-center">
          <Image className={`${styles.logo} flex background-rosa-escuro m-1 rounded-full w-10 h-10`} src={Logo} alt="Logo" />
        </div>

        <div className="flex items-center gap-3">
          <BiAdjust 
            aria-label="Alternar modo de cor"
            style={alterarModoParaRoxo ? { color: '#463E70' } : { color: '#AA6BC8' }} className={`${styles.botao} botaoModo`} 
            onClick={() => setAlterarModoParaRoxo(!alterarModoParaRoxo)}
          />

          <button
            className="p-2 rounded-md focus:outline-none"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu: aparece abaixo quando aberto */}
      {mobileOpen && (
        <div className={`${styles.mobileDropdown} mt-2 w-full justify-center`}>
          <div className="w-full max-w-7xl px-4">
            <ul className="flex flex-col gap-2 bg-offwhite shadow-md rounded-xl p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="block w-full px-3 py-2 rounded-md txt-rosa hover:bg-[#f3eefe]">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href={"#linkWhatsapp"} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-2 background-rosa-escuro text-white rounded-2xl">
                  <Image className="w-6 h-6" src={IconeWhatsapp} alt="" aria-hidden="true" />
                  <span>Fale Conosco</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}