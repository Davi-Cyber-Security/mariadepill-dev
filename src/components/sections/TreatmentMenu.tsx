"use client";
import { useState } from 'react';
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


export default function TreatmentMenu(){
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [animating, setAnimating] = useState(false);
    const animationDuration = 300; // ms

    const [verDetalhes, setVerDetalhes] = useState(false);
    const [selecionadoBoolean, setSelecionadoBoolean] = useState(false);
    const [selecionado, setSelecionado] = useState('');

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
            <p className="txt-rosa">Nosso</p>
            <h2 className="titulo-txt-rosa">Menu de Tratamentos</h2>
            <div className="card-container-blur">
                {verDetalhes && selecionadoBoolean ? (
                    <Card info={selecionado} />
                ) : (
                    <div></div>
                )}
            </div>

            <div className={styles.sectionContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.containerOpcaoStyles}>
                        <p>Cabeça</p>
                        <Image src={ImgCabeca} alt='Icone Cabeça' className={styles.icone}/>
                    </div>
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} onClick={() => toggleSection('cabeca')}>
                        {openSection === 'cabeca' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: openSection === 'cabeca' ? '1000px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.cabeca?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`}>Ver Detalhes <FaArrowRightLong /></button>
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
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} onClick={() => toggleSection('tronco')}>
                        {openSection === 'tronco' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: openSection === 'tronco' ? '800px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.tronco?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`}>Ver Detalhes <FaArrowRightLong /></button>
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
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} onClick={() => toggleSection('quadril')}>
                        {openSection === 'quadril' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: openSection === 'quadril' ? '100%' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.quadril?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`}>Ver Detalhes <FaArrowRightLong /></button>
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
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} onClick={() => toggleSection('braco')}>
                        {openSection === 'braco' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: openSection === 'braco' ? '800px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.braco?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`}>Ver Detalhes <FaArrowRightLong /></button>
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
                    <div className={`${styles.containerBotaoVerDetalhes} background-rosa-claro`} onClick={() => toggleSection('perna')}>
                        {openSection === 'perna' ? <div className={styles.botaoVerDetalhes}> <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/></div> : <div className={styles.botaoVerDetalhes}><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </div>}
                    </div>
                </div>
                <div
                    className={styles.cardsContainer}
                    style={{
                        maxHeight: openSection === 'perna' ? '800px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.perna?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                            <h3>{item.titulo}</h3>
                            <div className={styles.botaoVerDetalhesCard}>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}} className={`${styles.botaoFlex}`}>Ver Detalhes <FaArrowRightLong /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Link href={"#linkWhatsapp"} className={`${styles.iconeWhatsapp} sem-line background-rosa-claro txt-white`}>
            <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={styles.icone}/>
              Agende agora
            </Link>
        </div>
    )
} 