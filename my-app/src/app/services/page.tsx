"use client"
import React from "react";

import Image from "next/image";
import Link from "next/link"

import ProductService from "@/components/ProductService";
import ProductService2 from "@/components/ProductService2";

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

export default function page() {
  return (
    <section className="xs:w-[84%] w-[91%] m-auto">
      <div className="flex flex-col items-center">
        <div className="bg-[#FECBF8] rounded-2xl py-1 text-sm px-6 mb-4">
          <p className={`text-[#5E71FF] ${DanaBold.className}`}>خدمات ما</p>
        </div>
        <h1 className={`${DanaRegular.className} text-xl font-bold mb-5`}>
          برخی از خدماتی که ما به شما ارائه میدهیم
        </h1>
        <ProductService/>
        <ProductService2/>
      </div>
    </section>
  );
}
5;
