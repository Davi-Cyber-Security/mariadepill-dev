"use client";
import Link from "next/link";
import styles from '../styles/Horario/horario.module.css';

export default function Horarios(){
    return (
        <div className={`${styles.containerHorarios}`}>
            <h2 className={`${styles.titulo} titulo-txt-rosa`}>HORÁRIOS DE ATENDIMENTO</h2>

            <div className={`${styles.cardHorarios}`}>
                <div className={`${styles.diaSemana}`}>
                    <p>Segunda a Sexta</p>
                    <p>Sábado</p>
                    <p>Domingo</p>
                </div>
                <div className={`${styles.horarioFuncionamento}`}>
                    <p>11 às 20h</p>
                    <p>11 às 20h</p>
                    <p>Fechado</p>
                </div>
            </div>

            <Link href={"#link-contato"} className={`${styles.botaoAgendar} background-rosa-claro txt-white`}>
                Quero Agendar
            </Link>
        </div>
    )
}