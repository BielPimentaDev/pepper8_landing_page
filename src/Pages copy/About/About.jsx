import React, { useState } from "react";
import { History } from "./History";
import { Team } from "./Team";
import Tech from "./Tech";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About({ aboutRef }) {
  const [comp, setComp] = useState("equipe");

  
  return (
    <div className=" " ref={aboutRef}>
      <h2 className="text-center font-mont font-bold  text-2xl sm:text-5xl uppercase ">
        
Quem é Pepper8?
      </h2>
      <p className="text-center text-white mb-8 mt-2 text-lg font-mont w-[70%] mx-auto">
      Uma empresa focada na criação de produtos digitais, do zero a soluções escaláveis, ​​para a autonomia do seu negócio. Com segurança, rapidez e eficiência. Contando com especialistas em <b className="text-purple font-extrabold">automação </b>, <b className="text-purple font-extrabold">desenvolvimento web </b>e <b className="text-purple font -extrabold">desenvolvimento móvel</b>, oferecemos diversos serviços que buscam facilidade e simplicidade aliadas à tecnologia e comunicação em todo o processo.
      </p>
     </div>
  );
}
