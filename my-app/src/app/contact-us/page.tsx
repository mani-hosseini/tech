"use client";
import react from "react";
import { useState, FormEvent } from "react";

import Image from "next/image";

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

const page: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error1, setEror1] = useState<string>("");
  const [error2, setEror2] = useState<string>("");
  const [error3, setEror3] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<number>("");
  const [subject, setSubject] = useState<string>("");
  const [text, setText] = useState<string>("");

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
      setEror1("ایمیل شما باید خاتمه ان از gmail.com استفاده شده باشد.");
      return;
    }

    if (!number) {
      setEror2("لطفا این قسمت تلفن را پر کنید");
      return;
    } else if (number < 11) {
      setEror2("شماره تلفن را صحیح وارد کنید.");
      return;
    } else if (number > 12) {
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

  return (
    <section className=" w-[84%]  m-auto">
      <div className="w-full flex items-center mt-20">
        {/* section form and text*/}
        <div className="w-1/2 flex flex-col items-start justify-center">
          {/* section form */}
          <div className="bg-[#FECBF8] rounded-2xl py-1 text-sm px-6 mb-4">
            <p className={`text-[#5E71FF] ${DanaMedium.className}`}>
              تماس با ما
            </p>
          </div>
          <h1 className={`${DanaBold.className} text-2xl font-bold mb-2`}>
            آیا سوال یا درخواستی از ما دارید ؟
          </h1>
          <p
            className={`${DanaRegular.className} text-sm opacity-70 text-justify `}
          >
            از طریق فرم ارتباطی زیر میتوانید سوالات ، نظرات و درخواست های خودتون
            رو با ما به اشتراک بگذارید و <br /> کارشناسان ما در اسرع وقت به شما
            پاسخ خواهند داد
          </p>
          <Image
            src={"./img/contact-us/1f642.svg"}
            height={15}
            width={15}
            alt=""
            className="absolute top-[278px] right-[430px]"
          />
          {/* form */}
          <div className="w-full flex items-center justify-center mt-5">
            <form className="w-full" onSubmit={handelNameSubmit}>
              <div className="w-full flex items-center justify-start mb-3">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی:"
                  className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm w-[45%] ml-5 text-right text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2] focus:border-5 focus:text-[#716F87]`}
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <input
                  type="email"
                  placeholder=" ایمیل :"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm w-[45%] text-right text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2]  focus:border-5 focus:text-[#716F87]`}
                />
              </div>
              {error1 && (
                <p
                  className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}
                >
                  {error1}
                </p>
              )}
              <div className="w-full flex items-center justify-start mb-3">
                <input
                  type="tel"
                  placeholder="شماره تماس:"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm w-[45%] ml-5 text-left text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2]  focus:border-5 focus:text-[#716F87]`}
                />
                <input
                  type="text"
                  placeholder=" موضوع :"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm w-[45%] text-right text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2]  focus:border-5 focus:text-[#716F87]`}
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
                className={`bg-[#F2F2F2] px-3 py-3 rounded-xl text-sm w-[93%] h-[150px] text-right text-[#716F87] ${DanaBold.className} focus:outline-none focus:border focus:border-[#F2F2F2]  focus:border-5 focus:text-[#716F87] mb-2`}
              ></textarea>
              {error3 && (
                <p
                  className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}
                >
                  {error3}
                </p>
              )}

              <button
                className={`${DanaRegular.className}  py-2 px-7 rounded-xl bg-[#5E71FF] text-white`}
                type="submit"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
        {/* section img*/}
      </div>
    </section>
  );
};

export default page;
