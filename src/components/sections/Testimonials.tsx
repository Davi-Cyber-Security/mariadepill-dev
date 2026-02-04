"use client";
import Image from "next/image";
import styles from '../styles/Testimonials/Testimonials.module.css';
import Imagem3 from '../../../public/imagem3.png';
import BlobMenor from '../../../public/BlocoImg/blob.svg';
import BlobMariaDepill from '../../../public/BlocoImg/blobMariaDepill1.png';
import { useState, useEffect } from "react";

export default function Testimonials(){
    function carrosselDepoimentos() {}
    return (
        <div className={styles.container}>
            <h2 className={`${styles.tituloGoolge} titulo-txt-rosa`}>Avaliações do google</h2>
            <h3 className={`${styles.txtRosa} txt-roxo-claro`}>veja o que nossos clientes dizem sobre nós</h3>

            <div className={styles.wrapper}>

                <div className={styles['card-depoimentos']}>
                    <Image className={styles.blobMenor} src={BlobMenor} alt="Blob menor"/>
                    <div className={styles['depoimento-item']}>
                        <div className={styles.removeContainer}></div>
                        {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
                        <script src="https://elfsightcdn.com/platform.js" async></script>
                        <div className={`elfsight-app-fa5b312d-c040-4342-86ed-8676356dc967 ${styles.containerFeedback}`} data-elfsight-app-lazy>
                        </div>
                    </div>
                </div>
                <div className={styles['paleta-decoration']}>
                        <Image className={styles.blobMaior} src={BlobMariaDepill} alt="Blob maior"/>
                </div>
            </div>
        </div>
    )
}