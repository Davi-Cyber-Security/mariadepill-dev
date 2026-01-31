"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PlusCircle } from "@deemlol/next-icons";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from '../styles/Style-TreatmentMenu/TreatmentMenu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ImgCabeca from '../../../public/cabeca.webp';
import ImgTronco from '../../../public/tronco.webp';
import imgQuadril from '../../../public/quadril.webp';
import imgBracos from '../../../public/bracos.webp';
import imgPernas from '../../../public/pernas.webp';
import IconeWhatsapp from '../../../public/icone-whatsapp.webp';
import Card from '../cards-ver-detalhes/Card';
import dados from '../Sessao-Servicos/dados';


export default function TreatmentMenu(){

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

    const { ref: sectionRef, inView } = useInView({
         threshold: 0.1, // Dispara quando apenas 10% da seção estiver visível
    });

    // Efeito para fechar a aba quando o usuário sair da área
    useEffect(() => {
    if (!inView) {
        setAberto(null); 
    }
    }, [inView]);

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

    const [aberto, setAberto] = useState<string | null>(null);
    const toggleTratamento = (id: string) => {
        setAberto(aberto === id ? null : id);
    };
    return (
        <section ref={sectionRef} className="w-5/6 mx-auto px-6 py-12 flex flex-col gap-6">
            <header className="font-playfair-display mb-4">
                <p className="text-text-secundario text-[32px]">Nosso</p>
                <h2 className="text-text-principal text-[40px]">Menu de Tratamentos</h2>
                <div className="card-container-blur">
                    {verDetalhes && selecionadoBoolean ? (
                        <Card info={selecionado} />
                    ) : (
                        <div></div>
                    )}
                </div>
            </header>

            <div className="flex flex-col gap-4">
                {categorias.map((cat) => (
                    <div key={cat.id} className="flex flex-col gap-0 overflow-hidden rounded-[30px] box-shadow mb-4">
                        <div className="flex items-center justify-between bg-white p-6">
                            <div className="flex items-center gap-6">
                                <p className="text-[#4A4468] text-4xl font-playfair-display">{cat.label}</p>
                                <Image src={cat.icone} alt={cat.id} className="w-12 h-12 object-contain" />
                            </div>
                            <button 
                                onClick={() => toggleTratamento(cat.id)}
                                className="flex items-center gap-3 bg-botao-principal text-white px-6 py-3 rounded-full transition-all"
                            >
                                <span>{aberto === cat.id ? "Fechar" : "Abrir"}</span>
                                <PlusCircle 
                                size={24} 
                                className={`transition-transform duration-300 ${aberto === cat.id ? 'rotate-45' : 'rotate-0'}`} 
                                />
                            </button>
                            </div>
                            <div 
                            className={`bg-gray-50 flex flex-wrap items-center justify-center h-fit  px-8 transition-all duration-750 ease-in-out gap-4 ${
                                aberto === cat.id ? "max-h-250 py-6 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
                            }`}
                            >
                                {(dados as any)[cat.id]?.map((item: any, idx: number) => (
                                    <div className={`font-playfair-display text-center text-2xl ${styles.sessaoCard}`} key={idx}>
                                        <div className={styles.containerImagemTexto}>
                                            <Image src={item.imagem} alt={item.titulo} className={styles.iconeCard}/>
                                             <h3>{item.titulo}</h3>
                                        </div>
                                        <div className={`font-lato ${styles.botaoVerDetalhesCard}`}>
                                            <button onClick={() => { setVerDetalhes(true); setSelecionado(item.titulo); }}>
                                                Ver Detalhes
                                            </button>
                                        </div>
                                    </div>
                                ))}
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