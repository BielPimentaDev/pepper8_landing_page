import React from "react";
import mobile_icon from "../assets/mobile_icon.png";
import desktop_icon from "../assets/desktop_icon.png";

export default function Products({ productRef }) {
  const products = {
    Mobile: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda facilis repudiandae, accusantium cupiditate.",
      mobile_icon,
      { w: "85px", h: "150px" },
    ],
    Mobiles: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda facilis repudiandae, accusantium cupiditate.",
      mobile_icon,
      { w: "85px", h: "150px" },
    ],
    Desktop: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. .",
      desktop_icon,
      { w: "176px", h: "140px" },
    ],
    Desktops: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda facilis repudiandae, dignissimos illum iste harum desktop",
      desktop_icon,
      { w: "176px", h: "140px" },
    ],
  };

  return (
    <>
      <div ref={productRef} className="text-center">
        <h2 className="text-center font-mont font-bold sm:text-6xl text-5xl">
          PRODUTOS
        </h2>
        <p className="text-center text-gray-500 mb-16 mt-2 text-lg">
          Confira abaixo os principais produtos que nós produzimos!
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
