import { useState } from "react";
import "../Styles/Card.css";
import eu from '../assets/images/lau.jpg';
import whats from '../assets/images/whatsapp.png';
import linkedin from '../assets/images/linkedin.png';
import mail from '../assets/images/mail.png';
import cv from '../assets/images/curriculum-vitae.png';

export default function Card() {
    const [botaoAtivo, setBotaoAtivo] = useState(false);
    const [ulKey, setUlKey] = useState(0); // Adicione o estado para a chave única do <ul>

    const alternarBotao = () => {
        setBotaoAtivo(!botaoAtivo);
        setUlKey(ulKey + 1); // Atualize a chave única do <ul> para reiniciar
    };
    const content = [
        [
            "Engenheiro mecânico com 4 anos de experiência na área, com foco em liderança, gestão de pessoas e controle de KPIs. Também possui experiência em desenhos técnico mecânicos, controle de estoque e matérias de manutenção, planejamento de manutenção e orçamentos, inspeção e análise de causa de defeitos."
        ],
        [
            "Líder de Produção na Whirlpool Corporation (2019 - atualmente): Responsável por uma equipe de 50 funcionários, com foco na melhoria contínua dos processos e resultados da empresa. Já conseguiu reduzir o tempo de produção em 10%, aumentar a produtividade em 20% e reduzir o desperdício de materiais em 50%.",
            "Estagiário de Engenharia Mecânica na Arkema Coatex (março de 2022 - atualmente): Realização de desenhos técnico mecânicos (AutoCAD 2D), controle de estoque e matérias de manutenção, controle de KPIs e auxiliar de projetos.",
            "Estagiário de Engenharia Mecânica na RCP Papéis (janeiro de 2021 - agosto de 2021): Realização de desenhos técnico mecânicos (AutoCAD 2D/3D), controle de estoque e matérias de manutenção, planejamento de manutenção e orçamentos, inspeção e análise de causa de defeitos."
        ],
        [
            "Habilidades técnicas: AutoCAD 2D e 3D, Autodesk Inventor, gestão de projetos, gestão de pessoas, controle de KPIs, desenhos técnico mecânicos, controle de estoque e matérias de manutenção, planejamento de manutenção e orçamentos, inspeção e análise de causa de defeitos.",
            "Habilidades interpessoais: liderança, trabalho em equipe, comunicação, resolução de problemas, negociação."
        ],
        [
            "Ingressar na área de processos, utilizando minhas habilidades e conhecimentos para contribuir para a melhoria da eficiência e eficácia dos processos industriais."
        ]
    ];

    const [activeContentIndex, setActiveContentIndex] = useState(0);
    return (
        <ul id="concepts">
            <div className="concept">
                <div>
                </div>
                <div className="avatar-div">
                    <img className="avatar" src={eu} alt="Avatar Zucolo" />
                </div>
                <div className="icones-div">
                    <div className="icones-esq">
                        <a href="https://wa.me/5519998122868" target="_blank">
                            <img className="icones" src={whats} alt="WhatsApp Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/laudenir-paulino-b05b6b169/" target="_blank">
                            <img className="icones" src={linkedin} alt="Linkedin Icon" />
                        </a>
                    </div>
                    <div className="icones-dir">
                        <a href="mailto:laudenirpaulino@gmail.com" target="_blank">
                            <img className="icones" src={mail} alt="Mail Icon" />
                        </a>
                        <a href="https://drive.google.com/file/d/1U2AypKSz_FNsX6cV-unqWQLgR-Fl9nPc/view?usp=drive_link" target="_blank">
                            <img className="icones" src={cv} alt="Curriculum Icon" />
                        </a>
                    </div>
                </div>
                <div className="tabs">
                    <menu>
                        <button
                            className={activeContentIndex === 0 ? "active" : ""}
                            onClick={() => { setActiveContentIndex(0); alternarBotao(); }}
                        >
                            Resumo
                        </button>
                        <button id="xp"
                            className={activeContentIndex === 1 ? "active" : ""}
                            onClick={() => { setActiveContentIndex(1); alternarBotao(); }}
                        >
                            Experiência
                        </button>
                        <button
                            className={activeContentIndex === 2 ? "active" : ""}
                            onClick={() => { setActiveContentIndex(2); alternarBotao(); }}
                        >
                            Domínio
                        </button>
                        <button
                            className={activeContentIndex === 3 ? "active" : ""}
                            onClick={() => { setActiveContentIndex(3); alternarBotao(); }}
                        >
                            Objetivos
                        </button>
                    </menu>
                    <div className="tab-content">
                        <ul key={ulKey} id="content">
                            {content[activeContentIndex].map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </ul>
    )
}

