import React from "react";

export default function CardProject({ data }) {
  return (
    <div
      data-aos="fade-up"
      className="sm:w-[350px] w-full m-4 rounded-t-lg bg-blacklight "
    >
      <img
        src={data.tumb.img}
        alt={data.tumb.alt}
        className="w-full rounded-t-lg"
      />
      <div className="p-6">
        <h4 className="p-2 text-center text-xl">{data.title}</h4>
        <p className="text-graylight text-sm font-light">{data.description}</p>
        <a className="text-purple font-mont font-bold text-end block cursor-pointer">
          Ver mais
        </a>
      </div>
    </div>
  );
}
