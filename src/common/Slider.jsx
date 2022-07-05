import React, { useEffect, useState } from "react";
import eu from "../assets/eu.jpg";
import figmaLogo from "../assets/FigmaLogo.svg";
import reactIcon from "../assets/ReactIcon.svg.png";
import tailwindLogo from "../assets/TailwindLogo.svg.png";
import pythonLogo from "../assets/pythonLogo.jpg";
import jsLogo from "../assets/jsLogo.png";
import databaseLogo from "../assets/databaseLogo.jpg";
import nodeLogo from "../assets/nodeLogo.png";
import { CaretLeft, CaretRight } from "phosphor-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          <div>
            <img src={eu} className=" w-32 h-32 p-0 rounded-full  " />
          </div>
          <button onClick={next}>
            <CaretRight size={32} weight="bold" />
          </button>
        </section>

        <div className=" m-auto flex flex-col gap-4 mt-8 w-[50%] min-w-[200px] sm:text-xl">
          <h4>{sliderArray[sliderCount].name}</h4>
          <p className="text-graylight ">{sliderArray[sliderCount].position}</p>
          <span className="">{sliderArray[sliderCount].about}</span>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-8">
        <FaLinkedin size={40} color="#8C7DEC" opacity={0.8} />
        <FaGithub size={40} color="#8C7DEC" opacity={0.8} />
      </div>
    </>
  );
}
