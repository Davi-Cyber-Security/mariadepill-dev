"use client";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Style-About/about.module.css';
import segundaImagem from '../../../public/MariaDepill/segundaImagem.png';

export default function  About(){
    return (
        <div className={styles.container}> 
            <div className={styles.containerAbout}>
                <h2 className="text-4xl titulo-txt-rosa">Resultados duradouros e uma experiência inesquecivel</h2>
                <p className="txt-rosa">Comprometimento com a excelência e um atendimento de qualidade superior.</p>
                <a href={"#linkwhatsapp"} className={`${styles.botaoWhats} background-rosa-claro txt-white btn`}>
                    Mande uma mensagem
                </a>
            </div>

            <div className={styles.imagemContainer}>
                <div className={styles.blobRoxo}></div>
                <div className= {styles.blobRosaClaro}></div>
                <Image src={segundaImagem} alt="Imagem da cera de depilação" className={styles.imagem}/>
            </div>
        </div>
    )
}