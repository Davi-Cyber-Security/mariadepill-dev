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

    return (
        <div>
            <p className="txt-rosa">Nosso</p>
            <h2 className="titulo-txt-rosa">Menu de Tratamentos</h2>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Cabeça</p>
                    <Image src={ImgCabeca} alt='Icone Cabeça' className='icone'/>
                </div>
                <div className='botao background-rosa-claro' onClick={handleCabeca}>
                    <span>Abrir</span>
                    <PlusCircle size={24} color="#FFFFFF" />
                </div>
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Tronco</p>
                    <Image src={ImgTronco} alt='Icone do Tronco' className='icone'/>
                </div>
                <div className='botao background-rosa-claro' onClick={handleTronco}>
                    <span>Abrir</span>
                    <PlusCircle size={24} color="#FFFFFF" />
                </div>
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Quadril</p>
                    <Image src={imgQuadril} alt='Icone do Quadril' className='icone'/>
                </div>
                <div className='botao background-rosa-claro' onClick={handleQuadril}>
                    <span>Abrir</span>
                    <PlusCircle size={24} color="#FFFFFF" />
                </div>
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Braços</p>
                    <Image src={imgBracos} alt='Icone dos Braços' className='icone'/>
                </div>
                <div className='botao background-rosa-claro' onClick={handleBracos}>
                    <span>Abrir</span>
                    <PlusCircle size={24} color="#FFFFFF" />
                </div>
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Pernas</p>
                    <Image src={imgPernas} alt='Icone das Pernas' className='icone'/>
                </div>
                <div className='botao background-rosa-claro' onClick={handlePernas}>
                    <span>Abrir</span>
                    <PlusCircle size={24} color="#FFFFFF" />
                </div>
            </div>

            <Link href={"#linkWhatsapp"} className={"sem-line background-rosa-escuro txt-white"}>
            <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={"icone"}/>
              Agende agora
            </Link>
        </div>
    )
} 