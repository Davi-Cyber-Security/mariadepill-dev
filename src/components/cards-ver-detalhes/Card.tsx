"use client";
import { useState, useEffect } from "react";
import styles from './estilos/estilo.module.css';
import dados from './dados';
import IconeWhatsapp from '../../../public/icone-whatsapp.webp';
import Image from "next/image";

export default function Card({info} : {info: string}) {
    const [dadosEncontrados, setDadosEncontrados] = useState<any>(null);
    const [loading, setLoading] = useState(true);

        useEffect(() => {
        if (!info) {
            setLoading(false);
            return;
        }

        setLoading(true);
        
        const buscarDados = () => {
            const categorias = Object.keys(dados) as Array<keyof typeof dados>;

            for (const categoria of categorias) {
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
        <div className="container-card">
            <h2 className={styles.titulo}>{dadosEncontrados?.titulo}</h2>
            <p>{dadosEncontrados.descricao}</p>
            <div className="card-containers titulo-txt">
                {dadosEncontrados.beneficios.map((item: any, index: number) => (
                    <div key={index}>
                        <p>{item.descricao}</p>
                    </div>
                ))}
            </div>
            <div className="botao">
                <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={"icone"}/>
                {dadosEncontrados.link && (
                    <a href={dadosEncontrados.link} target="_blank" rel="noopener noreferrer">
                        Quero agendar {dadosEncontrados.titulo}
                    </a>
                )}
            </div>
        </div>
    )
}