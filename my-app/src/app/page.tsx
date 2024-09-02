"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import localFont from 'next/font/local'
import Bodymain from "@/components/main/Bodymain";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";

const MorabbaLight = localFont({
    src: '../../public/fonts/Morabba/woff2/Morabba-Light.woff2'
})

const DanaRegular = localFont({
    src: '../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2'
})

const DanaBold = localFont({
    src: '../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2'
})

const DanaMedium = localFont({
    src: "../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
})

const Morabbamedium = localFont({
    src: '../../public/fonts/Morabba/woff2/Morabba-Medium.woff2'
})
export default function page() {
    return (
        <div className={` ${DanaMedium.className} xs:w-[84%] w-[91%]  m-auto `}>
            <section className="flex flex-col xs:flex-row gap-x-10 justify-between items-center">
                {/* tittle */}
                <div className="xs:w-[50%] w-full">
                    <h4 className={`text-sky-950 text-[22px] xs:text-[32px] ${DanaBold.className} tracking-tight`}>
                        ما رویاهای شما عزیزان
                    </h4>
                    <h4 className={`text-sky-950 text-[22px] xs:text-[32px] ${DanaBold.className} tracking-tight`}>
                        را خلق و به <span className="text-blue-600">واقعـیت</span> تبدیل میکنیم
                    </h4>
                    <p className="text-gray-400 text-[11px] xs:text-[14px] mt-4 mb-6 text-justify xs:leading-8 leading-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
                        و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود است.
                    </p>
                    <div className="flex items-center gap-x-6">
                        <Link
                            href="/about"
                            className="bg-gradient-to-br from-purple-600 to-blue-400 text-white px-3 xs:px-6 rounded-xl py-2 text-[13px]"
                        >
                            مشاهده خدمات
                        </Link>
                        <div className="flex items-center gap-x-2">
                            <Image
                                src="/img/about/Play.png"
                                className="w-[20px] xs:w-[40px] h-[20px] xs:h-[40px]"
                                width={1000}
                                height={1000}
                                alt="Play Icon"
                            />
                            <Link
                                href=""
                                className={`text-[11px] xs:text-[14px] ${DanaBold.className} border-b-2 border-b-sky-600`}
                            >
                                ویدیو معرفی
                            </Link>
                        </div>
                    </div>
                </div>
                {/* picture */}
                <div className="relative xs:mt-0 mt-12">
                    <Image
                        src="/img/main/workspace2.png"
                        className="w-full xs:w-[550px]"
                        width={1000}
                        height={1000}
                        alt="Workspace"
                    />
                    <div className="absolute top-[65%] left-0 flex flex-col items-center justify-between p-3 rounded-2xl bg-white/60 shadow-2xl xs:w-[172px] w-[144px] xs:h-auto h-[107px]">
                        <h2 className="text-blue-600 text-[11px] xs:text-[14px]">بازدید از شما</h2>
                        <Image
                            src="/img/main/Group-21.png"
                            className="w-[30px] xs:w-[60px] h-[30px] xs:h-[50px] xs:my-3"
                            width={1000}
                            height={1000}
                            alt="Group Icon"
                        />
                        <h2 className="text-blue-600 text-[11px] xs:text-[14px]">به مرز انفجار خواهد رسید</h2>
                    </div>
                </div>
            </section>
            {/* section company */}
            <section className="mt-6 flex flex-col">
                <h2 className="text-blue-600 text-center text-[13px] xs:text-[16px]">
                    شرکت هایی که به ما اعتماد کردند!
                </h2>
                <div className="mt-10 flex flex-col xs:flex-row items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center w-[100px] xs:w-[260px] h-[53px] mb-10 xs:mb-0">
                        <Link href="/">
                            <Image
                                src="/img/main/client-5.png"
                                className="opacity-50 hover:opacity-100 transition-all"
                                width={130}
                                height={1000}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[100px] xs:w-[260px] h-[53px]  xs:flex mb-10 xs:mb-0">
                        <Link href="/">
                            <Image
                                src="/img/main/clienty-2.png"
                                className="opacity-50 hover:opacity-100 transition-all"
                                width={130}
                                height={1000}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[100px] xs:w-[260px] h-[53px]  xs:flex mb-10 xs:mb-0">
                        <Link href="/">
                            <Image
                                src="/img/main/clienty-3.png"
                                className="opacity-50 hover:opacity-100 transition-all"
                                width={100}
                                height={1000}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[100px] xs:w-[260px] h-[53px] mb-10 xs:mb-0">
                        <Link href="/">
                            <Image
                                src="/img/main/clienty-4.png"
                                className="opacity-50 hover:opacity-100 transition-all"
                                width={100}
                                height={1000}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[100px] xs:w-[260px] h-[53px]  xs:flex">
                        <Link href="/">
                            <Image
                                src="/img/main/client-1.png"
                                className="opacity-50 hover:opacity-100 transition-all"
                                width={100}
                                height={1000}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                </div>
            </section>
            {/* section servicec */}
            <section className={'xs:flex xs:mt-28 mt-20 gap-x-10 justify-between items-center'}>    
                <div className={'xs:w-[50%] w-full'}>
                    <div>
                        <Link href={'/'}
                              className={'xs:text-sm text-xs text-sky-600 bg-[#FECBF8] inline-block m-auto xs:px-5 px-3 py-1 rounded-full'}>
                            نظرات
                        </Link>
                        <h5 className={`text-[20px] my-4 ${DanaBold.className}`}>برخی از خدماتی که ما به شما ارائه
                            میدهیم</h5>
                        <p className="text-gray-400 xs:text-[14px] text-[11px] mt-4 mb-6 xs:leading-8 leading-5 text-justify">لورم
                            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در
                            شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                        </p>
                        <Link href={'/services'}>
                            <button className={' bg-gradient-to-br from-purple-600 to-blue-400 text-white xs:px-6 px-3 rounded-xl py-2 text-[13px] transform hover:scale-110 transition hover:duration-200'}>
                                مشاهده همه خدمات
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={'xs:w-[50%] xs:mt-0 mt-10 w-full'}>
                    <div className={'flex items-center justify-between gap-x-3'}>
                        <div
                            className={'w-[50%]  gap-x-3 flex xs:flex-row flex-col items-center justify-between p-4 bg-white shadow-sm rounded-2xl hover:bg-[#616FFD] transition-all  cursor-pointer hover:text-white '}>
                            <div>
                                <Image src={'/img/main/13.-Target.png'}
                                       className='xs:h-[57px] h-[36px] xs:w-[160px] w-[36px]'
                                       width={1000}
                                       height={1000} alt='Logo'/>
                            </div>
                            <div className={'xs:inline-block flex flex-col items-center'}>
                                <h4 className={'xs:text-[15px] text-[12px]'}>تبلیغات هدفمند</h4>
                                <p className={'xs:text-[12px] text-[10px] text-gray-400 text-justify mt-1 '}>لورم
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                    از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </div>
                        <div
                            className={'w-[50%] xs:mb-5 gap-x-3 flex xs:flex-row flex-col items-center justify-between p-4 bg-white shadow-sm rounded-2xl hover:bg-[#616FFD] transition-all cursor-pointer hover:text-white '}>
                            <div>
                                <Image src={'/img/main/28.-Upload.png'}
                                       className='xs:h-[57px] h-[36px] xs:w-[160px] w-[36px]'
                                       width={1000}
                                       height={1000} alt='Logo'/>
                            </div>
                            <div className={'xs:inline-block flex flex-col items-center'}>
                                <h4 className={'xs:text-[15px] text-[12px]'}>طراحی سایت شما</h4>
                                <p className={'xs:text-[12px] text-[10px] text-gray-400 text-justify mt-1 '}>لورم
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                    از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </div>
                    </div>
                    <div className={'flex items-center mt-4 justify-between gap-x-3'}>
                        <div
                            className={'w-[50%] gap-x-3 flex xs:flex-row flex-col items-center justify-between p-4 bg-white shadow-sm rounded-2xl hover:bg-[#616FFD] transition-all cursor-pointer hover:text-white '}>
                            <div>
                                <Image src={'/img/main/30.-Palette.png'}
                                       className='xs:h-[57px] h-[36px] xs:w-[160px] w-[36px]'
                                       width={1000}
                                       height={1000} alt='Logo'/>
                            </div>
                            <div className={'xs:inline-block flex flex-col items-center'}>
                                <h4 className={'xs:text-[15px] text-[12px]'}>افزایش رتبه سایت</h4>
                                <p className={'xs:text-[12px] text-[10px] text-gray-400 text-justify mt-1 '}>لورم
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                    از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </div>
                        <div
                            className={'w-[50%] xs:mb-5 gap-x-3 flex xs:flex-row flex-col items-center justify-between p-4 bg-white shadow-sm rounded-2xl hover:bg-[#616FFD] transition-all cursor-pointer hover:text-white'}>
                            <div>
                                <Image src={'/img/main/55.-Briefcase.png'}
                                       className='xs:h-[57px] h-[36px] xs:w-[160px] w-[36px]'
                                       width={1000}
                                       height={1000} alt='Logo'/>
                            </div>
                            <div className={'xs:inline-block flex flex-col items-center'}>
                                <h4 className={'xs:text-[15px] text-[12px]'}>بهینه سازی سرعت</h4>
                                <p className={'xs:text-[12px] text-[10px] text-gray-400 text-justify mt-1 '}>لورم
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                    از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section projocts */}
            <section className="bg-[#725DF5] mt-28 w-full rounded-3xl p-3">
                <div className="flex flex-col items-center justify-center mt-3">
                    <Link
                    href={'/'}
                    className="text-xs xs:text-sm text-sky-600 bg-[#FECBF8] inline-block m-auto px-3 py-1 xs:px-5 rounded-full"
                    >
                    نمونه کار ما
                    </Link>
                    <h4 className="text-sm xs:text-[20px] text-white mt-2 xs:mt-4">برخی از نمونه کارهای ما</h4>
                </div>
                <div className="w-full flex flex-col items-center xs:grid xs:grid-cols-1 gap-4">
                    <Bodymain />
                </div>
            </section>

            {/* section think */}
            <section className={'xs:flex xs:gap-x-[150px] justify-between items-center xs:mt-32 mt-16'}>
                {/* tittle */}
                <div className={'xs:w-[50%] w-full'}>
                    <h4 className={'xs:text-[20px] text-[16px]'}>آیا شماهم به فکر داشتن یک وبسایت هستین ؟</h4>
                    <p className={'text-gray-400 xs:text-[14px] text-[11px] mt-4 mb-6 xs:leading-8 leading-5 text-justify'}>لورم
                        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                        گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                    </p>
                    {/* numbering main */}
                    <div className={'flex items-center justify-between gap-x-3'}>
                        {/* numbering col */}
                        <div className={'flex  w-full flex-col items-center justify-between gap-y-3'}>
                            <div
                                className={'gap-x-3  xs:gap-x-0 w-full flex items-center justify-between xs:p-4 p-3 bg-white shadow-md rounded-2xl transition-all'}>
                                <div
                                    className={'border border-blue-500 rounded-full w-[32px] flex items-center justify-center h-[32px]'}>
                                    <h5>01</h5>
                                </div>
                                <div className={'xs:inline-block '}>
                                    <h4 className={'xs:text-[15px] text-[12px]'}>صرفه جویی در وفت</h4>
                                    <p className={'xs:text-[12px] text-[10px] text-gray-400 text-justify mt-1 '}>لورم
                                        ایپسوم متن ساختگی با تولید میباشد.</p>
                                </div>
                            </div>
                            <div
                                className={'gap-x-3  xs:gap-x-0 w-full flex items-center justify-between xs:p-4 p-3 bg-white shadow-md rounded-2xl transition-all'}>
                                <div
                                    className={'border border-blue-500 rounded-full w-[32px] flex items-center justify-center h-[32px]'}>
                                    <h5>02</h5>
                                </div>
                                <div className={'xs:inline-block'}>
                                    <h4 className={'xs:text-[15px] text-[12px]'}>کیفیت بالای خروجی</h4>
                                    <p className={'xs:text-[12px] text-[10px] text-gray-400 text-justify mt-1 '}>لورم
                                        ایپسوم متن ساختگی با تولید میباشد.</p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex mt-10 w-full  flex-col items-center justify-between gap-y-3'}>
                            <div
                                className={'gap-x-3  xs:gap-x-0 w-full flex items-center justify-between xs:p-4 p-3 bg-white shadow-md rounded-2xl transition-all'}>
                                <div
                                    className={'border border-blue-500 rounded-full w-[32px] flex items-center justify-center h-[32px]'}>
                                    <h5>03</h5>
                                </div>
                                <div className={'xs:inline-block'}>
                                    <h4 className={'xs:text-[15px] text-[12px]'}>آموزش مدیریت سایت</h4>
                                    <p className={'xs:text-[12px] text-[10px] text-gray-400 text-justify mt-1 '}>لورم
                                        ایپسوم متن ساختگی با تولید میباشد.</p>
                                </div>
                            </div>
                            <div
                                className={'gap-x-3  xs:gap-x-0 w-full flex items-center justify-between xs:p-4 p-3 bg-white shadow-md rounded-2xl transition-all'}>
                                <div
                                    className={'border border-blue-500 rounded-full w-[32px] flex items-center justify-center h-[32px]'}>
                                    <h5>04</h5>
                                </div>
                                <div className={'xs:inline-block'}>
                                    <h4 className={'xs:text-[15px] text-[12px]'}>پشتیبانی چند ماهه</h4>
                                    <p className={'xs:text-[12px] text-[10px] text-gray-400 text-justify mt-1 '}>لورم
                                        ایپسوم متن ساختگی با تولید میباشد.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex items-center gap-x-6 mt-6'}>
                        <Link href={'/contact-us'}>
                            <button className={' bg-gradient-to-br from-purple-600 to-blue-400 text-white xs:px-6 px-3 rounded-xl py-2 text-[13px] transform hover:scale-110 transition hover:duration-200'}>
                                مشاهده خدمات
                            </button>
                        </Link>
                    </div>
                </div>
                {/* picture */}
                <div className={'xs:w-[50%] w-full xs:mt-0 mt-12'}>
                    <div
                        className={'relative bg-gradient-to-tr from-purple-400 to-blue-300 rounded-full xs:w-[400px] w-[300px] xs:h-[400px] h-[300px] m-auto'}>
                        <div className={'absolute w-[450px]'}>
                            <Image src={'/img/main/Group-28-1024x897.png'}
                                   className='xs:w-[450px] w-[300px] xs:h-[400px] h-[300px]' width={1000} height={1000}
                                   alt='Logo'/>
                        </div>
                        <Image src={'/img/main/Rectangle-28.png'}
                               className='xs:w-[103px] w-[90px] xs:h-[121px] h-[110px]  rotate-[23deg]' width={1000}
                               height={1000} alt='Logo'/>
                        <div className={'relative '}>
                            <Image src={'/img/main/Rectangle-28.png'}
                                   className='xs:w-[102px] w-[90px]  xs:h-[97px] h-[90px] absolute left-0 xs:top-[222px] top-[130px]'
                                   width={1000} height={1000} alt='Logo'/>
                            <div
                                className={'xs:w-[255px] w-[184px] xs:h-auto  h-[107px] shadow-2xl absolute xs:left-[240px] xs:top-[160px] top-[130px] flex flex-col items-center justify-between p-3 rounded-2xl bg-white/60'}>
                                <h4 className={'xs:text-[19px] text-[15px] text-sky-950'}>تیم خلاق ما</h4>
                                <Image src={'/img/main/Group-969.png'}
                                       className='w-[190px]]'
                                       width={1000} height={1000} alt='Logo'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section tittle */}
            <section className={'flex flex-col items-center justify-center mt-24'}>
                <Link href={'/'}
                      className={'xs:text-sm text-xs text-sky-600 bg-[#FECBF8] inline-block m-auto xs:px-5 px-3 py-1 rounded-full'}>
                    تعرفه ها
                </Link>
                <h4 className={'xs:text-[20px] text-sm xs:mt-4 mt-2'}>تعرفه‌ی خدمات ما</h4>
            </section>
            {/* section services btn */}
            <section className={'flex items-center  w-[331px] h-[48px] bg-gray-200 rounded-full mt-10 m-auto p-2'}>
                <div className={'flex items-center justify-center gap-x-2 px-2 py-1 rounded-full w-[177px] bg-white'}>
                    <Image src={'/img/main/test.svg'}
                           className='w-[25px] h-[25px]' width={1000} height={1000}
                           alt='Logo'/>
                    <h4 className={'text-[12px] text-blue-500'}>خدمات طراحی سایت</h4>
                </div>
                <div className={'flex items-center justify-center gap-x-2 px-2 py-1 w-[177px] '}>
                    <Image src={'/img/main/test2.svg'}
                           className='w-[25px] h-[25px]' width={1000} height={1000}
                           alt='Logo'/>
                    <h4 className={'text-[12px] text-blue-500'}>خدمات سئو</h4>
                </div>
            </section>
            {/* section services */}
            <section className={'xs:flex items-center justify-between bg-gradient-to-tr from-purple-700 to-blue-400 xs:mt-28 mt-16 h-[328px] w-full rounded-3xl p-8'}>
                <div
                    className={'w-full xs:w-[346px] hover:bg-gray-100 transition-all xs:mt-20 h-[410px] flex flex-col items-center rounded-2xl bg-white shadow-sm p-4'}>
                    <h4 className={`text-[12px] text-[#1469EB] ${DanaBold.className}`}>طرح ویژه</h4>
                    <div className={'flex items-center gap-x-2  pb-5'}>
                        <h5 className={'text-[23px]'}>24,000,000</h5>
                        <span className={'inline-block text-gray-400 text-[11px]'}>تومان</span>
                    </div>
                    <p className={'text-[11px] text-gray-400 border-t border-t-gray-200 pt-3 text-center'}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                        است </p>
                    {/* check box */}
                    <div className={'flex flex-col items-center justify-between space-y-4 mt-4'}>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>سرعت مناسب</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>سرعت و طراحی سایت خوب</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>پشتیبانی ماهانه</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>اضافه کردن محصولات</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>طراحی گرافیکی</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>خرید هاست دامنه</span>
                        </div>
                    </div>
                    <Link href={'/'} className={'text-white bg-[#1469EB] text-[13px] mt-4 rounded-md inline-block px-5 py-1 btn-shadow'}>مشاهده و سفارش</Link>
                </div>
                <div
                    className={'hidden w-[346px] hover:bg-gray-100 transition-all mt-20 h-[410px] xs:flex flex-col items-center rounded-2xl bg-white shadow-sm p-4'}>
                    <h4 className={`text-[12px] text-[#1469EB] ${DanaBold.className}`}>طرح ویژه</h4>
                    <div className={'flex items-center gap-x-2  pb-5'}>
                        <h5 className={'text-[23px]'}>24,000,000</h5>
                        <span className={'inline-block text-gray-400 text-[11px]'}>تومان</span>
                    </div>
                    <p className={'text-[11px] text-gray-400 border-t border-t-gray-200 pt-3 text-center'}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                        است </p>
                    {/* check box */}
                    <div className={'flex flex-col items-center justify-between space-y-4 mt-4'}>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>سرعت مناسب</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>سرعت و طراحی سایت خوب</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>پشتیبانی ماهانه</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>اضافه کردن محصولات</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>طراحی گرافیکی</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>خرید هاست دامنه</span>
                        </div>
                    </div>
                    <Link href={'/'} className={'text-white bg-[#1469EB] text-[13px] mt-4 rounded-md inline-block px-5 py-1 btn-shadow'}>مشاهده و سفارش</Link>
                </div>
                <div
                    className={'hidden w-[346px] hover:bg-gray-100 transition-all mt-20 h-[410px] xs:flex flex-col items-center rounded-2xl bg-white shadow-sm p-4'}>
                    <h4 className={`text-[12px] text-[#1469EB] ${DanaBold.className}`}>طرح ویژه</h4>
                    <div className={'flex items-center gap-x-2  pb-5'}>
                        <h5 className={'text-[23px]'}>24,000,000</h5>
                        <span className={'inline-block text-gray-400 text-[11px]'}>تومان</span>
                    </div>
                    <p className={'text-[11px] text-gray-400 border-t border-t-gray-200 pt-3 text-center'}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                        است </p>
                    {/* check box */}
                    <div className={'flex flex-col items-center justify-between space-y-4 mt-4'}>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>سرعت مناسب</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>سرعت و طراحی سایت خوب</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>پشتیبانی ماهانه</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>اضافه کردن محصولات</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/check-.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>طراحی گرافیکی</span>
                        </div>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/main/svgexport-17-10.svg'}
                                   className='w-[20px] h-[20px]' width={1000} height={1000}
                                   alt='Logo'/>
                            <span className={`inline-block ${DanaBold.className} text-[12px] text-gray-500`}>خرید هاست دامنه</span>
                        </div>
                    </div>
                    <Link href={'/'} className={'text-white bg-[#1469EB] text-[13px] mt-4 rounded-md inline-block px-5 py-1 btn-shadow'}>مشاهده و سفارش</Link>
                </div>
            </section>
            {/* section tittle */}
            <section className={'flex flex-col items-center justify-center mt-[200px]'}>
                <Link href={'/'}
                      className={'xs:text-sm text-xs text-sky-600 bg-[#FECBF8] inline-block m-auto xs:px-5 px-3 py-1 rounded-full'}>
                    نظرات
                </Link>
                <h4 className={'xs:text-[20px] text-sm xs:mt-4 mt-2'}>آخرین مقالات ما</h4>
            </section>
            {/* section blog */}
            <section className={'xs:flex items-center justify-between mt-12 xs:mb-24'}>
                <div className='xs:w-[65%]  p-4 w-full xs:mx-0 mx-3'>
                    <p className='text-[11px] text-gray-600'>21 سپتامبر 2023</p>
                    <Link href={''} className='xs:text-[15px] text-sm xs:my-3 my-1 block line-clamp-1'>نکاتی در رابطه با  قرارداد طراحی گرافیک و تعیین مبلغ طراحی</Link>
                    <p className={`text-gray-400 ${DanaRegular.className} text-[13px] xs:leading-6 line-clamp-2`}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی شهر شما هم آشنایی...</p>
                    <Link href={'/'} className='text-[#5e71ff] inline-flex items-center mt-2 text-xs'>
                        <span>مشاهده بیشتر</span>
                        <TrendingFlatOutlinedIcon className='rotate-180'/>
                    </Link>
                </div>
                <div className='xs:w-[65%] px-4 py-7 xs:my-0 my-8 blog-back1 rounded-2xl text-white w-full xs:mx-8 mx-0 '>
                    <p className='text-[11px] text-white'>21 سپتامبر 2023</p>
                    <Link href={''} className='xs:text-[15px] text-sm xs:my-3 my-1 block line-clamp-1'>نکاتی در رابطه با  قرارداد طراحی گرافیک و تعیین مبلغ طراحی</Link>
                    <p className={`text-white ${DanaRegular.className} text-[13px] xs:leading-6 line-clamp-2`}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی شهر شما هم آشنایی...</p>
                    <Link href={'/'} className=' bg-gradient-to-br from-purple-600 to-blue-400 text-white px-5 py-[3px] mt-5 rounded-md text-[10px] inline-block'>
                        <span>مشاهده بیشتر</span>
                        <TrendingFlatOutlinedIcon className='rotate-180'/>
                    </Link>
                </div>
                <div className='xs:w-[65%] p-4 w-full xs:mx-0 mx-3'>
                    <p className='text-[11px] text-gray-600'>21 سپتامبر 2023</p>
                    <Link href={''} className='xs:text-[15px] text-sm xs:my-3 my-1 block line-clamp-1'>نکاتی در رابطه با  قرارداد طراحی گرافیک و تعیین مبلغ طراحی</Link>
                    <p className={`text-gray-400 ${DanaRegular.className} text-[13px] xs:leading-6 line-clamp-2`}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی شهر شما هم آشنایی...</p>
                    <Link href={'/'} className='text-[#5e71ff] inline-flex items-center mt-2 text-xs'>
                        <span>مشاهده بیشتر</span>
                        <TrendingFlatOutlinedIcon className='rotate-180'/>
                    </Link>
                </div>
            </section>
        </div>
    )
}
