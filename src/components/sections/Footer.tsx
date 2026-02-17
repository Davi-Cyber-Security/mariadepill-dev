"use client";
import style from "../styles/Footer/footer.module.css";
import Link from 'next/link';

export default function Footer(){
    return (
        <footer className="w-full flex flex-col items-center bg-white pt-5">
            <div className="w-full flex justify-center px-4">
                <h1 className="text-[12vw] md:text-[15vw] font-playfair-display text-[#E5E5E5] leading-none select-none tracking-tighter uppercase">
                    MARIADEPILL
                </h1>
            </div>
            <div className={`${style.containerFooter} py-6`}>
                <p className="text-[#8E8E8E] text-sm md:text-base font-lato text-center px-4">
                    © 2024 Maria Depill. Todos os direitos reservados. | <Link href="/termo-de-privacidade" className="text-blue-500 hover:text-blue-700">Política de Privacidade</Link>
                </p>
            </div>
        </footer>
    )
}