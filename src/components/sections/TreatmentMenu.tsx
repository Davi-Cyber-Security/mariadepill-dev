"use client";
import { useState } from 'react';
import { PlusCircle } from "@deemlol/next-icons";
import { IoMdRemoveCircleOutline } from "react-icons/io";
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
    // qual seção está aberta: 'cabeca' | 'tronco' | 'quadril' | 'braco' | 'perna' | null
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [animating, setAnimating] = useState(false);
    const animationDuration = 300; // ms

    const [verDetalhes, setVerDetalhes] = useState(false);
    const [selecionadoBoolean, setSelecionadoBoolean] = useState(false);
    const [selecionado, setSelecionado] = useState('');

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
        <div>
            <p className="txt-rosa">Nosso</p>
            <h2 className="titulo-txt-rosa">Menu de Tratamentos</h2>
            <div className="card-container-blur">
                {verDetalhes && selecionadoBoolean ? (
                    <Card info={selecionado} />
                ) : (
                    <div></div>
                )}
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Cabeça</p>
                    {openSection === 'cabeca' ? "" : <Image src={ImgCabeca} alt='Icone Cabeça' className='icone'/>}
                </div>
                <div className='botao background-rosa-claro' onClick={() => toggleSection('cabeca')}>
                    {openSection === 'cabeca' ? <> <span>Fechar</span> <IoMdRemoveCircleOutline /></> : <><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </>}
                </div>

                <div
                    className="cards"
                    style={{
                        maxHeight: openSection === 'cabeca' ? '800px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.cabeca?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className='icone-card'/>
                            <h3>{item.titulo}</h3>
                            <div className='botao-ver-detalhes'>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}}>Ver Detalhes</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Tronco</p>
                    {openSection === 'tronco' ? "" : <Image src={ImgTronco} alt='Icone do Tronco' className='icone'/>}
                </div>
                <div className='botao background-rosa-claro' onClick={() => toggleSection('tronco')}>
                    {openSection === 'tronco' ? <> <span>Fechar</span> <IoMdRemoveCircleOutline /></> : <><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </>}
                </div>

                <div
                    className="cards"
                    style={{
                        maxHeight: openSection === 'tronco' ? '800px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.tronco?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className='icone-card'/>
                            <h3>{item.titulo}</h3>
                            <div className='botao-ver-detalhes'>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}}>Ver Detalhes</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Quadril</p>
                    {openSection === 'quadril' ? "" : <Image src={imgQuadril} alt='Icone do Quadril' className='icone'/>}
                </div>
                <div className='botao background-rosa-claro' onClick={() => toggleSection('quadril')}>
                    {openSection === 'quadril' ? <> <span>Fechar</span> <IoMdRemoveCircleOutline /></> : <><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </>}
                </div>

                <div
                    className="cards"
                    style={{
                        maxHeight: openSection === 'quadril' ? '800px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.quadril?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className='icone-card'/>
                            <h3>{item.titulo}</h3>
                            <div className='botao-ver-detalhes'>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}}>Ver Detalhes</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Braços</p>
                    {openSection === 'braco' ? "" : <Image src={imgBracos} alt='Icone dos Braços' className='icone'/>}
                </div>
                <div className='botao background-rosa-claro' onClick={() => toggleSection('braco')}>
                    {openSection === 'braco' ? <> <span>Fechar</span> <IoMdRemoveCircleOutline /></> : <><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </>}
                </div>

                <div
                    className="cards"
                    style={{
                        maxHeight: openSection === 'braco' ? '800px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.braco?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className='icone-card'/>
                            <h3>{item.titulo}</h3>
                            <div className='botao-ver-detalhes'>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}}>Ver Detalhes</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-opcao box-shadow">
                <div className="container-opcao-item">
                    <p>Pernas</p>
                    {openSection === 'perna' ? "" : <Image src={imgPernas} alt='Icone das Pernas' className='icone'/>}
                </div>
                <div className='botao background-rosa-claro' onClick={() => toggleSection('perna')}>
                    {openSection === 'perna' ? <> <span>Fechar</span> <IoMdRemoveCircleOutline /></> : <><span>Abrir</span> <PlusCircle size={24} color="#FFFFFF" /> </>}
                </div>

                <div
                    className="cards"
                    style={{
                        maxHeight: openSection === 'perna' ? '800px' : '0px',
                        transition: `max-height ${animationDuration}ms ease`,
                        overflow: 'hidden',
                    }}
                >
                    {dados.perna?.map((item: any, idx: number) => (
                        <div className='sessao-card' key={idx}>
                            <Image src={item.imagem} alt={item.titulo} className='icone-card'/>
                            <h3>{item.titulo}</h3>
                            <div className='botao-ver-detalhes'>
                                <button onClick={() => {setVerDetalhes(true); setSelecionado(item.titulo); setSelecionadoBoolean(true);}}>Ver Detalhes</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Link href={"#linkWhatsapp"} className={"sem-line background-rosa-escuro txt-white"}>
            <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={"icone"}/>
              Agende agora
            </Link>
        </div>
    )
} 