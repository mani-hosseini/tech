"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import localFont from "next/font/local";
import AddCircleIcon from '@mui/icons-material/AddCircle';

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

const images = [
  {
    img: "/img/project/5c2b29031110ec6855051b37_scene_generator_psd_objects_freebie_ohmy_cover-860x762-1.jpg",
  },
  { img: "/img/project/Mask-Group-31-860x684-1.jpg" },
  { img: "/img/project/Mask-Group-33-860x684-1.jpg" },
  { img: "/img/project/Mask-Group-34-860x684-1.jpg" },
  { img: "/img/project/Mask-Group-37-860x684-1.jpg" },
  { img: "/img/project/Mask-Group-36-860x762-1.jpg" },
];

export default function BodyService({ product }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="py-2 px-6">
      <Image
        src={product.img}
        width={1000}
        height={1100}
        alt=""
        className="sm:h-[300px] md:h-[380px] lg:h-[480px] rounded-2xl align-middle object-cover object-center mb-4"
      />
      <div className="flex flex-row items-start justify-between">
        <div className="flex items-center mb-4 xs:mb-0">
          <span
            className={`${DanaBold.className} text-[#9D9D9D] xs:text-[14px] text-[8px] opacity-70 flex items-center`}
          >
            <CalendarMonthIcon className="text-[#716F87] text-[16px] ml-2" />
            26 سپتامبر, 2023
          </span>
          <Link href={"/"}>
            <span
              className={`${DanaBold.className} text-[#9D9D9D] xs:text-[14px] text-[8px] opacity-70 flex items-center mr-4`}
            >
              <ChatBubbleIcon className="text-[#716F87] text-[16px] ml-2" />
              {product.comment}
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <FacebookOutlinedIcon className="text-[#716F87] xs:text-[18px] text-[12px] cursor-pointer hover:text-blue-500" />
          <TwitterIcon className="text-[#716F87] xs:text-[18px] text-[12px] cursor-pointer hover:text-blue-500" />
          <TelegramIcon className="text-[#716F87] xs:text-[18px] text-[12px] cursor-pointer hover:text-blue-500" />
          <WhatsAppIcon className="text-[#716F87] xs:text-[18px] text-[12px] cursor-pointer hover:text-blue-500" />
        </div>
      </div>
      <hr className="mt-2 opacity-80" />
      <div className="mt-5 flex flex-col items-center mb-10">
        <h2 className={`${DanaMedium.className} text-blue-500 text-sm`}>
          گالری تصاویر پروژه
        </h2>
        <div className="flex items-start xs:flex-nowrap flex-wrap mt-4 mr-4">
          {images.map((product, index) => (
            <div
              key={index}
              className="relative inline-block cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={product.img}
                width={120}
                height={120}
                alt=""
                className="rounded-lg ml-4 h-[105px] object-cover mr-4 xs:mr-0 mt-4 xs:mt-0"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white w-[40px]"><AddCircleIcon/></span>
              </div>
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images.map(image => ({ src: image.img }))}
            index={photoIndex}
            onSlideChange={(index) => setPhotoIndex(index)}
          />
        )}
      </div>
      <h1
        className={`${DanaBold.className} mt-5 text-[#5E71FF] text-[16px] mb-5`}
      >
        {product.title}
      </h1>
      <p
        className={`${DanaMedium.className} text-justify text-[13.15px] leading-7 text-gray-500`}
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
        شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
        طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
        الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
        می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
        تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
        جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
        گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
        ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
        شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
        طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
        الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
        می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
        تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
        جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
        گیرد.
      </p>
    </div>
  );
}

