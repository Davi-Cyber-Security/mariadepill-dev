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
    const [selecionadoBoolean, setSelecionadoBoolean] = useState(false);
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

        // fechar se já estiver aberta
        if (openSection === section) {
            setAnimating(true);
            setOpenSection(null);
            setTimeout(() => setAnimating(false), animationDuration);
            return;
        }
        // trocar de seção com efeito: fechar atual, depois abrir a nova
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
        <section>
            <div className="max-w-7xl mx-auto px-6">
                <p className="txt-rosa">Nosso</p>
                <h2 className="titulo-txt-rosa">Menu de Tratamentos</h2>
                
                <div className="card-container-blur">
                    {verDetalhes && selecionadoBoolean && (
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
                                                setSelecionadoBoolean(true);
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

                <div className="w-full flex justify-end mt-12">
                    <Link 
                        href="#linkwhatsapp" 
                        className="font-questrial flex items-center justify-center gap-3 text-center text-xl md:text-[32px] bg-botao-principal rounded-[50px] text-white px-8 py-4 hover:bg-[#3b3654] transition-all hover:scale-105"
                    >
                        <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className="w-6 h-6 md:w-8 md:h-8 object-contain"/>
                        <span>Agende agora</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}