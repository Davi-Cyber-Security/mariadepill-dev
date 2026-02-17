"use client";
import { useState, useRef, useEffect } from 'react';
import { PlusCircle } from "@deemlol/next-icons";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from '../styles/Style-TreatmentMenu/TreatmentMenu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ImgCabeca from '../../../public/cabeca.png';
import ImgTronco from '../../../public/tronco.png';
import imgQuadril from '../../../public/quadril.png';
import imgBracos from '../../../public/bracos.png';
import imgPernas from '../../../public/pernas.png';
import IconeWhatsapp from '../../../public/icone-whatsapp.png';

import Card from '../cards-ver-detalhes/Card';
import dados from '../Sessao-Servicos/dados'
import { useTheme } from "@/src/contexts/ThemeContext";

export default function TreatmentMenu(){
    const { isRoxoTheme } = useTheme();
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [animating, setAnimating] = useState(false);
    const animationDuration = 300; // ms

    const [verDetalhes, setVerDetalhes] = useState(false);
    const [selecionadoBoolean, setSelecionadoBoolean] = useState(false);
    const [selecionado, setSelecionado] = useState('');

    // refs and measured heights for smooth open/close animation
    const cabecaRef = useRef<HTMLDivElement | null>(null);
    const troncoRef = useRef<HTMLDivElement | null>(null);
    const quadrilRef = useRef<HTMLDivElement | null>(null);
    const bracoRef = useRef<HTMLDivElement | null>(null);
    const pernaRef = useRef<HTMLDivElement | null>(null);

    const [cabecaHeight, setCabecaHeight] = useState('0px');
    const [troncoHeight, setTroncoHeight] = useState('0px');
    const [quadrilHeight, setQuadrilHeight] = useState('0px');
    const [bracoHeight, setBracoHeight] = useState('0px');
    const [pernaHeight, setPernaHeight] = useState('0px');

    useEffect(() => {
        // When a section opens, measure its scrollHeight and set max-height accordingly.
        if (openSection === 'cabeca') {
            const el = cabecaRef.current;
            if (el) setCabecaHeight(`${el.scrollHeight}px`);
        } else {
            setCabecaHeight('0px');
        }

        if (openSection === 'tronco') {
            const el = troncoRef.current;
            if (el) setTroncoHeight(`${el.scrollHeight}px`);
        } else {
            setTroncoHeight('0px');
        }

        if (openSection === 'quadril') {
            const el = quadrilRef.current;
            if (el) setQuadrilHeight(`${el.scrollHeight}px`);
        } else {
            setQuadrilHeight('0px');
        }

        if (openSection === 'braco') {
            const el = bracoRef.current;
            if (el) setBracoHeight(`${el.scrollHeight}px`);
        } else {
            setBracoHeight('0px');
        }

        if (openSection === 'perna') {
            const el = pernaRef.current;
            if (el) setPernaHeight(`${el.scrollHeight}px`);
        } else {
            setPernaHeight('0px');
        }
    }, [openSection]);

    function toggleSection(section: string) {
        if (animating) return;

        
        if (openSection === section) {
            setAnimating(true);
            setOpenSection(null);
            setTimeout(() => setAnimating(false), animationDuration);
            return;
        }

        
        if (openSection) {
            setAnimating(true);
            setOpenSection(null);
            setTimeout(() => {
                setOpenSection(section);
                setAnimating(false);
            }, animationDuration);
        } else {
            setOpenSection(section);
        }
    }

    return (
        <div className={`${styles.treatmentMenuContainer} container-general`}>
            <p className={`${styles.txtRosa} txt-rosa`} style={isRoxoTheme ? { color: "#A59DD4" } : undefined}>Nosso</p>
            <h2 className={`${styles.tituloTxtRosa} titulo-txt-rosa`} style={isRoxoTheme ? { color: "#463E70" } : undefined}>Menu de Tratamentos</h2>
            
            {verDetalhes && selecionadoBoolean && (
                <div className={styles.cardContainerBlur}>
                    <Card
                        info={selecionado}
                        onClose={() => {
                            setVerDetalhes(false);
                            setSelecionadoBoolean(false);
                        }}
                    />
                </div>
            )}

            <div className={styles.sectionContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.containerOpcaoStyles}>
                        <p>Cabeça</p>
                        <Image src={ImgCabeca} alt='Icone Cabeça' className={styles.icone}/>
                    </div>
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} style={isRoxoTheme ? { backgroundColor: "#463E70" } : undefined} onClick={() => toggleSection('cabeca')}>
                        {openSection === 'cabeca' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    ref={cabecaRef}
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: cabecaHeight,
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.cabeca?.map((item: any, idx: number) => (
                        <div className={`sessao-card ${styles.cardContainer}`} key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3 style={isRoxoTheme ? { color: "#463E70" } : undefined}>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`} style={isRoxoTheme ? { backgroundColor: "#463E70", color: "#FFFFFF" } : undefined}>Ver Detalhes <FaArrowRightLong /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sectionContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.containerOpcaoStyles}>
                        <p>Tronco</p>
                        <Image src={ImgTronco} alt='Icone do Tronco' className={styles.icone}/>
                    </div>
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} style={isRoxoTheme ? { backgroundColor: "#463E70" } : undefined} onClick={() => toggleSection('tronco')}>
                        {openSection === 'tronco' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    ref={troncoRef}
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: troncoHeight,
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.tronco?.map((item: any, idx: number) => (
                        <div className={`sessao-card ${styles.cardContainer}`} key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3 style={isRoxoTheme ? { color: "#463E70" } : undefined}>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`} style={isRoxoTheme ? { backgroundColor: "#463E70", color: "#FFFFFF" } : undefined}>Ver Detalhes <FaArrowRightLong /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sectionContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.containerOpcaoStyles}>
                        <p>Quadril</p>
                        <Image src={imgQuadril} alt='Icone do Quadril' className={styles.icone}/>
                    </div>
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} style={isRoxoTheme ? { backgroundColor: "#463E70" } : undefined} onClick={() => toggleSection('quadril')}>
                        {openSection === 'quadril' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    ref={quadrilRef}
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: quadrilHeight,
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.quadril?.map((item: any, idx: number) => (
                        <div className={`sessao-card ${styles.cardContainer}`} key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3 style={isRoxoTheme ? { color: "#463E70" } : undefined}>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`} style={isRoxoTheme ? { backgroundColor: "#463E70", color: "#FFFFFF" } : undefined}>Ver Detalhes <FaArrowRightLong /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sectionContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.containerOpcaoStyles}>
                        <p>Braços</p>
                        <Image src={imgBracos} alt='Icone dos Braços' className={styles.icone}/>
                    </div>
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} style={isRoxoTheme ? { backgroundColor: "#463E70" } : undefined} onClick={() => toggleSection('braco')}>
                        {openSection === 'braco' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    ref={bracoRef}
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: bracoHeight,
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.braco?.map((item: any, idx: number) => (
                        <div className={`sessao-card ${styles.cardContainer}`} key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3 style={isRoxoTheme ? { color: "#463E70" } : undefined}>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`} style={isRoxoTheme ? { backgroundColor: "#463E70", color: "#FFFFFF" } : undefined}>Ver Detalhes <FaArrowRightLong /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sectionContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.containerOpcaoStyles}>
                        <p>Pernas</p>
                        <Image src={imgPernas} alt='Icone das Pernas' className={styles.icone}/>
                    </div>
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} style={isRoxoTheme ? { backgroundColor: "#463E70" } : undefined} onClick={() => toggleSection('perna')}>
                        {openSection === 'perna' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    ref={pernaRef}
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: pernaHeight,
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.perna?.map((item: any, idx: number) => (
                        <div className={`sessao-card ${styles.cardContainer}`} key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3 style={isRoxoTheme ? { color: "#463E70" } : undefined}>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`} style={isRoxoTheme ? { backgroundColor: "#463E70", color: "#FFFFFF" } : undefined} >Ver Detalhes <FaArrowRightLong /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <a href={"https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20minha%20depila%C3%A7%C3%A3o.%0APoderia%20me%20informar%20a%20disponibilidade?%0A%0A%C3%81reas%20desejadas:%20%5Bdescrever%20aqui%5D"} className={`${styles.iconeWhatsapp} sem-line background-rosa-claro txt-white`} style={isRoxoTheme ? { backgroundColor: "#463E70" } : undefined}>
            <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={styles.icone}/>
              Agende agora
            </a>
        </div>
    )
} 