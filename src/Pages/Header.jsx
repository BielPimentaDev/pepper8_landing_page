import { List, X } from "phosphor-react";
import React, { useState } from "react";
import banner from "../assets/banner_img.png";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="z-10 flex justify-between items-center p-4 fixed top-0 w-full max-w-[1400px] bg-black">
        <h1>PEPPER 8</h1>
        <nav>
          <ul className="hidden sm:flex justify-around w-[300px] ">
            <li className="text-graylight hover:text-white border-b-2 hover:border-purple border-black cursor-pointer">
              Produtos
            </li>
            <li className="text-graylight hover:text-white border-b-2 hover:border-purple border-black cursor-pointer">
              Sobre
            </li>
            <li className="text-graylight hover:text-white border-b-2 hover:border-purple border-black cursor-pointer">
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
        className={`w-screen h-[100vh] bg-black fixed flex  ${
          !showMenu && "hidden"
        }`}
      >
        <button
          className="absolute right-4 top-4"
          onClick={() => {
            setShowMenu(!showMenu);
            console.log(showMenu);
          }}
        >
          <X size={32} weight="fill" />
        </button>

        <ul className="flex flex-col w-full justify-center items-center content-center gap-16 text-2xl font-mont z-40 bg-black">
          <li>Produtos</li>
          <li>Sobre</li>
          <li>Projetos</li>
        </ul>
      </nav>
    </>
  );
}
