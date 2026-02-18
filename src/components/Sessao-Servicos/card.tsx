"use client";
import { useState } from 'react';
import dados from '../Sessao-Servicos/dados';
import Image from 'next/image';

type Categoria = keyof typeof dados;

export default function CardServicos() {
    const [detalhe, setDetalhe] = useState<Categoria | null>(null);

    function handleVerDetalhes(categoria: Categoria) {
        setDetalhe(categoria);
        return detalhe;
    }

    return (
        <div className='container-box'>
            {/* TODO: implementar listagem de serviços */}
        </div>
    )
}