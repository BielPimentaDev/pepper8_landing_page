import React, { useState } from "react";
import banner from "../assets/banner_img.png";
import { FaReact, FaNodeJs, FaPython, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { python: <FaPython size={70} opacity={0.5} /> },
  { nodeJs: <FaNodeJs size={70} opacity={0.5} /> },
  { figma: <FaFigma size={70} opacity={0.5} /> },
  { react: <FaReact size={70} opacity={0.5} /> },
];

export default function Home({ homeRef }) {
  return (
    <div className="flex flex-col gap-32 mb-16 p-4">
      <div
        ref={homeRef}
        className="flex flex-col justify-between h-[60vh]  sm:pt-24 mt-32 sm:mt-8 "
      >
        <section className="flex mt-[30px] flex-col-reverse lg:flex-row sm:items-center">
          <div className="text-center sm:p-8  ">
            <h2 className="font-bold text-3xl font-mont uppercase  sm:text-5xl">
As melhores soluções techs estão aqui.
            </h2>
            <p className="text-graylight mt-4 font-light text-xl">
            Desenvolvendo tecnologias para<b className="font-extrabold"> profissionalizar</b>, <b className="font-extrabold">
            gerenciar  </b>e  <b className="font-extrabold">
            simplificar 
                </b>{" "}
                seus negócios
            </p>
            <button className="bg-purple p-4 rounded-lg mt-16 font-mont font-semibold  ">
              ENTRAR EM CONTATO
            </button>
          </div>
          <img
            src={banner}
            alt="banner"
            className=" lg:block lg:w-[40%] h-[90%] sm:h-[100%] sm:w-[40%]  w-[90%] "
          />
        </section>
      </div>

      <div className="sm:my-0 my-16">
        <h2 className="text-center font-mont font-bold sm:text-4xl s:w-[700px] text-2xl uppercase  mx-auto ">
        NÓS CRIAMOS COM O QUE HÁ DE {" "}
          <b className="text-purple font-bold">MELHOR</b> no mercado
        </h2>
        <p className="text-center text-gray-500 mb-16 mt-2 text-lg w-[80%] mx-auto">
       
        </p>
        <ul className="flex justify-around sm:w-[40%] sm:mx-auto ">
          {skills.map((skill) => {
            return (
              <div data-aos="fade-right" className="">
                {Object.values(skill)}
                <p className="capitalize text-center mt-8">
                  {Object.keys(skill)}
                </p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
