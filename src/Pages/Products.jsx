import React from "react";
import mobile_icon from "../assets/mobile_icon.png";
import desktop_icon from "../assets/desktop_icon.png";
import eterium from "../assets/eterium.png";
import bot from "../assets/bot.png";

export default function Products({ productRef }) {
  const products = {
    Automation: [
      "Services for automate repeated task and create bots for web scraping.",
      bot,
      { w: "176px", h: "140px" },
    ],
    Web: [
      "The most common and efficient way to create or impulse your busines, using websites and software applications, you find here in Pepper 8.",
      desktop_icon,
      { w: "85px", h: "150px" },
    ],
    Mobile: [
      "Using the newer technologies, we create mobile apps, hybrids or native, for your ideas can be accessed by anywhere and anytime",
      mobile_icon,
      { w: "85px", h: "150px" },
    ],
    Blockchain: [
      "We make the process of registry transactions and tracking assets in an enterprise network.",
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
          PRODUCTS
        </h2>
        <p className="text-center text-gray-500 mb-16 mt-2 text-lg">
        Check here our main products that we make!
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
          Meet our products
        </button>
      </div>
    </>
  );
}
