import React from "react";

import EngineeringIcon from "@mui/icons-material/Engineering";
import Image from "next/image";
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

export default function ContectBoxProject({ product }) {
  return (
    <div className="sticky top-2">
      {/* اطلاعات پروژه */}
      <div
        className={`bg-white px-3 py-4 border border-[#b5b1b12e] rounded-2xl mb-5 ${DanaRegular.className}`}
      >
        <div className="flex items-center justify-start mb-5">
          <div className="bg-[#FECBF8] w-[20px] h-[3px]"></div>
          <h1 className={`${DanaBold.className} mr-2 text-[14px]`}>
            اطلاعات پروژه :
          </h1>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span
            className={`${DanaMedium.className} flex items-center text-[14px]`}
          >
            <Image
              src={"/img/project/icon.svg"}
              width={26}
              height={26}
              alt=""
              className="text-[25px] mb-1  ml-1 fill-[#5E71FF] p-1"
            />
            کارفرمای محترم :
          </span>
          <span
            className={`${DanaRegular.className} text-[14px] text-gray-500`}
          >
            {product.employer}
          </span>
        </div>
        <hr className="text-gray-400 opacity-40 mb-3" />
        <div className="flex items-center justify-between mb-2">
          <span
            className={`${DanaMedium.className} flex items-center text-[14px]`}
          >
            <Image
              src={"/img/project/icon1.svg"}
              width={26}
              height={26}
              alt=""
              className="text-[25px] mb-1  ml-1 fill-[#5E71FF]  p-1"
            />
            تاریخ شروع :
          </span>
          <span
            className={`${DanaRegular.className} text-[14px] text-gray-500`}
          >
            {product.dateStart}
          </span>
        </div>
        <hr className="text-gray-400 opacity-40 mb-3" />
        <div className="flex items-center justify-between mb-2">
          <span
            className={`${DanaMedium.className} flex items-center text-[14px]`}
          >
            <Image
              src={"/img/project/icon2.svg"}
              width={26}
              height={26}
              alt=""
              className="text-[25px] mb-1  ml-1 fill-[#5E71FF]  p-1"
            />
            قیمت پروژه :
          </span>
          <span
            className={`${DanaRegular.className} text-[14px] text-gray-500`}
          >
            {product.price}
          </span>
        </div>
        <hr className="text-gray-400 opacity-40 mb-3" />
        <div className="flex items-center justify-between mb-2">
          <span
            className={`${DanaMedium.className} flex items-center text-[14px]`}
          >
            <Image
              src={"/img/project/icon3.svg"}
              width={26}
              height={26}
              alt=""
              className="text-[25px] mb-1  ml-1 fill-[#5E71FF]  p-1"
            />
            مدت زمان انجام :
          </span>
          <span
            className={`${DanaRegular.className} text-[14px] text-gray-500`}
          >
            {product.dateFinish}
          </span>
        </div>
        <hr className="text-gray-400 opacity-40 mb-3" />
        <Link href={product.link}>
          <button
            className={`${DanaMedium.className} bg-blue-600 w-full rounded-xl px-3 py-2 text-white text-sm opacity-80 mb-1`}
          >
            مشاهده آنلاین پروژه
          </button>
        </Link>
      </div>
      {/* تکنولوژی های استفاده شده */}
      <div className="bg-white px-6 py-4 border border-[#b5b1b12e] rounded-2xl mb-5">
        <div className="flex items-center justify-start mb-5">
          <div className="bg-[#FECBF8] w-[20px] h-[3px]"></div>
          <h1 className={`${DanaBold.className} mr-2 text-[14px]`}>
            تکنولوژی های استفاده شده :
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.data.map((product, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-md"
            >
              {product}
            </span>
          ))}
        </div>
      </div>
      {/* عضویت در خبرنامه */}
      <div className="bg-white px-6 py-4 border border-[#b5b1b12e] rounded-2xl">
        <div className="flex items-center justify-start mb-2">
          <div className="bg-[#FECBF8] w-[20px] h-[3px]"></div>
          <h1 className={`${DanaBold.className} mr-2 text-[14px]`}>
            عضویت در خبرنامه
          </h1>
        </div>
        <div className="flex items-center justify-between border-gray-200 border rounded-xl">
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className={`${DanaRegular.className} text-sm px-2 w-[73%] rounded-2
              xl h-9 focus:outline-none focus:border-gray-200 focus:ring-0 focus:border focus:to-gray-500 rounded-xl`}
          />
          <button
            type="button"
            className={`bg-blue-600 text-white px-5 rounded-xl py-2 ${DanaRegular.className} text-sm`}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}
