import { List, X } from "phosphor-react";
import React, { useState } from "react";
import banner from "../assets/banner_img.png";

export default function Header({ aboutRef, projectRef, homeRef, productRef }) {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="z-10 flex justify-between items-center p-4 fixed top-0 w-full max-w-[1400px] bg-black">
        <h1>PEPPER 8</h1>
        <nav>
          <ul className="hidden sm:flex justify-around w-[300px] ">
            <li
              onClick={() => handleClick(productRef)}
              className="text-graylight hover:text-white border-b-2 hover:border-purple border-black cursor-pointer"
            >
              Produtos
            </li>
            <li
              onClick={() => handleClick(aboutRef)}
              className="text-graylight hover:text-white border-b-2 hover:border-purple border-black cursor-pointer"
            >
              Sobre
            </li>
            <li
              onClick={() => handleClick(projectRef)}
              className="text-graylight hover:text-white border-b-2 hover:border-purple border-black cursor-pointer"
            >
              Projetos
            </li>
          </ul>
        </nav>
        <button
          className="sm:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <List size={32} weight="fill" />
        </button>
      </header>
      <nav
        className={`w-screen h-[100vh] bg-black fixed top-0 flex z-30 ${
          !showMenu && "hidden"
        }`}
      >
        <button
          className="absolute right-4 top-4  z-40 "
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <X size={32} weight="fill" />
        </button>

        <ul className="flex flex-col w-full justify-center items-center content-center gap-16 text-2xl font-mont  bg-black">
          <li
            onClick={() => {
              setShowMenu(false);
              handleClick(productRef);
            }}
          >
            Produtos
          </li>
          <li
            onClick={() => {
              setShowMenu(false);
              handleClick(aboutRef);
            }}
          >
            Sobre
          </li>
          <li
            onClick={() => {
              setShowMenu(false);
              handleClick(projectRef);
            }}
          >
            Projetos
          </li>
        </ul>
      </nav>
    </>
  );
}
