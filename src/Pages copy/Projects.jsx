import React, { useContext } from "react";

import tumb from "../assets/bank_thumb.png";
import bank from "../assets/bank_thumb.png";
import feudalz from "../assets/feudalz_thumb.png";
import auctions from "../assets/auctions_thumb.png";
import jobjobs from "../assets/jobjobs_thumb.png";
import CardProject from "../common/CardProject";

export default function Projects({ projectRef }) {
  const projects = [
    {
      title: "Yasbank",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: bank, alt: "imagem" },
      link: 'http://yasbank.com.br/',
      description:"Um banco virtual, com transações monetárias seguras e em tempo real",
    },
    {
      title: "Feudalz",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: feudalz, alt: "imagem" },
      link: 'https://feudalz.io/',
      description:
      "Um jogo NFT que usa blockchain e as mais recentes tecnologias do mercado.",
    },
    {
      title: "Crawler de leilões",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: auctions, alt: "imagem" },
      link: 'https://botdeleiloes.netlify.app/',
      description:
      "Este aplicativo varre os maiores sites de leilões do Brasil e retorna as informações mais relevantes sobre cada leilão.",
    },
    {
      title: "Crawler de leilões",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: jobjobs, alt: "imagem" },
      link: 'https://jobyjobs.vercel.app/',
      description:"Um aplicativo que encontra vagas nos maiores sites do Brasil.",
    },
  ];

  return (
    <>
      <div ref={projectRef}>
        <h2 className="text-center font-mont font-bold text-4xl sm:text-5xl">
          PROJETOS
        </h2>
        <p className="text-center text-gray-500 mb-16 mt-2 text-lg">
        
Confira abaixo os principais projetos que produzimos!
        </p>
        <div className="flex flex-wrap gap-12 ">
          {projects.map((project, i) => {
            return <CardProject data={project} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}
