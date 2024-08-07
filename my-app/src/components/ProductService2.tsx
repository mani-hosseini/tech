import React from "react";

import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

import WestIcon from "@mui/icons-material/West";

const MorabbaLight = localFont({
  src: "../../public/fonts/Morabba/woff2/Morabba-Light.woff2",
});

const DanaRegular = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
});

const DanaBold = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
});

const DanaMedium = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
});

const Morabbamedium = localFont({
  src: "../../public/fonts/Morabba/woff2/Morabba-Medium.woff2",
});

const services = [
  {
    title: "بهینه سازی سرعت",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
    image: "/img/services/9.webp",
    link: "/services//Speed-optimization",
  },
  {
    title: "سئو و بهینه سازی سایت",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
    image: "/img/services/images.jpg",
    link: "/services/SEO-and-ite-optimization",
  },
  {
    title: "تبلیغات کلیکی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
    image: "/img/services/PPC-marketing.webp",
    link: "/services/Click-Advertising",
  },
  {
    title: "بازاریابی محتوا",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
    image: "/img/services/20161019052135-Content-Marketing-1024x683.jpeg",
    link: "/services/marketing",
  },
];

const ServiceCard = ({ service }) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden  transition-transform duration-300 hover:-translate-y-3">
    <Link href={service.link}>
      <Image
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover cursor-pointer"
        width={500}
        height={500}
      />
    </Link>
    <div className="p-4">
      <h3 className={`text-lg mb-2 ${DanaMedium.className}`}>
        {service.title}
      </h3>
      <p
        className={`${DanaMedium.className} text-gray-600 text-justify mb-4 text-xs`}
      >
        {service.description}
      </p>
      <div className="flex items-center">
        <Link
          href={service.link}
          className={`text-[#5E71FF] ${DanaBold.className} text-sm`}
        >
          درخواست پروژه
          <WestIcon className="text-lg mr-1" />
        </Link>
      </div>
    </div>
  </div>
);

const ProductService2 = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
);

export default ProductService2;
