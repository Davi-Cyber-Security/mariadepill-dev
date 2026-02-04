"use client";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Style-About/about.module.css';
import segundaImagem from '../../../public/MariaDepill/segundaImagem.png';

export default function  About(){
    return (
        <div className={styles.container}> 
            <div className={styles.containerAbout}>
                <h2 className={`${styles.tituloAbout} text-4xl titulo-txt-rosa`}>Resultados duradouros e uma experiência inesquecivel</h2>
                <p className={`${styles.txtRosa} txt-rosa`}>Comprometimento com a excelência e um atendimento de qualidade superior.</p>
                <a href={"#linkwhatsapp"} className={`${styles.botaoWhats} background-rosa-claro txt-white btn`}>
                    Mande uma mensagem
                </a>
            </div>

            <div className={styles.imagemContainer}>
                <Image src={segundaImagem} alt="Imagem da cera de depilação" className={styles.imagem}/>
            </div>
        </div>
    )
}