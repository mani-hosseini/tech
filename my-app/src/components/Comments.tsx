import React, { useState, FormEvent } from "react";
import localFont from "next/font/local";

const DanaRegular = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
});

const DanaBold = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
});

const DanaMedium = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
});

const Comments: React.FC = () => {

  const [InputValue, setInputValue] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [ErrorInput, setErrorInput] = useState<string>("");
  const [site, setSite] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [ErrorEmail, setErrorEmail] = useState<string>("");
  const [ErrorSite, setErrorSite] = useState<string>("");
  const [ErrorText, setErrorText] = useState<string>("");

 

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!InputValue) {
      setErrorInput("لطفا قسمت نام و نام خانوادگی را پر کنید");
      return;
    } else if (InputValue.length < 5) {
      setErrorInput("لطفا بیشتر از 5 حرف وارد کنید");
      return;
    }

    if (!Email) {
      setErrorEmail("لطفا این قسمت ایمیل را پر کنید");
      return;
    } else if (!Email.includes("@")) {
      setErrorEmail("ایمیل باید شامل کارکتر @ باشد.");
      return;
    } else if (!Email.endsWith("gmail.com")) {
      setErrorEmail("ایمیل شما باید خاتمه آن از gmail.com استفاده شده باشد.");
      return;
    }

    if (!site) {
      setErrorSite("لطفا این قسمت موضوع را پر کنید");
      return;
    } else if (site.length < 5) {
      setErrorSite("لطفا بیشتر از 5 حرف وارد کنید");
      return;
    }

    if (!text) {
      setErrorText("لطفا این قسمت پیغام را پر کنید");
      return;
    } else if (text.length < 5) {
      setErrorText("لطفا بیشتر از 5 حرف وارد کنید");
      return;
    }

    setErrorEmail("");
    setErrorInput("");
    setErrorSite("");
    setErrorText("");

  };

  return (
    <div className="p-3 flex flex-col">
      <h1 className={`${DanaBold.className} mb-2`}>دیدگاهتان را بنویسید</h1>
      <span className={`${DanaMedium.className} text-gray-500 text-sm mb-2`}>
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *
      </span>
      <form className="flex flex-col" onSubmit={handelSubmit}>
        <label
          htmlFor="text"
          className={`${DanaMedium.className} text-xs text-gray-500 mb-2`}
        >
          دیدگاه *
        </label>
        <textarea
          name="text"
          className="bg-[#F7F8FA] h-[200px] rounded-xl px-4 py-2 mb-4"
          maxLength={65566}
          required
          cols={45}
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {ErrorText && (
          <p className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}>
            {ErrorText}
          </p>
        )}
        <label
          htmlFor="name"
          className={`${DanaMedium.className} text-xs text-gray-500 mb-3`}
        >
          نام *
        </label>
        <input
          type="text"
          name="name"
          className="bg-[#F7F8FA] h-[50px] rounded-xl px-4 py-2 mb-2"
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {ErrorInput && (
          <p className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}>
            {ErrorInput}
          </p>
        )}
        <label
          htmlFor="email"
          className={`${DanaMedium.className} text-xs text-gray-500 mb-3`}
        >
          ایمیل *
        </label>
        <input
          type="email"
          name="email"
          className="bg-[#F7F8FA] h-[50px] rounded-xl px-4 py-2 mb-2"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {ErrorEmail && (
          <p className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}>
            {ErrorEmail}
          </p>
        )}
        <label
          htmlFor="site"
          className={`${DanaMedium.className} text-xs text-gray-500 mb-3`}
        >
          وب‌ سایت
        </label>
        <input
          type="text"
          name="site"
          className="bg-[#F7F8FA] h-[50px] rounded-xl px-4 py-2 mb-2"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />
        {ErrorSite && (
          <p className={`${DanaRegular.className} text-red-500 mt-2 text-sm`}>
            {ErrorSite}
          </p>
        )}
        <div className="flex items-center mt-3">
          <input type="checkbox" />
          <span
            className={`${DanaMedium.className} mr-1 text-gray-500 text-xs`}
          >
            ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
            می‌نویسم.
          </span>
        </div>
        <button
          type="submit"
          className={`${DanaBold.className} text-sm bg-blue-600 w-[130px] mt-5 px-2 py-2 rounded-lg text-white hover:bg-black hover:transition  hover:duration-500`}
        >
          فرستادن دیدگاه
        </button>
      </form>
    </div>
  );
};

export default Comments;




