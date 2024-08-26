import React from "react";

import BodyProjects from "@/components/project/BodyProjects";

import localFont from "next/font/local";
import Tittleprjocts from "@/components/project/Tittleprjocts";
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
          <p className={`text-[#5E71FF] ${DanaBold.className}`}>نمونه کارها</p>
        </div>
        <h1 className={`${DanaRegular.className} text-xl font-bold`}>
          برخی از نمونه کارهای ما
        </h1>
        <Tittleprjocts/>
        <BodyProjects/>
      </div>
    </section>
  );
}
