"use client";
import React from "react";

import FooterServise from "@/components/FooterServise";
import BodyServise from "@/components/BodyServise";
import ContactBox from "@/components/ContectBox";
import Comments from "@/components/Comments";

const products = [
  {
    img: "/img/services/ZGM_FrontEndBackEndDev-955x500-1.webp",
    title: "طراحی وبسایت وردپرس",
    comment: "بدون دیدگاه",
  },
];

export default function page() {
  return (
    <div className="xs:w-[84%] w-[91%] m-auto">
      {products.map((product, index) => (
        <FooterServise key={index} product={product} />
      ))}

      <div className="w-full flex xs:mt-10 mt-5 xs:flex-row flex-col ">
        <div className="xs:w-3/4 w-full bg-white px-4 py-2 border border-[#b5b1b12e] rounded-2xl ml-5">
          {products.map((product, index) => (
            <BodyServise key={index} product={product} />
          ))}
        </div>

        <div className=" xs:w-1/4 w-full xs:mt-0 mt-5">
          <ContactBox />
        </div>
      </div>

      <div className="w-full bg-white px-4 py-2 border border-[#b5b1b12e] rounded-2xl mt-10 mb-5">
        <Comments />
      </div>
    </div>
  );
}
