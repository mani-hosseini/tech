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
    {
        id: 5,
        title: "طراحی وبسایت فروشگاهی در زمینه فروش لباس",
        category: "فروشگاهی",
        img: "/img/project/Mask-Group-30-860x762-1.jpg",
        link: '/projects/website-in-the-field-of-clothing-sales',
    },
    {
        id: 6,
        title: "طراحی سایت شرکتی با قابلیت مشاوره آنلاین",
        category: "شرکتی",
        img: "/img/project/Mask-Group-35-860x762-1.jpg",
        link: '/projects/Company-website-design-with-online-consulting-capability',
    },
    {
        id: 7,
        title: "طراحی وبسایت موزیک با قابلیت پخش آنلاین",
        category: "مجله ای",
        img: "/img/project/5c2b29031110ec6855051b37_scene_generator_psd_objects_freebie_ohmy_cover-860x762-1.jpg",
        link: '/projects/Music-website-design-with-online-playback-capability',
    },
    {
        id: 8,
        title: "طراحی سایت فروشگاهی لباس های بچگانه",
        category: "فروشگاهی",
        img: "/img/project/Mask-Group-36-860x762-1.jpg",
        link: '/projects/Childrens-clothing-store-website-design',
    },
];
export default function tittleprjocts() {
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
        </div>
    );
}

