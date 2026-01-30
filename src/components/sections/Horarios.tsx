"use client";
import Link from "next/link";

export default function Horarios() {
    const agenda = [
        { dia: "Segunda a Sexta", horario: "11 às 20h" },
        { dia: "Sábado", horario: "11 às 20h" },
        { dia: "Domingo", horario: "Fechado", isFechado: true },
    ];

    return (
        <section className="w-full flex flex-col items-center justify-center py-16 px-6 bg-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#4A4468] font-playfair-display font-semibold mb-10 tracking-widest text-center uppercase">
                Horários de Atendimento
            </h2>
            <div className="bg-white shadow-[0px_10px_40px_rgba(187,177,246,0.3)] rounded-[40px] p-8 md:p-12 w-full max-w-md flex flex-col gap-5 mb-10 border border-purple-50">

                {agenda.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex justify-between items-center text-[#4A4468] font-medium text-lg md:text-xl border-b border-purple-50 pb-2 last:border-0"
                    >
                        <p className="font-lato">{item.dia}</p>
                        <p className={`font-lato ${item.isFechado ? "italic opacity-60" : ""}`}>
                            {item.horario}
                        </p>
                    </div>
                ))}
            </div>
            <Link 
                href="#link-contato" 
                className="bg-[#4A4468] text-white px-12 py-4 rounded-full text-2xl md:text-3xl font-questrial hover:bg-[#3b3654] transition-all hover:scale-105 shadow-lg"
            >
                Quero Agendar
            </Link>
        </section>
    );
}