// Cabeça
import imgBuco from '../../../public/sessao-servicos/Cabeca/Buco.jpg';
import imgRosto from '../../../public/sessao-servicos/Cabeca/Rosto.avif';
import imgNariz from '../../../public/sessao-servicos/Cabeca/Nariz.png';

// Braços
import imgAxilas from '../../../public/sessao-servicos/Bracos/Axialas.webp';
import imgBraco from '../../../public/sessao-servicos/Bracos/Braco.jpg';
import imgAnteBraco from '../../../public/sessao-servicos/Bracos/AnteBraco.png';
import imgDedinhoDaMao from '../../../public/sessao-servicos/Bracos/DedinhoDaMao.png';
import imgOmbroAoDedinhoDaMao from '../../../public/sessao-servicos/Bracos/OmbroAoDedinhoDaMao.png';

// Tronco
import imgOmbro from '../../../public/sessao-servicos/Tronco/Ombro.png';
import imgCostas from '../../../public/sessao-servicos/Tronco/Costas.jpg';
import imgAbdomen from '../../../public/sessao-servicos/Tronco/Abdomen.jpg';

// Quadril
import imgGluteos from '../../../public/sessao-servicos/Quadril/Gluteos.avif';
import imgVirilha from '../../../public/sessao-servicos/Quadril/Virilha.avif';

// Pernas
import imgMeiaPerna from '../../../public/sessao-servicos/Pernas/MeiaPerna.avif';
import imgPernaToda from '../../../public/sessao-servicos/Pernas/PernaToda.avif';



const dados = {
    cabeca: [
        {
            imagem: imgBuco,
            titulo: "Buço",
        },
        {
            imagem: imgRosto,
            titulo: "Rosto",
        },
        {
            imagem: imgNariz, 
            titulo: "Nariz",
        },
    ],
    braco: [
        {
            imagem: imgAxilas,
            titulo: "Axilas",
        },
        {
            imagem: imgBraco,
            titulo: "Braço",
        },
        {
            imagem: imgAnteBraco,
            titulo: "Antebraço",
        },
        {
            imagem: imgDedinhoDaMao,
            titulo: "Dedinho da Mão",
        },
        {
            imagem: imgOmbroAoDedinhoDaMao,
            titulo: "Ombro ao Dedinho da Mão",
        },
    ],
    tronco: [
        {
            imagem: imgOmbro,
            titulo: "Ombro",
        },
        {
            imagem: imgCostas,
            titulo: "Costas",
        },
        {
            imagem: imgAbdomen,
            titulo: "Abdômen",
        },
    ],
    quadril: [
        {
            imagem: imgVirilha,
            titulo: "Virilha",
        },
        {
            imagem: imgGluteos,
            titulo: "Glúteos",
        },
    ],
    perna: [
        {
            imagem: imgMeiaPerna,
            titulo: "Meia Perna",
        },
        {
            imagem: imgPernaToda,
            titulo: "Perna Toda",
        },
    ],
}

export default dados;