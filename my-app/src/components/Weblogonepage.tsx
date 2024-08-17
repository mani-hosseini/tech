"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductService2 from "@/components/ProductService2";


import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";


export default function page() {
    return (
        <div>
            <section className={'flex justify-between  gap-x-3'}>
                {/* 80% */}
                <div className={'bg-white rounded-xl w-[78%] shadow-cyan-100 p-6 border border-gray-200'}>
                    <Image src={'/img/weblog/753-1970x1103-1-1024x573.jpg'} className={'w-full h-[350px] rounded-xl'}
                           width={10000} height={1000} alt='Logo'/>
                    <h4 className={`mt-3 bg-gradient-to-b from-purple-500 to-blue-500 text-[19px] block text-transparent bg-clip-text`}>معرفی
                        پنج ایده جدید برای طراحی Ui , Ux</h4>
                    <div className={'flex items-center justify-between mt-4 mb-6 border-b border-b-gray-200 pb-4'}>
                        <div className={'text-gray-300 flex items-center gap-x-3  text-[12px]'}>
                            <div className={'flex items-center'}>
                                <RoomOutlinedIcon/>
                                <span className={' inline-block'}>21 سپتامبر 2023</span>
                            </div>
                            <div className={'flex items-center'}>
                                <TrendingFlatOutlinedIcon className={'rotate-180'}/>
                                <span className={' inline-block'}>  یک دیدگاه  </span>
                            </div>
                        </div>
                        <div className={'text-xs'}>
                            <TelegramIcon
                                className={'text-[14px] mx-[2px] text-gray-400 hover:text-purple-400 cursor-pointer transition-all'}/>
                            <WhatsAppIcon
                                className={'text-[14px] mx-[2px] text-gray-400 hover:text-purple-400 cursor-pointer transition-all'}/>
                            <TwitterIcon
                                className={'text-[14px] mx-[2px] text-gray-400 hover:text-purple-400 cursor-pointer transition-all'}/>
                            <FacebookOutlinedIcon
                                className={'text-[14px] mx-[2px] text-gray-400 hover:text-purple-400 cursor-pointer transition-all'}/>
                        </div>
                    </div>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر
                        شده و به اماکن تاریخی، فرهنگی و دیدنی
                        شهر شما هم آشنایی ندارد؛ اما این شهر دارای آثار بسیار معروفی است که شهره عام و خاص شده و همه را از
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        همین خاطر شروع می‌کند به پرسیدن از مردم شهر و آنها نشانی یک مکان دیدنی را به او می‌دهند! توریست با
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                    </p>
                    <p className={'text-gray-500 my-3 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد
                        شهر شده و به اماکن تاریخی، فرهنگی و دیدنی
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                    </p>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر
                        شده و به اماکن تاریخی، فرهنگی و دیدنی
                        شهر شما هم آشنایی ندارد؛ اما این شهر دارای آثار بسیار معروفی است که شهره عام و خاص شده و همه را از
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                    </p>
                    <h3 className={'text-[22px] my-5'}>استراتژی لینک سازی خارجی چیست؟</h3>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر
                        شده و به اماکن تاریخی، فرهنگی و دیدنی
                        شهر شما هم آشنایی ندارد؛ اما این شهر دارای آثار بسیار معروفی است که شهره عام و خاص شده و همه را از
                    </p>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی
                        شهر شما هم آشنایی ندارد؛ اما این شهر دارای آثار بسیار معروفی است که شهره عام و خاص شده و همه را از
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                    </p>
                    <h3 className={'text-[22px] my-5'}>۱- محتوای یونیک و منحصربه‌فرد تولید کنید</h3>
                    <p className={'text-gray-500 my-3 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد
                        شهر شده و به اماکن تاریخی، فرهنگی و دیدنی
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                    </p>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر
                        شده و به اماکن تاریخی، فرهنگی و دیدنی
                        شهر شما هم آشنایی ندارد؛ اما این شهر دارای آثار بسیار معروفی است که شهره عام و خاص شده و همه را از
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        همین خاطر شروع می‌کند به پرسیدن از مردم شهر و آنها نشانی یک مکان دیدنی را به او می‌دهند! توریست با
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                    </p>
                    <p className={'text-gray-500 my-3 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد
                        شهر شده و به اماکن تاریخی، فرهنگی و دیدنی
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                    </p>
                    <h3 className={'text-[22px] my-5'}>۲- شبکه‌سازی کنید</h3>
                    <p className={'text-gray-500 my-3 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد
                        شهر شده و به اماکن تاریخی، فرهنگی و دیدنی
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                    </p>
                    <h3 className={'text-[22px] my-5'}>۳- پست مهمان بنویسید</h3>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر
                        شده و به اماکن تاریخی، فرهنگی و دیدنی
                        شهر شما هم آشنایی ندارد؛ اما این شهر دارای آثار بسیار معروفی است که شهره عام و خاص شده و همه را از
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                        همین خاطر شروع می‌کند به پرسیدن از مردم شهر و آنها نشانی یک مکان دیدنی را به او می‌دهند! توریست با
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                    </p>
                    <h3 className={'text-[22px] my-5'}>۴- رپورتاژ آگهی منتشر کنید</h3>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر
                        شده و به اماکن تاریخی، فرهنگی و دیدنی
                    </p>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی
                        شهر شما هم آشنایی ندارد؛ اما این شهر دارای آثار بسیار معروفی است که شهره عام و خاص شده و همه را از
                        خودش فکر می‌کند که اینجا حتماً ارزش دیدن را دارد.
                        تمام نقاط به آنجا می‌کشاند! گردشگر دوست دارد جاهای دیدنی شهر را ببیند؛ اما اطلاع درستی ندارد؛ به
                    </p>
                    <p className={'text-gray-500 leading-6 text-justify text-[13px]'}>در نظر بگیرید که یک گردشگر وارد شهر
                        شده و به اماکن تاریخی، فرهنگی و دیدنی
                        شهر شما هم آشنایی ندارد؛
                    </p>
                </div>
                {/* 20% */}
                <div className={' w-[22%] sticky top-[20%]'}>
                    <div className={'bg-white rounded-md shadow-cyan-100 p-4 w-full border border-r-gray-200'}>
                        <h5 className={`text-[13px]`}>آنچه در این مطلب میخوانید !</h5>
                        <Link href={'/'}
                              className={'text-[13px] text-gray-400 hover:text-[#5E71FF] inline-block mt-3 transition-all'}>استراتژی
                            لینک سازی خارجی چیست؟</Link>
                        <Link href={'/'}
                              className={'text-[13px] text-gray-400 hover:text-[#5E71FF] inline-block mt-2 transition-all'}>تنظیم
                            استراتژی لینک سازی خارجی</Link>
                        <Link href={'/'}
                              className={'text-[13px] text-gray-400 hover:text-[#5E71FF] inline-block mt-2 transition-all'}>۱-
                            محتوای یونیک و منحصربه‌فرد تولید کنید</Link>
                        <Link href={'/'}
                              className={'text-[13px] text-gray-400 hover:text-[#5E71FF] inline-block mt-2 transition-all'}>۲-
                            شبکه‌سازی کنید</Link>
                        <Link href={'/'}
                              className={'text-[13px] text-gray-400 hover:text-[#5E71FF] inline-block mt-2 transition-all'}>۳-
                            پست مهمان بنویسید</Link>
                        <Link href={'/'}
                              className={'text-[13px] text-gray-400 hover:text-[#5E71FF] inline-block mt-2 transition-all'}>۴-
                            رپورتاژ آگهی منتشر کنید</Link>
                    </div>
                    <div className={'bg-white rounded-md shadow-cyan-100 w-full border border-r-gray-200 mt-8'}>
                        <Image src={'/img/services/DSCF3903-scaled-2-1024x683.webp'} className={'w-full rounded-t-md'}
                               width={10000} height={10000} alt='Logo'></Image>
                        <div className={'w-[90%] bg-white relative shadow-cyan-100 p-3 rounded-b-md'}>
                            <h4>طراحی وبسایت وردپرس</h4>
                            <p className={'text-[12px] text-gray-400 mt-1 line-clamp-2 text-justify'}>لورم ایپسوم متن ساختگی
                                با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...</p>
                            <Link href={'/'} className='text-[#5e71ff] inline-flex items-center mt-2 text-xs'>
                                <span>مشاهده بیشتر</span>
                                <TrendingFlatOutlinedIcon className='rotate-180'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Image src={'/img/weblog/single-post-banner-1.png'} className={'mt-10'} width={10000} height={10000} alt='Logo'></Image>

        </div>

    )
}
