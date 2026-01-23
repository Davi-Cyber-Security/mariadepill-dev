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

    const tratamentos = [
        { nome: "Cabeça", img: ImgCabeca, action: () => {} },
        { nome: "Tronco", img: ImgTronco, action: () => {} },
        { nome: "Quadril", img: imgQuadril, action: () => {} },
        { nome: "Braços", img: imgBracos, action: () => {} },
        { nome: "Pernas", img: imgPernas, action: () => {} },
    ];

    return (
        <section className="w-5/6 mx-auto px-6 py-12 flex flex-col gap-6">
            <header className="font-playfair-display mb-4">
                <p className="text-text-secundario text-[32px]">Nosso</p>
                <h2 className="text-text-principal text-[40px]">Menu de Tratamentos</h2>
            </header>
            <div className="flex flex-col gap-4">
                {tratamentos.map((item, index) => (
                    <div
                    key={index}
                    className="flex items-center justify-between bg-white p-6 rounded-[30px] shadow-botao-principal border"
                    > 
                        <div className="flex items-center gap-6">
                            <p className="text-[#4A4468] text-4xl font-playfair-display">
                                {item.nome}
                            </p>
                            <Image src={item.img} alt={item.nome} className="icone object-contain opacity-70" />
                        </div>
                        <button 
                            onClick={item.action}
                            className="flex items-center gap-3 bg-[#4A4468] text-white px-6 py-3 rounded-full"
                        >
                            <span className="text-xl font-medium">Abrir</span>
                            <PlusCircle size={28} />
                        </button>
                    </div> 
                ))}
            </div>
            <div className="flex justify-end w-full mt-6">
                <Link 
                href="#linkWhatsapp" 
                className="flex items-center gap-2 bg-botao-principal rounded-[50px] text-white px-8 shadow-botao-principal"
                >
                    <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className="icone"/>
                    <span className="text-xl font-questrial">Agende agora</span> 
                </Link>
            </div>
        </section>
    )
} 