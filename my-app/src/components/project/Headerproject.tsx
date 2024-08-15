
import React from "react";

import Link from "next/link";

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

export default function Headerproject({ product }) {
  return (
    <div className="bg-white px-4 py-2 border border-[#b5b1b12e] rounded-2xl">
      <div className="flex items-center justify-start">
        <Link href={"/"}>
          <span
            className={`${DanaMedium.className} text-sm text-[#337ab7] ml-2`}
          >
            صفحه اصلی
          </span>
        </Link>
        <span className="ml-2 text-sm text-[#337ab7]">/</span>
        <Link href={"/projects"}>
          <span className={`${DanaMedium.className} text-sm text-[#337ab7]`}>
            پروژه ها
          </span>
        </Link>
        <span className="mr-2 text-sm text-[#337ab7]">/</span>
        <div className="relative group">
          <div className={`overflow-hidden whitespace-nowrap text-ellipsis w-[150px] ${DanaMedium.className} text-sm mr-2 text-gray-600`}>
            {product.title}
          </div>
          <div className={`absolute hidden group-hover:block bg-black  p-2  w-max left-[100px] top-full mt-1 ${DanaMedium.className} text-[10px] mr-2 text-gray-300`}>
            {product.title}
          </div>
        </div>
      </div>
    </div>
  );
}
