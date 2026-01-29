"use client";
import Image from "next/image";
import imagem from "@/public/Imagem.svg"
import { useState, useEffect } from "react";
import amandita from "@/public/Ellipse 6.png"
import blob from "@/public/blob(2) 1.png"

export default function Testimonials(){
    function carrosselDepoimentos() {}
    return (
        <section className="w-full flex items-center justify-center bg-[linear-gradient(270deg,#FFFFFF_36%,#9D8BFF_86%)]">
            <div className="flex w-full max-w-8/12 bg-blue-600">
                <div>
                    <div className="p-10 ">
                        <Image src={amandita} alt="Amandita"/>
                        <span>
                            <h1>Amandita</h1>
                            <h2>Esteticista</h2>
                        </span>
                    </div>
                    <span>
                        “Super confortavel o ambiente,<br/>profissionais super capacitadas”
                    </span>
                </div>
            </div>
            <Image src={blob} alt=""/>
        </section>
    )
}