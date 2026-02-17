"use client";
import { useState, useEffect } from "react";
import styles from './estilos/estilo.module.css';
import dados from './dados';
import IconeWhatsapp from '../../../public/icone-whatsapp.png';
import iconeFechar from '../../../public/botaoFechar.png';
import Image from "next/image";
import { useTheme } from "@/src/contexts/ThemeContext";

interface CardProps {
    info: string;
    onClose: () => void;
}

export default function Card({ info, onClose }: CardProps) {
    const { isRoxoTheme } = useTheme();
    const [dadosEncontrados, setDadosEncontrados] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!info) {
            setLoading(false);
            return;
        }

        setLoading(true);
        
        const buscarDados = () => {
            
            for (const categoria in dados) {
                const tratamentos = dados[categoria];

                const tratamento = tratamentos.find(
                    (t: any) => t.name === info
                );

                if (tratamento) {
                    setDadosEncontrados({
                        titulo: tratamento.header.titulo,
                        descricao: tratamento.header.descricao,
                        beneficios: tratamento.benefits,
                        link: tratamento.link,
                    });
                    setLoading(false);
                    return;
                }
            }

            
            setLoading(false);
        };

        buscarDados();
    }, [info]);

    if (loading) return <div>Carregando...</div>;
    if (!dadosEncontrados) return <div>Tratamento não encontrado.</div>;

    
    return (
        <div className={styles.containerCard}>
            <button className={styles.botaofechar} onClick={onClose}><Image src={iconeFechar} alt="Icone de Fechar" className={styles.botaofechar}/></button>
            <h2 className={styles.titulo} style={isRoxoTheme ? { color: "#463E70" } : undefined}>{dadosEncontrados?.titulo}</h2>
            <p className={styles.descricao} style={isRoxoTheme ? { color: "#706B98" } : undefined}>{dadosEncontrados.descricao}</p>
            <div className={`${styles.cardContainers} titulo-txt`} style={isRoxoTheme ? { color: "#463E70" } : undefined}>
                {dadosEncontrados.beneficios.map((item: any, index: number) => (
                    <div className={styles.beneficio} key={index}>
                        <p>{item.descricao}</p>
                    </div>
                ))}
            </div>
            <div className={`${styles.botao}`} style={isRoxoTheme ? { backgroundColor: "#463E70" } : undefined}>
                <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={`${styles.iconeWhatsapp}`}/>
                {dadosEncontrados.link && (
                    <a href={dadosEncontrados.link} target="_blank" rel="noopener noreferrer">
                        Quero agendar {dadosEncontrados.titulo}
                    </a>
                )}
            </div>
        </div>
    )
}