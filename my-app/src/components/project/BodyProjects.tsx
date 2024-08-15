"use client";
import React, { useState } from "react";
import Image from "next/image";

import localFont from "next/font/local";
const MorabbaLight = localFont({
  src: "../../../public/fonts/Morabba/woff2/Morabba-Light.woff2",
});

const DanaRegular = localFont({
  src: "../../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
});

const DanaBold = localFont({
  src: "../../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
});

const DanaMedium = localFont({
  src: "../../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
});

const Morabbamedium = localFont({
  src: "../../../public/fonts/Morabba/woff2/Morabba-Medium.woff2",
});

const products = [
  {
    id: 1,
    title: "طراحی پلتفرم کتاب و کتابخوانی تحت وب",
    category: "شرکتی",
    img: "/img/project/Mask-Group-37-860x684-1.jpg",
  },
  {
    id: 2,
    title: "طراحی سایت شرکتی، صنعتی با قابلیت فرم...",
    category: "شرکتی",
    img: "/img/project/Mask-Group-31-860x684-1.jpg",
  },
  {
    id: 3,
    title: "طراحی وب اپلیکیشن برای ارائه خدمات...",
    category: "خلاقانه",
    img: "/img/project/Mask-Group-34-860x684-1.jpg",
  },
  {
    id: 4,
    title: "طراحی وبسایت فروشگاهی ابزارآلات ساختمانی",
    category: "فروشگاهی",
    img: "/img/project/Mask-Group-33-860x684-1.jpg",
  },
  {
    id: 5,
    title: "طراحی وبسایت فروشگاهی در زمینه فروش لباس",
    category: "فروشگاهی",
    img: "/img/project/Mask-Group-30-860x762-1.jpg",
  },
  {
    id: 6,
    title: "طراحی سایت شرکتی با قابلیت مشاوره آنلاین",
    category: "شرکتی",
    img: "/img/project/Mask-Group-35-860x762-1.jpg",
  },
  {
    id: 7,
    title: "طراحی وبسایت موزیک با قابلیت پخش آنلاین",
    category: "مجله ای",
    img: "/img/project/5c2b29031110ec6855051b37_scene_generator_psd_objects_freebie_ohmy_cover-860x762-1.jpg",
  },
  {
    id: 8,
    title: "طراحی سایت فروشگاهی لباس های بچگانه",
    category: "فروشگاهی",
    img: "/img/project/Mask-Group-36-860x762-1.jpg",
  },
];

export default function BodyProjects() {
  const [selectedCategory, setSelectedCategory] = useState("همه نمونه کارها");

  const filteredProducts =
    selectedCategory === "همه نمونه کارها"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      {/* Category buttons */}
      <div className="flex justify-center space-x-reverse mb-4">
        {["همه نمونه کارها", "شرکتی", "فروشگاهی", "خلاقانه", "مجله ای"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                DanaRegular.className
              } ml-3 text-[12px] border border-pink-300 py-1 px-2 text-gray-500 rounded-md hover:text-blue-400 font-bold ${
                selectedCategory === category
                  ? "text-blue-800"
                  : "text-gray-500"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-start"
          >
            <Image
              src={product.img}
              alt={product.title}
              width={200}
              height={200}
              className="rounded-lg mb-4 w-full"
            />
            <h2 className={`text-sm mb-2 ${DanaRegular.className}`}>
              {product.title}
            </h2>
            <span>{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
