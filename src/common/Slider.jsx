import React, { useEffect, useState } from "react";

import figmaLogo from "../assets/FigmaLogo.svg";
import reactIcon from "../assets/ReactIcon.svg.png";
import tailwindLogo from "../assets/TailwindLogo.svg.png";
import pythonLogo from "../assets/pythonLogo.jpg";
import jsLogo from "../assets/jsLogo.png";
import databaseLogo from "../assets/databaseLogo.jpg";
import nodeLogo from "../assets/nodeLogo.png";
import { CaretLeft, CaretRight } from "phosphor-react";

export default function Slider() {
  const sliderArray = [
    {
      name: "Gabriel Pimenta",
      profilePic: "none",
      position: "Front-end developer",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,  dolorum sequi ab iste praesentium optio.",
      stacks: [figmaLogo, reactIcon, tailwindLogo],
    },
    {
      name: "Jhony Pimenta",
      profilePic: "none",
      position: "FullStack developer",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,  dolorum sequi ab iste praesentium optio.",
      stacks: [jsLogo, reactIcon, databaseLogo],
    },
    {
      name: "Guilherme Pimenta",
      profilePic: "none",
      position: "Back-end developer",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,  dolorum sequi ab iste praesentium optio.",
      stacks: [pythonLogo, databaseLogo, nodeLogo],
    },
  ];
  const [sliderCount, setSliderCount] = useState(0);

  const next = () => {
    sliderCount < sliderArray.length - 1 && setSliderCount(sliderCount + 1);
  };
  const prev = () => {
    sliderCount > 0 && setSliderCount(sliderCount - 1);
  };

  return (
    <>
      <div className=" text-center  ">
        <section className="flex justify-around  mx-auto">
          <button onClick={prev}>
            <CaretLeft size={32} weight="bold" />
          </button>
          <div className="bg-purple w-32 h-32 p-4 rounded-full  ">IMAGEM</div>
          <button onClick={next}>
            <CaretRight size={32} weight="bold" />
          </button>
        </section>

        <div className=" m-auto flex flex-col gap-4 mt-8 w-[50%] min-w-[200px]">
          <h4>{sliderArray[sliderCount].name}</h4>
          <p className="text-graylight ">{sliderArray[sliderCount].position}</p>
          <span className="">{sliderArray[sliderCount].about}</span>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {sliderArray[sliderCount].stacks.map((stack) => (
          <img className="w-[30px]" src={stack} />
        ))}
      </div>
    </>
  );
}
