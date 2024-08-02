"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

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

import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function footer() {
  return (
<footer className='relative bg-gradient-to-r from-purple-900 to-purple-500 text-white pt-20 pb-10 clip-ellipse-top'>
  <div className='container mx-auto px-4'>
    <div className='flex flex-wrap'>
      <div className='w-full md:w-2/5 mb-6 md:mb-0 px-4'>
        <Image src={'./img/footer/footer-logo.svg'} width={200} height={150} alt='' className='py-4 mx-auto'/>
        <p className={`mb-4 ${DanaRegular.className} text-justify text-xs mb-2 leading-7`}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <h4 className={`${DanaBold.className} mb-4 font-bold text-white text-xl`}>عضویت در خبرنامه</h4>
        <hr className='opacity-15 mb-3'/>
        <div className="flex items-center justify-center mt-5">
          <form className="w-full max-w-lg relative">
            <input
              type="email"
              placeholder="ایمیل شما:"
              className={`w-full py-2 px-4 rounded-2xl  focus:outline-none text-right bg-purple-500 ${DanaBold.className}`}
            />
            <Link href={'/'}>
              <button
                type="button"
                className={`absolute bottom-0 left-0 bg-purple-400 text-white py-2 px-6 rounded-2xl transition duration-300 ease-in-out ${DanaBold.className}`}
              >
                عضویت
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className='w-full md:w-1/5 mb-6 md:mb-0 px-4'>
        <h4 className={`${DanaBold.className} text-white font-bold mb-3 text-xl`}>خدمات ما</h4>
        <hr className='opacity-15 mb-3'/>
        <ul>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span> 
              بازاریابی محتوا
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              سِئو و بهینه سازی
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              طراحی سایت
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 flex items-center cursor-pointer text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
            بهینه‌سازی سرعت
          </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 flex items-center cursor-pointer text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              تبلیغات کلیدی
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} flex items-center cursor-pointer text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              پشتیبانی وبسایت
            </li>
          </Link>
        </ul>
      </div>
      <div className='w-full md:w-1/5 mb-6 md:mb-0 px-4'>
        <h4 className={`${DanaBold.className} text-white font-bold mb-3 text-xl`}>لینک های مفید</h4>
        <hr className='opacity-15 mb-3'/>
        <ul>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              صفحه اصلی
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span> 
              آخرین مقالات
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              خدمات
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              پروژه های ما
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} mb-4 cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              درباره ما
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`${DanaRegular.className} cursor-pointer flex items-center text-sm`}>
              <span className="w-2 h-2 bg-white rounded-full inline-block ml-2"></span>
              تماس با ما
            </li>
          </Link>
        </ul>
      </div>
      <div className="w-full md:w-1/5 px-4">
        <h4 className={`${DanaBold.className} text-white font-bold mb-3 text-xl`}>
          اطلاعات تماس
        </h4>
        <hr className="opacity-15 mb-2" />
        <div className="flex flex-col md:flex-row items-center mb-4">
          <Image
            src={"/img/footer/Group-30.png"}
            width={70}
            height={70}
            alt=""
            className="py-2 md:py-4 ml-0 md:ml-5"
          />
          <Image
            src={"/img/footer/Group-30.png"}
            width={70}
            height={70}
            alt=""
            className="py-2 md:py-4"
          />
        </div>
        <p className={`${DanaMedium.className} mb-2 text-sm flex items-center`}>
          <RoomOutlinedIcon className="text-sm ml-1" />
          آدرس : تهران منطقه 18 یافت آباد
        </p>
        <p className={`${DanaRegular.className} mb-2 flex items-center text-xs`}>
          <PhoneEnabledOutlinedIcon className="text-sm ml-1" />
          تلفن: 09109502882 - 09105944090
        </p>
        <div className="flex space-x-3 mt-4 items-center justify-center md:justify-start">
          <div className="social-icon ml-3">
            <Link href={"/"} className="text-white">
              <FacebookOutlinedIcon className="text-lg" />
            </Link>
          </div>
          <div className="social-icon">
            <Link href={"/"} className="text-white">
              <TwitterIcon className="text-lg" />
            </Link>
          </div>
          <div className="social-icon">
            <Link href={"/"} className="text-white">
              <TelegramIcon className="text-lg" />
            </Link>
          </div>
          <div className="social-icon">
            <Link href={"/"} className="text-white">
              <WhatsAppIcon className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
