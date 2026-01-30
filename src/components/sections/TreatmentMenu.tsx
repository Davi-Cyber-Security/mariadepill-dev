"use client";
import { useState } from 'react';
import { PlusCircle } from "@deemlol/next-icons";
import { IoMdRemoveCircleOutline } from "react-icons/io";
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
import dados from '../Sessao-Servicos/dados';

export default function TreatmentMenu() {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [animating, setAnimating] = useState(false);
    const animationDuration = 300;

    const [verDetalhes, setVerDetalhes] = useState(false);
    const [selecionado, setSelecionado] = useState('');

    const categorias = [
        { id: 'cabeca', label: 'Cabeça', icone: ImgCabeca, altura: '1000px' },
        { id: 'tronco', label: 'Tronco', icone: ImgTronco, altura: '800px' },
        { id: 'quadril', label: 'Quadril', icone: imgQuadril, altura: '100%' },
        { id: 'bracos', label: 'Braços', icone: imgBracos, altura: '800px' },
        { id: 'pernas', label: 'Pernas', icone: imgPernas, altura: '800px' },
    ];

    function toggleSection(section: string) {
        if (animating) return;

        if (openSection === section) {
            setAnimating(true);
            setOpenSection(null);
            setTimeout(() => setAnimating(false), animationDuration);
        } else {
            setAnimating(true);
            setOpenSection(null);
            setTimeout(() => {
                setOpenSection(section);
                setAnimating(false);
            }, openSection ? animationDuration : 0);
        }
    }

    return (
        <div className={`${styles.treatmentMenuContainer} container-general`}>
            <section className="max-w-7xl mx-auto px-6">
                <p className="txt-rosa">Nosso</p>
                <h2 className="titulo-txt-rosa">Menu de Tratamentos</h2>
                <div className="card-container-blur">
                    {verDetalhes && selecionado && (
                        <Card info={selecionado} />
                    )}
                </div>

                {categorias.map((cat) => (
                    <div key={cat.id} className={styles.sectionContainer}>
                        <div className={styles.headerContainer}>
                            <div className={styles.containerOpcaoStyles}>
                                <p>{cat.label}</p>
                                <Image src={cat.icone} alt={cat.label} className={styles.icone}/>
                            </div>

                            <div 
                                className={`${styles.containerBotaoVerDetalhes} background-rosa-claro cursor-pointer`} 
                                onClick={() => toggleSection(cat.id)}
                            >
                                {openSection === cat.id ? (
                                    <div className={styles.botaoVerDetalhes}>
                                        <span>Fechar</span> <IoMdRemoveCircleOutline size={24}/>
                                    </div>
                                ) : (
                                    <div className={styles.botaoVerDetalhes}>
                                        <span>Abrir</span> <PlusCircle color="#FFFFFF" size={24} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div
                            className={styles.cardsContainer}
                            style={{
                                maxHeight: openSection === cat.id ? cat.altura : '0px',
                                transition: `max-height ${animationDuration}ms ease`,
                                overflow: 'hidden',
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                                {(dados as any)[cat.id]?.map((item: any, idx: number) => (
                                    <div className={styles.sessaoCard} key={idx}>
                                        <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                                        <h3>{item.titulo}</h3>
                                        <div className={styles.botaoVerDetalhesCard}>
                                            <button onClick={() => {
                                                setVerDetalhes(true); 
                                                setSelecionado(item.titulo); 
                                            }}>
                                                Ver Detalhes
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <Link href="#linkWhatsapp" className="sem-line background-rosa-escuro txt-white">
                <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className="icone"/>
                Agende agora
            </Link>
        </div>
    );
}