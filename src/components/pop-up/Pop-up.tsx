"use client";
import Image from "next/image";
import { IoRemoveCircleOutline } from "react-icons/io5";
import IconeWhatsapp from '../../../public/icone-whatsapp.png';
import Link from "next/link";
import style from './estilos-pop-up.module.css';
import { useTheme } from "@/src/contexts/ThemeContext";

interface PopUpProps {
    onClose: () => void;
}

export default function PopUp({ onClose }: PopUpProps) {
    const { isRoxoTheme } = useTheme();

    return (
        <div className={style.containerPopUp}>
            <h2 className={style.titulo}>A melhor depilação do brasil</h2>
            <div className={style.popUpContent}>
                <div className={style.botaoFechar} onClick={onClose}>
                    <span className={style.textoFechar}>Fechar</span>
                    <IoRemoveCircleOutline size={24} />
                </div>
                <h3 className={style.subTitulo}>Agende o seu horário agora!</h3>

                <Link href={"https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20minha%20depila%C3%A7%C3%A3o.%0APoderia%20me%20informar%20a%20disponibilidade?%0A%0A%C3%81reas%20desejadas:%20%5Bdescrever%20aqui%5D"} className={style.botaoFaleConosco}>
                    <Image src={IconeWhatsapp} alt="Icone do Whatsapp" className={style.icone}/>
                        Agendar agora
                </Link>
            </div>
            <p className={style.paragrafo}>Atendimento exclusivo para depilação feminina.</p>
        </div>
    )
}