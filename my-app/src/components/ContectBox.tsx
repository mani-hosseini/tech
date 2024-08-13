import React from "react";

import Link from "next/link";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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

const ContactBox = () => {
  return (
    <div className="sticky top-2">
      <div
        className={`bg-white px-3 py-4 border border-[#b5b1b12e] rounded-2xl mb-5 ${DanaRegular.className}`}
      >
        <div className="flex items-center justify-start mb-5">
          <div className="bg-[#FECBF8] w-[20px] h-[3px]"></div>
          <h1 className={`${DanaBold.className} mr-2 text-[14px]`}>
            مشاوره و درخواست همکاری
          </h1>
        </div>
        <p
          className={`${DanaMedium.className} text-xs text-justify text-gray-500 leading-5 mb-5`}
        >
          برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است.
        </p>
        <div className="flex items-center justify-between mb-2">
          <span
            className={`${DanaMedium.className} flex items-center text-[14px]`}
          >
            <CallIcon className="text-[20px]  ml-2 text-[#5E71FF] bg-purple-200 rounded-full p-1" />
            تلفن تماس :
          </span>
          <span className={`${DanaMedium.className} text-[14px] text-gray-500`}>
            1234567 - 045
          </span>
        </div>
        <hr className="text-gray-400 opacity-40 mb-3" />
        <div className="flex items-center justify-between mb-2">
          <span
            className={`${DanaMedium.className} flex items-center text-[14px]`}
          >
            <EmailIcon className="text-[20px]  ml-2 text-[#5E71FF] bg-purple-200 rounded-full p-1" />{" "}
            ایمیل :
          </span>
          <span className={`${DanaMedium.className} text-[14px] text-gray-500`}>
            Info@yoursite.com
          </span>
        </div>
        <hr className="text-gray-400 opacity-40 mb-3" />
        <div className="flex items-center justify-between mb-2">
          <span
            className={`${DanaMedium.className} flex items-center text-[14px]`}
          >
            <ShareIcon className="text-[20px]  ml-2 text-[#5E71FF] bg-purple-200 rounded-full p-1" />{" "}
            شبکه های اجتماعی :
          </span>
          <div className="flex items-center">
            <FacebookOutlinedIcon className="text-sm text-blue-500 hover:text-pink-300 cursor-pointer ml-3  " />
            <TelegramIcon className="text-sm text-blue-500 hover:text-pink-300 cursor-pointer ml-3" />
            <WhatsAppIcon className="text-sm text-blue-500 hover:text-pink-300 cursor-pointer" />
          </div>
        </div>
        <hr className="text-gray-400 opacity-40 mb-3" />
        <Link href={"/contact-us"}>
          <button
            className={`${DanaMedium.className} bg-blue-600 w-full rounded-xl px-3 py-2 text-white text-sm opacity-80 mb-1`}
          >
            درخواست مشاوره و همکاری
          </button>
        </Link>
      </div>
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
              xl h-9 focus:outline-none focus:border-gray-200 focus:ring-0 focus:border focus:to-gray-500`}
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
};

export default ContactBox;
