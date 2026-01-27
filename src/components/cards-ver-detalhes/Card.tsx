"use client";
import { useState, useEffect } from "react";
import styles from './estilos/estilo.module.css';
import dados from './dados';
import IconeWhatsapp from '../../../public/icone-whatsapp.png';
import Image from "next/image";

export default function Card({info} : {info: string}) {
    const [dadosEncontrados, setDadosEncontrados] = useState<any>(null);

    useEffect(() => {
        if(!info) return;
        
        const buscarDados = () => {
            for(const categoria in dados) {
                const itens = dados[categoria];
                for(const subItem of itens){
                    if(Array.isArray(subItem)){
                        const ultimoItem = subItem[subItem.length - 1];
                        if(ultimoItem && ultimoItem.id === 5 && ultimoItem.descricao === info){
                            const tituloBlock = Array.isArray(subItem[0]) ? subItem[0][0] : subItem[0];
                            setDadosEncontrados({
                                titulo: tituloBlock?.titulo || '',
                                descricao: tituloBlock?.descricao || '',
                                itens: subItem.slice(1, -1),
                                link: ultimoItem.link || '',
                            });
                            return;
                        }
                    } 
                }
            }
        };
        buscarDados();
    }, [info]);

    if(!dadosEncontrados) return <div>Carregando...</div>;

    return (
        <div className="container-card">
            <h2 className={styles.titulo}>{dadosEncontrados?.titulo}</h2>
            <p>{dadosEncontrados.descricao}</p>
            <div className="card-containers titulo-txt">
                {dadosEncontrados.itens.map((item: any, index: number) => (
                    <div key={index}>
                        <p>{item.descricao}</p>
                    </div>
                ))}
            </div>
            <div className="botao">
                <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={"icone"}/>
                {dadosEncontrados.link && (
                    <a href={dadosEncontrados.link} target="_blank" rel="noopener noreferrer">
                        Quero agendar {dadosEncontrados.descricao}
                    </a>
                )}
            </div>
        </div>
    )
}