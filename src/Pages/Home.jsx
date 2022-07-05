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
    <div className="flex flex-col gap-32">
      <div
        ref={homeRef}
        className="flex flex-col justify-between h-[75vh] sm:pt-24 mt-16 sm:mt-0 sm:px-16 "
      >
        <section className="flex mt-[30px] flex-col-reverse sm:flex-row sm:items-center">
          <div className="text-center p-8  ">
            <h2 className="font-bold text-3xl font-mont  sm:text-4xl">
              ESSE É O TÍTULO DA LANDING PAGE
            </h2>
            <p className="text-graylight mt-4 font-light">
              Lorem ipsum dolor sit{" "}
              <b className="font-extrabold">amet consectetur adipisicing</b>{" "}
              elit. Tempora neque rerum quae perspiciatis velit.
            </p>
            <button className="bg-purple p-4 rounded-lg mt-16 font-mont ">
              Entrar em contato
            </button>
          </div>
          <img src={banner} className=" lg:block lg:w-[60%] h-[90%]  w-[80%]" />
        </section>
      </div>

      <div className="sm:my-12">
        <h2 className="text-center font-mont font-bold sm:text-5xl s:w-[700px] text-3xl  mx-auto mt-16">
          CRIAMOS COM O QUE HÁ DE{" "}
          <b className="text-purple font-bold">MELHOR</b> NO MERCADO
        </h2>
        <p className="text-center text-gray-500 mb-16 mt-2 text-lg"></p>
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
