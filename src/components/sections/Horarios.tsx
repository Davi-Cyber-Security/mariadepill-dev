"use client";
import Link from "next/link";

export default function Horarios(){
    return (
        <div>
            <h2 className="titulo-txt-rosa">HORÁRIOS DE ATENDIMENTO</h2>

            <div className="card-horarios">
                <div className="dia-semana">
                    <p>Segunda a Sexta</p>
                    <p>Sábado</p>
                    <p>Domingo</p>
                </div>
                <div className="horario-funcionamento">
                    <p>11 às 20h</p>
                    <p>11 às 20h</p>
                    <p>Fechado</p>
                </div>
            </div>

            <Link href={"#link-contato"} className="background-rosa-claro txt-white">
                Quero Agendar
            </Link>
        </div>
    )
}