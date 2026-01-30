"use client";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center bg-white pt-20">
            <div className="w-full flex justify-center px-4">
                <h1 className="text-[12vw] md:text-[15vw] font-playfair-display text-[#E5E5E5] leading-none select-none tracking-tighter uppercase">
                    MARIADEPILL
                </h1>
            </div>
            <div className="py-6">
                <p className="text-[#8E8E8E] text-sm md:text-base font-lato text-center px-4">
                    © 2024 Maria Depill. Todos os direitos reservados. | Política de Privacidade
                </p>
            </div>
            <div className="w-full bg-[#4A4468] py-4 px-6 md:px-20 flex justify-end items-center">
                <div className="text-white/80 text-xs md:text-sm font-lato flex gap-4">
                    <span>Made by: <span className="font-semibold text-white">@asphzeera @davizeera</span></span>
                </div>
            </div>
        </footer>
    );
}