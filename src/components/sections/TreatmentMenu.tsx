"use client";
import { useState } from 'react';
import { PlusCircle } from "@deemlol/next-icons";
import Link from 'next/link';
import Image from 'next/image';
import ImgCabeca from '../../../public/cabeca.png';
import ImgTronco from '../../../public/tronco.png';
import imgQuadril from '../../../public/quadril.png';
import imgBracos from '../../../public/bracos.png';
import imgPernas from '../../../public/pernas.png';
import IconeWhatsapp from '../../../public/icone-whatsapp.png';


export default function TreatmentMenu(){

    function handleCabeca() {}

    function handleTronco() {}

    function handleQuadril() {}

    function handleBracos() {}

    function handlePernas() {}

    const [aberto, setAberto] = useState<string | null>(null);
    const toggleTratamento = (nome: string) => {
        setAberto(aberto === nome ? null : nome);
    };
    const tratamentos = [
        { nome: "Cabeça", img: ImgCabeca, descricao: "Massagem capilar e limpeza profunda.", action: () => {} },
        { nome: "Tronco", img: ImgTronco, descricao: "Massagem capilar e limpeza profunda.", action: () => {} },
        { nome: "Quadril", img: imgQuadril, descricao: "Massagem capilar e limpeza profunda.", action: () => {} },
        { nome: "Braços", img: imgBracos, descricao: "Massagem capilar e limpeza profunda.", action: () => {} },
        { nome: "Pernas", img: imgPernas, descricao: "Massagem capilar e limpeza profunda.", action: () => {} },
    ];

    return (
        <section className="w-5/6 mx-auto px-6 py-12 flex flex-col gap-6">
            <header className="font-playfair-display mb-4">
                <p className="text-text-secundario text-[32px]">Nosso</p>
                <h2 className="text-text-principal text-[40px]">Menu de Tratamentos</h2>
            </header>
            <div className="flex flex-col gap-4">
                {tratamentos.map((item, index) => (
                    <div key={index} className="flex flex-col gap-0 overflow-hidden rounded-[30px] box-shadow mb-4">
                        <div className="flex items-center justify-between bg-white p-6">
                            <div className="flex items-center gap-6">
                                <p className="text-[#4A4468] text-4xl font-playfair-display">{item.nome}</p>
                                <Image src={item.img} alt={item.nome} className="w-12 h-12 object-contain" />
                            </div>
                            <button 
                                onClick={() => toggleTratamento(item.nome)}
                                className="flex items-center gap-3 bg-botao-principal text-white px-6 py-3 rounded-full transition-all"
                            >
                                <span>{aberto === item.nome ? "Fechar" : "Abrir"}</span>
                                <PlusCircle 
                                size={24} 
                                className={`transition-transform duration-300 ${aberto === item.nome ? 'rotate-45' : 'rotate-0'}`} 
                                />
                            </button>
                            </div>
                            <div 
                            className={`bg-gray-50 px-8 transition-all duration-500 ease-in-out ${
                                aberto === item.nome ? "max-h-125 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
                            }`}
                            >
                            <p className="text-text-secundario text-xl">
                                {item.descricao}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end w-full mt-6">
                <Link 
                href="#linkWhatsapp" 
                className="flex items-center gap-2 bg-botao-principal rounded-[50px] text-white px-8 shadow-botao-principal hover:scale-110 transition-transform"
                >
                    <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className="icone"/>
                    <span className="text-xl font-questrial">Agende agora</span> 
                </Link>
            </div>
        </section>
    )
} 