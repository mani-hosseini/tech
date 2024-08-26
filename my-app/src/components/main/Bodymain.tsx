"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import WestIcon from "@mui/icons-material/West";

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
    link: '/projects/Designing-a-webbook-and-reading-platform',
  },
  {
    id: 2,
    title: "طراحی سایت شرکتی، صنعتی با قابلیت فرم...",
    category: "شرکتی",
    img: "/img/project/Mask-Group-31-860x684-1.jpg",
    link: '/projects/Corporate-industrial-site-design-with-form-capability',
  },
  {
    id: 3,
    title: "طراحی وب اپلیکیشن برای ارائه خدمات...",
    category: "خلاقانه",
    img: "/img/project/Mask-Group-34-860x684-1.jpg",
    link: '/projects/Web-application-design-to-provide-services',
  },
  {
    id: 4,
    title: "طراحی وبسایت فروشگاهی ابزارآلات ساختمانی",
    category: "فروشگاهی",
    img: "/img/project/Mask-Group-33-860x684-1.jpg",
    link: '/projects/Website-design-for-construction-tools-store',
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
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white h-[288px] shadow-sm rounded-2xl p-3 flex flex-col items-start"
          >
            <Image
              src={product.img}
              alt={product.title}
              width={10000}
              height={10000}
              className="rounded-lg image-container  mb-4 w-full inline-block h-[100px]"
            />
            <h2 className={`text-sm  ${DanaMedium.className}`}>
              {product.title}
            </h2>
            <Link href={product.link}>
              <span className={`${DanaRegular.className} text-xs text-gray-700`}>
                مشاهده جزئیـات
                <WestIcon className="text-sm  mr-1" />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
