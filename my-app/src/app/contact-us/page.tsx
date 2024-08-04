"use client";
import React, { useEffect, useRef } from "react";
import { useState, FormEvent } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Accordin from "@/components/Accordin";

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

const faqItems = [
  {
    title: "حداکثر زمان تحویل پروژه چقدر است ؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    title: "نحوه قیمت گذاری روی پروژه به چه شکل است ؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    title: "آیا تضمین کیفیت کار را میدهید ؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
];

const Page: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error1, setEror1] = useState<string>("");
  const [error2, setEror2] = useState<string>("");
  const [error3, setEror3] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [text, setText] = useState<string>("");
  const rotateImageRef = useRef<HTMLImageElement | null>(null);
  const bounceImageRef = useRef<HTMLImageElement | null>(null);

  const handelNameSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!inputValue) {
      setEror1("لطفا قسمت نام و نام خانوادگی را پر کنید");
      return;
    } else if (inputValue.length < 5) {
      setEror1("لطفا بیشتر از 5 حرف وارد کنید");
      return;
    }

    if (!email) {
      setEror1("لطفا این قسمت ایمیل را پر کنید");
      return;
    } else if (!email.includes("@")) {
      setEror1("ایمیل باید شامل کارکتر @ باشد.");
      return;
    } else if (!email.endsWith("gmail.com")) {
      setEror1("ایمیل شما باید خاتمه آن از gmail.com استفاده شده باشد.");
      return;
    }

    if (!number) {
      setEror2("لطفا این قسمت تلفن را پر کنید");
      return;
    } else if (number.length < 11 || number.length > 12) {
      setEror2("شماره تلفن را صحیح وارد کنید.");
      return;
    }

    if (!subject) {
      setEror2("لطفا این قسمت موضوع را پر کنید");
    } else if (subject.length < 5) {
      setEror2("لطفا بیشتر از 5 حرف وارد کنید");
    }

    if (!text) {
      setEror3("لطفا این قسمت پیغام را پر کنید");
    } else if (text.length < 5) {
      setEror3("لطفا بیشتر از 5 حرف وارد کنید");
    }

    setEror1("");
    setEror2("");
    setEror3("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (rotateImageRef.current) {
        const rotation = scrollPosition % 360;
        rotateImageRef.current.style.transform = `rotate(${rotation}deg)`;
      }

      if (bounceImageRef.current) {
        const bounce = Math.sin(scrollPosition / 60) * 20;
        bounceImageRef.current.style.transform = `translateY(${bounce}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="xs:w-[84%] w-[91%] m-auto">
      {/* part one */}
      <div className="w-full flex items-center flex-col mt-20 xs:mb-20 xs:flex-row">
        {/* بخش فرم و متن */}
        <div className="xs:w-1/2 w-full flex flex-col items-start justify-center ">
          {/* بخش تماس با ما */}
          <div className="bg-[#FECBF8] rounded-2xl py-1 text-sm px-6 mb-4">
            <p className={`text-[#5E71FF] ${DanaMedium.className}`}>
              تماس با ما
            </p>
          </div>
          <h1 className={`${DanaBold.className} text-2xl font-bold mb-2`}>
            آیا سوال یا درخواستی از ما دارید؟
          </h1>
          <p
            className={`${DanaRegular.className} text-sm opacity-70 text-justify`}
          >
            از طریق فرم ارتباطی زیر میتوانید سوالات، نظرات و درخواست‌های خودتون
            رو با ما به اشتراک بگذارید و<br className="hidden xs:block" />{" "}
            کارشناسان ما در اسرع وقت به شما پاسخ خواهند داد.
          </p>
          <Image
            src="/img/contact-us/1f642.svg"
            height={15}
            width={15}
            alt=""
            className="absolute xs:top-[278px] xs:right-[430px] top-[315px] right-[150px]"
          />
          {/* فرم */}
          <div className="w-full flex items-center justify-center mt-5">
            <form className="w-full" onSubmit={handelNameSubmit}>
              <div className="w-full flex items-center justify-start mb-3 flex-col xs:flex-row">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی:"
                  className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm xs:w-[45%] w-full ml-0 xs:ml-5 text-right text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2]`}
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <input
                  type="email"
                  placeholder="ایمیل:"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm xs:w-[45%] w-full text-right text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2] mt-3 xs:mt-0`}
                />
              </div>
              {error1 && (
                <p
                  className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}
                >
                  {error1}
                </p>
              )}
              <div className="w-full flex items-center justify-start mb-3 flex-col xs:flex-row">
                <input
                  type="tel"
                  placeholder="شماره تماس:"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm xs:w-[45%] w-full ml-0 xs:ml-5 text-left text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2]`}
                />
                <input
                  type="text"
                  placeholder="موضوع:"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm xs:w-[45%] w-full text-right text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2] mt-3 xs:mt-0`}
                />
              </div>
              {error2 && (
                <p
                  className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}
                >
                  {error2}
                </p>
              )}
              <textarea
                placeholder="پیغام شما :)"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm w-full h-[150px] text-right text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2] mb-3 xs:w-[93%]`}
              ></textarea>
              {error3 && (
                <p
                  className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}
                >
                  {error3}
                </p>
              )}

              <button
                className={`${DanaRegular.className} py-2 px-7 rounded-xl bg-[#5E71FF] text-white`}
                type="submit"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
        {/* بخش تصویر */}
        <div className="xs:w-1/2 w-full flex items-center justify-center mt-16 xs:mt-0">
          <div className="relative">
            <Image
              src="/img/contact-us/Mask-Group-13.png"
              width={500}
              height={500}
              alt=""
              className="flex items-center justify-center"
            />
            <div className="relative">
              <Image
                src="/img/contact-us/Mask-Group-6.png"
                width={70}
                height={70}
                alt=""
                className="absolute -top-[320px] -left-[30px] hidden xs:block"
                ref={bounceImageRef}
              />
            </div>
            <div className="relative">
              <Image
                src="/img/contact-us/Rectangle-45.png"
                width={70}
                height={70}
                alt=""
                className="absolute -top-[100px] left-[80%] duration-[0.90] hidden xs:block"
                ref={rotateImageRef}
              />
            </div>
          </div>
        </div>
      </div>
      {/* part two */}
      <div className="w-full flex flex-col xs:flex-row mb-5 mt-10">
        {/* Map */}
        <div className="w-full xs:w-1/2 order-2 xs:order-1 flex items-center justify-center">
          <Image
            src={"/img/contact-us/map-min.png"}
            width={700}
            height={700}
            alt=""
            className="w-[93%] rounded-2xl cursor-pointer hover:scale-105 hover:duration-[1.2s] hover:ease-in-out"
          />
        </div>
        {/* part Accordin */}
        <div className="w-full xs:w-1/2 flex items-center justify-center order-1 xs:order-2 mb-10">
          <div className="max-w-2xl w-full ">
            <Accordin items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
