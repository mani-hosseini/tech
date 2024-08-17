"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link"
import Weblogonepage from "@/components/Weblogonepage";

import localFont from "next/font/local";
const MorabbaLight = localFont({
    src: "../../../../public/fonts/Morabba/woff2/Morabba-Light.woff2",
});

const DanaRegular = localFont({
    src: "../../../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
});

const DanaBold = localFont({
    src: "../../../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
});

const DanaMedium = localFont({
    src: "../../../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
});

const Morabbamedium = localFont({
    src: "../../../../public/fonts/Morabba/woff2/Morabba-Medium.woff2",
});
export default function page() {
    return (
        <div className={` ${DanaMedium.className} xs:w-[84%] w-[91%]  m-auto `}>
            <Weblogonepage/>
        </div>
    )
}
