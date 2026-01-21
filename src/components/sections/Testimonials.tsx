"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials(){
    function carrosselDepoimentos() {}
    return (
        <div className="container">
            <h2 className="titulo-txt-rosa">Depoimentos</h2>
            <h3 className="txt-roxo-claro">veja o que nossos clientes dizem sobre nós</h3>

            <div className="">
                <div className="meia-lua-flutante"></div>

                <div className="card-depoimentos">
                    <div className="depoimento-item"></div>
                    
                    <div className="paleta-decoration">
                        <div className="paleta-decoration-rotation-190deg">
                            <Image src={""} alt="Maria Depill" className="imagem-mariadepill"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}