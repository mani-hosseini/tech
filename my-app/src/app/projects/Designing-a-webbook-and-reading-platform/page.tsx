"use client";
import React from "react";

import Headerproject from "@/components/project/Headerproject";
import BodyProjectInside from "@/components/project/BodyProjectInside";
import Comments from "@/components/Comments";
import ContectBoxProject from "@/components/project/ContectBoxProject";

const products = [
  {
    title: "طراحی پلتفرم کتاب و کتابخوانی تحت وب",
    img: "/img/project/Mask-Group-37-860x684-1.jpg",
    comment: "بدون دیدگاه",
    employer: "آقای سینا مجتهد",
    dateStart: "25 / 12 / 1398",
    price: "20,000,000 تومان",
    dateFinish: "12 روز کاری",
    link: "/projects/Designing-a-webbook-and-reading-platform",
    data: ["Html", "Css", "Java Script", "React", "Next"],
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
