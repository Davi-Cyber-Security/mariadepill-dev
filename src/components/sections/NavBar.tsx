"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/logo.png';
import IconeWhatsapp from '../../../public/icone-whatsapp.png';
import styles from "../styles/NavBar/navbar.module.css";
import { BiAdjust } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useTheme } from "@/src/contexts/ThemeContext";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Agendar', href: '#agendar-horario'},
  { label: 'Benefícios', href: '#beneficios'},
  { label: 'Serviços', href: '#servicos'},
  { label: 'Endereço', href: '#endereco'},
  { label: 'Horário de atendimento', href: '#horario-de-atendimento'},
];

export default function NavBar() {
  const { isRoxoTheme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setScrollProgress(percent);
    }
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navBarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navBarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <nav className={`${styles.navBar} fixed top-2 inset-x-0 flex justify-center px-2`}>
      
      <div className={`${styles.navContent} w-full flex items-center justify-between bg-offwhite shadow-lg rounded-2xl`}>
        
        <Image className={`${isRoxoTheme ? styles.themeToggleIconCorRoxo : styles.themeToggleIconCorRosa} flex m-1 rounded-full w-18 h-18`} src={Logo} alt="Logo" />
        
        <ul className="flex gap-10">
         {navLinks.map((link) => (
          <li key={link.href}>
              <Link href={link.href} className={`${isRoxoTheme ? styles.themeToggleIconRoxo : styles.themeToggleIconDefault} hover:text-purple-600 transition-colors txt-rosa`}>
                {link.label}
              </Link>
          </li>
         ))}
        </ul>
        <div className="flex items-center gap-4 mr-5">
          <Link href={"https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20depila%C3%A7%C3%A3o.%0APode%20me%20explicar%20como%20funciona%20o%20atendimento%20e%20os%20valores?"} className="flex items-center w-60 h-9 gap-5 background-rosa-escuro text-white rounded-2xl">
                <Image className="flex ml-2 items-center gap-2 w-10 h-10" src={IconeWhatsapp} alt="" aria-hidden="true" /> 
               <span>Saiba mais</span>     
          </Link>
          <BiAdjust
            aria-label="Alternar modo de cor"
            className={`${styles.botao} botaoModo ${isRoxoTheme ? styles.themeToggleIconRoxo : styles.themeToggleIconDefault}`}
            onClick={toggleTheme}
          />
        </div>
      </div>

      <div className={`${styles.mobileNav} w-full items-center justify-between bg-offwhite shadow-lg rounded-2xl px-3`}> 
        <div className="flex items-center">
        <Image className={`${isRoxoTheme ? styles.themeToggleIconCorRoxo : styles.themeToggleIconCorRosa} flex m-1 rounded-full w-18 h-18`} src={Logo} alt="Logo" />
        </div>

        <div className="flex items-center gap-3">
          <BiAdjust
            aria-label="Alternar modo de cor"
            className={`${styles.botao} botaoModo ${isRoxoTheme ? styles.themeToggleIconRoxo : styles.themeToggleIconDefault}`}
            onClick={toggleTheme}
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

      {mobileOpen && (
        <div className={`${styles.mobileDropdown} mt-2 w-full justify-center`}>
          <div className="w-full max-w-7xl px-4">
            <ul className="flex flex-col gap-2 bg-offwhite shadow-md rounded-xl p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => {
                      handleSmoothScroll(e, link.href);
                      setMobileOpen(false);
                    }} 
                    className={`${isRoxoTheme ? '#D0A0E3' : styles.themeToggleIconDefault} block w-full px-3 py-2 rounded-md hover:bg-[#f3eefe]`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
              <Link href={"#linkWhatsapp"} className="flex items-center w-60 h-9 gap-5 background-rosa-escuro text-white rounded-2xl">
                <Image className="flex ml-2 items-center gap-2 w-10 h-10" src={IconeWhatsapp} alt="" aria-hidden="true" /> 
               <span>Fale Conosco</span>     
          </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className={styles.rolagemLeitura}
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: isRoxoTheme ? "#463E70" : "#AA6BC8",
        }}
      />
    </nav>
  );
}