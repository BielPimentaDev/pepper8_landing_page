import React, { useState } from "react";
import { History } from "./History";
import { Team } from "./Team";
import Tech from "./Tech";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About({ aboutRef }) {
  const [comp, setComp] = useState("equipe");

  const componentsList = {
    equipe: <Team />,
    tecnologias: <Tech />,
    historia: <History />,
  };

  return (
    <div className=" " ref={aboutRef}>
      <h2 className="text-center font-mont font-bold  text-3xl sm:text-5xl uppercase ">
        Quem é a Pepper8 ?
      </h2>
      <p className="text-center text-gray-500 mb-8 mt-2 text-lg">
        Conheça um pouco mais sobre a nossa marca.
      </p>
      <ul className="flex justify-center gap-8 mb-16 w-[60%] mx-auto text-2xl">
        {Object.keys(componentsList).map((current, i) => {
          return (
            <li
              className={
                comp === current
                  ? "cursor-pointer capitalize p-2 border-b-2 border-purple"
                  : "cursor-pointer capitalize p-2 text-graylight hover:text-white"
              }
              key={i}
              onClick={() => {
                setComp(current);
              }}
            >
              {current}
            </li>
          );
        })}
      </ul>
      <div className="w-[50%] mx-auto mb-16 h-[500px] ">
        {componentsList[comp]}
      </div>
    </div>
  );
}
