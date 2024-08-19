"use client";
import React from "react";

import Headerproject from "@/components/project/Headerproject";
import BodyProjectInside from "@/components/project/BodyProjectInside";
import Comments from "@/components/Comments";
import ContectBoxProject from "@/components/project/ContectBoxProject";

const products = [
  {
    title: "طراحی سایت فروشگاهی لباس های بچگانه",
    img: "/img/project/Mask-Group-36-860x762-1.jpg",
    comment: "بدون دیدگاه",
    employer: "آقای محمود غفاری",
    dateStart:"12 / 7 / 1400",
    price: "24,000,000 تومان",
    dateFinish: "18 روز کاری",
    link: "/projects/Childrens-clothing-store-website-design",
    data: ["Html", "Css", "Java Script", "Node Js", "Express"],
  },
];

export default function page() {
  return (
    <div className="xs:w-[84%] w-[91%] m-auto">
      {products.map((product, index) => (
        <Headerproject key={index} product={product} />
      ))}

      <div className="w-full flex xs:mt-10 mt-5 xs:flex-row flex-col ">
        <div className="xs:w-3/4 w-full bg-white py-2 border border-[#b5b1b12e] rounded-2xl ml-5">
          {products.map((product, index) => (
            <BodyProjectInside key={index} product={product} />
          ))}
        </div>

        <div className=" xs:w-1/4 w-full xs:mt-0 mt-5">
          {products.map((product, index) => (
            <ContectBoxProject key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="w-full bg-white px-4 py-2 border border-[#b5b1b12e] rounded-2xl mt-10 mb-5">
        <Comments />
      </div>
    </div>
  );
}
