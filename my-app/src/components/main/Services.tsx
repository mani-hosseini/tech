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

const services = [
    {
        id: 1,
        title: "طرح ویژه",
        prices: "65,000,000 تومان",
        img: "/img/project/Mask-Group-37-860x684-1.jpg",
        
    },
    {
        id: 2,
        title: "طرح پیشرفته",
        prices: "45,000,000 تومان",
        img: "/img/project/Mask-Group-31-860x684-1.jpg",
        
    },
    {
        id: 3,
        title: "طرح اولیه",
        prices: "24,000,000 تومان",
        img: "/img/project/Mask-Group-34-860x684-1.jpg",
        
    },
];
export default function page() {
    return (
        <div>

        </div>
    )
}
