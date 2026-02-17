"use client";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Style-About/about.module.css';
import segundaImagem from '../../../public/MariaDepill/segundaImagem.png';
import imagemEscura from '../../../public/ImagemCorEscuro.png';
import { useTheme } from "@/src/contexts/ThemeContext";

export default function  About(){
    const { isRoxoTheme } = useTheme();
    return (
        <div className={styles.container}> 
            <div className={styles.containerAbout}>
                <h2 className={`${styles.tituloAbout} text-4xl titulo-txt-rosa`} style={isRoxoTheme ? { color: "#463E70" } : undefined} >Resultados duradouros e uma experiência inesquecivel</h2>
                <p className={`${styles.txtRosa} txt-rosa`} style={isRoxoTheme ? { color: "#6F66AD" } : undefined}>Comprometimento com a excelência e um atendimento de qualidade superior.</p>
                <a href={"https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostei%20muito%20do%20seu%20trabalho.%0AGostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20antes%20de%20agendar.%20Voc%C3%AA%20pode%20me%20orientar?"} className={`${styles.botaoWhats} background-rosa-claro txt-white btn`} style={isRoxoTheme ? { backgroundColor: "#463E70", color: "#FFFFFF" } : undefined}>
                    Mande uma mensagem
                </a>
            </div>

            <div className={styles.imagemContainer}>
                <Image src={isRoxoTheme ? imagemEscura : segundaImagem} alt="Imagem da cera de depilação" className={styles.imagem}/>
            </div>
        </div>
    )
}