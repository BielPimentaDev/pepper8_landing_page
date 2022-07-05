import React, { useContext } from "react";

import tumb from "../assets/criarte_tumb.png";
import CardProject from "../common/CardProject";

export default function Projects({ projectRef }) {
  const projects = [
    {
      title: "Software de gerenciamento",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: tumb, alt: "imagem" },
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, error reiciendis, eum eaque laborum pariatur repellat fuga fugiat debitis blanditiis voluptatem necessitatibus rem praesentium adipisci aperiam deserunt ducimus accusamus maxime",
    },
    {
      title: "Software de gerenciamento",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: tumb, alt: "imagem" },
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, error reiciendis, eum eaque laborum pariatur repellat fuga fugiat debitis blanditiis voluptatem necessitatibus rem praesentium adipisci aperiam deserunt ducimus accusamus maxime",
    },
    {
      title: "Software de gerenciamento",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: tumb, alt: "imagem" },
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, error reiciendis, eum eaque laborum pariatur repellat fuga fugiat debitis blanditiis voluptatem necessitatibus rem praesentium adipisci aperiam deserunt ducimus accusamus maxime",
    },
    {
      title: "Software de gerenciamento",
      name: "Criarte",
      techs: "React TailWind MUI",
      tumb: { img: tumb, alt: "imagem" },
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, error reiciendis, eum eaque laborum pariatur repellat fuga fugiat debitis blanditiis voluptatem necessitatibus rem praesentium adipisci aperiam deserunt ducimus accusamus maxime",
    },
  ];

  return (
    <>
      <div ref={projectRef}>
        <h2 className="text-center font-mont font-bold text-4xl">PROJETOS</h2>
        <p className="text-center text-gray-500 mb-16 mt-2 text-lg">
          Confira abaixo os principais projetos que nós produzimos!
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
