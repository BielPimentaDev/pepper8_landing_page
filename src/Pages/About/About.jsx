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
        Who is Pepper8 ?
      </h2>
      <p className="text-center text-white mb-8 mt-2 text-lg font-mont w-[70%] mx-auto">
      A company focused on creating digital products, from scratch to scalable solutions for your business autonomy. Safely, quickly and efficiently. With experts in  <b className="text-purple font-extrabold">automation </b>, <b className="text-purple font-extrabold"> web</b> and<b className="text-purple font-extrabold"> mobile</b> development, we offer various services that seek ease and simplicity combined with technology and communication throughout the process. 
      </p>
     </div>
  );
}
