import React from "react";
import mobile_icon from "../assets/mobile_icon.png";
import desktop_icon from "../assets/desktop_icon.png";
import eterium from "../assets/eterium.png";
import bot from "../assets/bot.png";

export default function Products({ productRef }) {
  const products = {
    Automation: [
      "Serviços para automatizar tarefas repetidas e criar bots para raspagem de dados.",
      bot,
      { w: "176px", h: "140px" },
    ],
    Web: [
      "A forma mais comum e eficiente de criar ou impulsionar seus negócios, usando sites e aplicativos de software, você encontra aqui na Pepper 8.",
      desktop_icon,
      { w: "85px", h: "150px" },
    ],
    Mobile: [
      "Utilizando as mais novas tecnologias, criamos aplicativos mobile, híbridos ou nativos, para que suas ideias possam ser acessadas de qualquer lugar e a qualquer hora",
      mobile_icon,
      { w: "85px", h: "150px" },
    ],
    Blockchain: [
      "Realizamos o processo de registro de transações e rastreamento de ativos em uma rede corporativa.",
      eterium,
      { w: "176px", h: "140px" },
    ],
   
  };

  return (
    <>
      <div className="text-center">
        <h2
          ref={productRef}
          className="text-center font-mont font-bold sm:text-6xl text-5xl"
        >
          PRODUTOS
        </h2>
        <p className="text-center text-gray-500 mb-16 mt-2 text-lg">
        Confira os principais produtos que nós produzimos!
        </p>
        <div className="flex items-start content-center text-center flex-wrap justify-center gap-16 sm:flex-nowrap px-8">
          <>
            {Object.entries(products).map((product, i) => {
              return (
                <div data-aos="fade-up" key={i} className="w-[60%] z-0">
                  <img
                    style={{
                      widht: product[1][2].w,
                      height: product[1][2].h,
                      margin: "auto",
                    }}
                    src={product[1][1]}
                    alt={product[0]}
                  />
                  <h4 className="font-mont  my-4 text-purple text-xl font-bold ">
                    {product[0]}
                  </h4>
                  <p className=" text-graylight">{product[1][0]}</p>
                </div>
              );
            })}
          </>
        </div>

        <button className="my-32 block border-[0.5px] text-purple border-purple w-[350px] m-auto  p-2 text-xl">
          Conheça nossos produtos
        </button>
      </div>
    </>
  );
}
