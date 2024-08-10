import React from "react";

import FooterServise from "@/components/FooterServise";
import BodyServise from "@/components/BodyServise";

const products = [
  {
    img: "/img/services/how-to-design-mobile-app-ui-like-a-professional.webp",
    title: "طراحی اپلیکیشن موبایل",
    comment: "دو دیدگاه",
  },
];

export default function page() {
  return (
    <div className="xs:w-[84%] w-[91%] m-auto">
      {products.map((product, index) => (
        <FooterServise key={index} product={product} />
      ))}
      <div className="w-full flex items-center mt-10">
        <div className="w-3/4 bg-white px-4 py-2 border border-[#b5b1b12e] rounded-2xl ml-5">
          {products.map((product, index) => (
            <BodyServise key={index} product={product} />
          ))}
        </div>
        <div className="w-1/4 bg-white px-3 py-2 border border-[#b5b1b12e] rounded-2xl">
          dddd
        </div>
      </div>
    </div>
  );
}
