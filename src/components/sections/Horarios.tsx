"use client";
import Link from "next/link";
import styles from '../styles/Horario/horario.module.css';
import { useTheme } from "@/src/contexts/ThemeContext";
export default function Horarios(){
    const { isRoxoTheme } = useTheme();
    return (
        <div className={`${styles.containerHorarios}`}>
            <h2 className={`${styles.titulo} titulo-txt-rosa`} style={isRoxoTheme ? { color: "#463E70" } : undefined}>HORÁRIOS DE ATENDIMENTO</h2>

            <div className={`${styles.cardHorarios}`} style={isRoxoTheme ? { boxShadow: "0px 6px 10px #463E70" } : undefined}>
                <div className={`${styles.diaSemana}`} style={isRoxoTheme ? { color: "#463E70" } : undefined}>
                    <p>Segunda a Sexta</p>
                    <p>Sábado</p>
                    <p>Domingo</p>
                </div>
                <div className={`${styles.horarioFuncionamento}`} style={isRoxoTheme ? { color: "#463E70" } : undefined}>
                    <p>11 às 20h</p>
                    <p>11 às 20h</p>
                    <p>Fechado</p>
                </div>
            </div>

            <Link href={"https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%EF%BF%BD%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20minha%20depila%C3%A7%C3%A3o.%0APoderia%20me%20informar%20a%20disponibilidade?%0A%0A%C3%81reas%20desejadas:%20%5Bdescrever%20aqui%5D"} className={`${styles.botaoAgendar} background-rosa-claro txt-white`} style={isRoxoTheme ? { backgroundColor: "#463E70", color: "#FFFFFF" } : undefined}>
                Quero Agendar
            </Link>
        </div>
    )
}