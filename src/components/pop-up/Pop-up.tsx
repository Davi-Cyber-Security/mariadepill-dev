"use client";
import {useState} from "react";
import Image from "next/image";
import { IoRemoveCircleOutline } from "react-icons/io5";
import IconeWhatsapp from '../../../public/icone-whatsapp.png';
import Link from "next/link";
import style from './estilos-pop-up.module.css';

export default function PopUp() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return null;
    }
    return (
        <div className={isOpen ? "container-pop-up" : 'container-pop-up hidden'}>
            <h2 className="txt-white titulo-upperCase">A melhor depilação do brasil</h2>
            <div className="pop-up-content background-white">
                <div className="background-rosa-escuro" onClick={() => setIsOpen(false)}>
                    <span className="txt-white">Fechar</span>
                    <IoRemoveCircleOutline />
                </div>
                <h3 className="titulo-txt-rosa">Agende o seu horário agora!</h3>

                <Link href={"#linkWhatsapp"} className={"sem-line background-rosa-escuro txt-white"}>
                    <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={"icone"}/>
                        Fale Conosco
                </Link>
            </div>
            <p className="paragrafo-white-bold">Atendimento exclusivo para depilação feminina.</p>
        </div>
    )
}