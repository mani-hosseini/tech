"use client";
import React from "react";

import Headerproject from "@/components/project/Headerproject";
import BodyProjectInside from "@/components/project/BodyProjectInside";

const products = [
  {
    title: "طراحی وبسایت فروشگاهی در زمینه فروش لباس",
    img: "/img/project/Mask-Group-30-860x762-1.jpg",
    comment: "بدون دیدگاه",
    employer: "آقای محسن قانع",
    dateStart: "7 / 7 / 1399",
    price: "17,000,000 تومان",
    dateFinish: "25 روز کاری",
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
          {products.map((product, index) =>(
            <BodyProjectInside key={index} product={product}/>
          ))}
        </div>

        <div className=" xs:w-1/4 w-full xs:mt-0 mt-5">
          ddddd
        </div>
      </div>
    </div>
  );
}
