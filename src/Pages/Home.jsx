import React from "react";
import banner from "../assets/banner_img.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between h-[90vh] sm:pt-24 mt-16 sm:mt-0 ">
        <section className="flex mt-[30px] flex-col-reverse ">
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
          <img
            src={banner}
            className=" lg:block lg:w-[60%] h-[90%] sm:h-[110%] w-[80%]"
          />
        </section>
      </div>
    </>
  );
}
