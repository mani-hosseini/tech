import React from "react";

import Image from "next/image";
import Link from "next/link";

import WestIcon from "@mui/icons-material/West";

import localFont from "next/font/local";
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
    title: "طراحی وبسایت وردپرس",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...",
    image: "/img/services/DSCF3903-scaled-2-1024x683.webp",
    link: "/services/website-design-wordpress",
  },
  {
    title: "طراحی اپلیکیشن موبایل",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...",
    image: "/img/services/download.jpg",
    link: "/services/Mobile-application-design",
  },
  {
    title: "طراحی سایت اختصاصی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...",
    image: "/img/services/how-to-design-mobile-app-ui-like-a-professional.webp",
    link: "/services/Exclusive-website-design",
  },
  {
    title: "پشتیبانی وبسایت شما",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...",
    image: "/img/services/ZGM_FrontEndBackEndDev-955x500-1.webp",
    link: "/services/Support-your-website",
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
    </Link>{" "}
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

const ProductService = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
);

export default ProductService;
