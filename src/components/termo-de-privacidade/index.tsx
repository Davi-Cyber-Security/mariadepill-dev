import styles from '../styles/termo-de-privacidade/privacidade.module.css'; 
import Link from 'next/link';

export default function Privacidade(){
    return (
        <div className={styles.containerPrivacidade}>
            <div className={styles.containerCabecalho}>
            <h1 className={styles.titulo}>Termo de Privacidade</h1>
            <h3 className={styles.subtitulo}>Última atualização: 16/02/2026</h3>
            <p>Este site valoriza a sua privacidade e está comprometido com a proteção e tratamento responsável dos dados coletados.</p>
            </div>

            <div className={styles.containerConteudo}>
                <p>Coletamos informações básicas de acesso, como endereço IP, localização aproximada (cidade, estado e país), data e horário de acesso, além da quantidade de visitas realizadas. Esses dados são utilizados exclusivamente para fins estatísticos, análise de desempenho e melhoria contínua da experiência do usuário.</p>

                <span><strong>As informações coletadas: </strong></span>
                <ul className={styles.lista}>
                    <li>Não são utilizadas para identificação pessoal direta</li>
                    <li>Não são vendidas, compartilhadas ou comercializadas</li>
                    <li>Não são utilizadas para fins de marketing ou publicidade</li>
                </ul>
                <p>Os dados armazenados são protegidos por medidas técnicas e administrativas adequadas, visando evitar acessos não autorizados, vazamentos ou uso indevido.</p>
                <p>O site não realiza rastreamento comportamental avançado nem coleta dados sensíveis. A coleta tem como finalidade exclusiva compreender o volume de acessos e melhorar a estabilidade e performance da plataforma.</p>
                <p>Caso o usuário deseje obter mais informações sobre os dados coletados, poderá entrar em contato via e-mail: <strong><a href="mailto:trespontosengineer@gmail.com">trespontosengineer@gmail.com</a></strong></p>
            </div>

            <h4>Base legal</h4>
<p>
A coleta dos dados descritos nesta política é realizada com base no legítimo interesse, conforme previsto na Lei Geral de Proteção de Dados (Lei nº 13.709/2018), visando garantir a melhoria da experiência do usuário e a segurança da plataforma.
</p>

        <Link href="/" className={styles.botaoVoltar}>Voltar</Link>
        </div>
    )
}