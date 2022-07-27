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
      description:"A virtual bank, with secure and real-time monetary transactions",
    },
    {
      title: "Feudalz",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: feudalz, alt: "imagem" },
      link: 'https://feudalz.io/',
      description:
        "A NFT game that uses blockchain and the latest technologies in the area.",
    },
    {
      title: "Crawler de leilões",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: auctions, alt: "imagem" },
      link: 'https://botdeleiloes.netlify.app/',
      description:
        "This application scans the largest auction sites in Brazil and returns the most relevant information about each auction.",
    },
    {
      title: "Crawler de leilões",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: jobjobs, alt: "imagem" },
      link: 'https://jobyjobs.vercel.app/',
      description:
        "An application that finds job openings on the biggest sites in Brazil.",
    },
  ];

  return (
    <>
      <div ref={projectRef}>
        <h2 className="text-center font-mont font-bold text-4xl sm:text-5xl">
          PROJECTS
        </h2>
        <p className="text-center text-gray-500 mb-16 mt-2 text-lg">
        Check out below the main projects we produce!
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
