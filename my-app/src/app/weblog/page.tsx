"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import localFont from 'next/font/local'

const MorabbaLight = localFont({
    src: '../../../public/fonts/Morabba/woff2/Morabba-Light.woff2'
})

const DanaRegular = localFont({
    src: '../../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2'
})

const DanaBold = localFont({
    src: '../../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2'
})

const DanaMedium = localFont({
    src: "../../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
})

const Morabbamedium = localFont({
    src: '../../../public/fonts/Morabba/woff2/Morabba-Medium.woff2'
})

import Cart from '@mui/icons-material/ShoppingCartOutlined';
import Com from '@mui/icons-material/CommentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

export default function Weblogpage() {
    return (
        <div className={` ${DanaMedium.className} xs:w-[84%] w-[91%]  m-auto `}>
            <section className={'xs:flex justify-between '}>
                {/* section side */}
                <section className={'xs:mb-0 mb-8 xs:h-min xs:w-[190px] w-full bg-white shadow rounded-xl p-4'}>
                    <div className={'flex items-center gap-x-2 mb-6'}>
                        <span className={'block bg-[#5E71FF] w-1 h-1 rounded-full'}></span>
                        <Link href={''} className={'text-gray-500 text-sm'}>طراحی گرافیک</Link>
                    </div>
                    <div className={'flex items-center gap-x-2 mb-6'}>
                        <span className={'block bg-[#5E71FF] w-1 h-1 rounded-full'}></span>
                        <Link href={''} className={'text-gray-500 text-sm'}>طراحی سایت</Link>
                    </div>
                    <div className={'flex items-center gap-x-2 mb-6'}>
                        <span className={'block bg-[#5E71FF] w-1 h-1 rounded-full'}></span>
                        <Link href={''} className={'text-gray-500 text-sm'}>طراحی Ui , Ux</Link>
                    </div>
                    <div className={'flex items-center gap-x-2 mb-6'}>
                        <span className={'block bg-[#5E71FF] w-1 h-1 rounded-full'}></span>
                        <Link href={''} className={'text-gray-500 text-sm'}>برنامه نویسی</Link>
                    </div>
                    <div className={'flex items-center gap-x-2 mb-6'}>
                        <span className={'block bg-[#5E71FF] w-1 h-1 rounded-full'}></span>
                        <Link href={''} className={'text-gray-500 text-sm'}>بازاریابی دیجیتال</Link>
                    </div>
                    <div className={'flex items-center gap-x-2 mb-6'}>
                        <span className={'block bg-[#5E71FF] w-1 h-1 rounded-full'}></span>
                        <Link href={''} className={'text-gray-500 text-sm'}>آموزش سئو</Link>
                    </div>
                </section>
                {/* section side blog */}
                <section>
                    <div className={'xs:flex gap-x-3 mb-5 '}>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[530px] w-full xs:h-[200px] h-[150px] xs:m-0 mb-3 rounded-xl blog-back1 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={'/weblog/Ui-Ux'} className={'text-base tracking-tighter'}>مواردی که قبل از طراحی سایت باید
                                بدانید !</Link>
                        </div>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[530px] w-full xs:h-[200px] h-[150px] xs:m-0 mb-3 rounded-xl blog-back2 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={'/weblog/projocts'} className={'text-base tracking-tighter'}>چند نکته برای لینک سازی داخلی که در
                                افزایش رتبه سایت شما جادو میکند !</Link>
                        </div>
                    </div>
                    <div className={'xs:flex items-center justify-between'}>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[347px] xs:h-[200px] w-full h-[150px] xs:m-0 mb-3 rounded-xl blog-back3 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={'/weblog/links'} className={'text-base tracking-tighter'}>معرفی 5 ایده طراحی سایت</Link>
                        </div>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[347px] xs:h-[200px] w-full h-[150px] xs:m-0 mb-3 rounded-xl blog-back4 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={'/weblog/build-site'} className={'text-base tracking-tighter'}>چجوری از برنامه نویسی پول در
                                بیاریم</Link>
                        </div>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[347px] xs:h-[200px] w-full h-[150px] xs:m-0 mb-3 rounded-xl transition-all blog-back5 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={'/weblog/back-links'} className={'text-base tracking-tighter'}>سالادی که هندی ها دوست دارند
                                !</Link>
                        </div>
                    </div>
                </section>
            </section>
            {/* section tittle */}
            <section className={'flex flex-col items-center justify-center xs:mt-24 mt-16'}>
                <Link href={'/'}
                      className={'xs:text-sm text-xs text-sky-600 bg-[#FECBF8] inline-block m-auto xs:px-5 px-3 py-1 rounded-full'}>
                    مقالات
                </Link>
                <h4 className={'xs:text-[20px] text-sm xs:mt-4 mt-2'}>آخرین اخبار سایت</h4>
            </section>
            {/* section blog */}
            <section className={'xs:flex items-center justify-between gap-x-7 mt-14'}>
                <div className='xs:flex hover:cursor-pointer  xs:w-[50%] w-full h-[300px] xs:h-[174px]  transition-transform duration-300 hover:-translate-y-3 '>
                    <div className='mt-[-10px] xs:w-[36%]'>
                        <Image src={'/img/weblog/business-people-with-wheelchair-in-the-office-P9M4RX3-1970x2216-1.jpg'} className='w-full xs:h-[195px] h-[150px] rounded-2xl' width={1000} height={1000} alt='Logo'/>
                    </div>
                    <div className='xs:w-[65%] p-4 shadow shadow-blue-100 xs:rounded-l-3xl xs:rounded-br-none rounded-b-3xl xs:mx-0 mx-3 bg-white'>
                        <p className='text-[11px] text-gray-600'>21 سپتامبر 2023</p>
                        <Link href={''} className='xs:text-[15px] text-sm xs:my-3 my-1 block line-clamp-1'>نکاتی در رابطه با  قرارداد طراحی گرافیک و تعیین مبلغ طراحی</Link>
                        <p className={`text-gray-400 ${DanaRegular.className} text-[13px] xs:leading-6`}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی شهر شما هم آشنایی...</p>
                        <Link href={'/'} className='text-[#5e71ff] inline-flex items-center mt-2 text-xs'>
                            <span>مشاهده بیشتر</span>
                            <TrendingFlatOutlinedIcon className='rotate-180'/>
                        </Link>
                    </div>
                </div>
                <div className='xs:flex hover:cursor-pointer  xs:w-[50%] w-full h-[300px] xs:h-[174px]  transition-transform duration-300 hover:-translate-y-3 xs:my-0 my-16'>
                    <div className='mt-[-10px] xs:w-[36%]'>
                        <Image src={'/img/weblog/happy-colleagues-sitting-in-office-coworking-PHYA6TG-1970x2216-1-910x1024.jpg'} className='w-full xs:h-[195px] h-[150px] rounded-2xl' width={1000} height={1000} alt='Logo'/>
                    </div>
                    <div className='xs:w-[65%] p-4 shadow shadow-blue-100 xs:rounded-l-3xl xs:rounded-br-none rounded-b-3xl xs:mx-0 mx-3 bg-white'>
                        <p className='text-[11px] text-gray-600'>21 سپتامبر 2023</p>
                        <Link href={''} className='xs:text-[15px] text-sm xs:my-3 my-1 inline-block'>چند نکته برای لینک سازی داخلی که در افزایش رتبه سایت شما</Link>
                        <p className={`text-gray-400 ${DanaRegular.className} text-[13px] xs:leading-6`}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی شهر شما هم آشنایی...</p>
                        <Link href={'/'} className='text-[#5e71ff] inline-flex items-center mt-2 text-xs'>
                            <span>مشاهده بیشتر</span>
                            <TrendingFlatOutlinedIcon className='rotate-180'/>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={'xs:flex items-center justify-between gap-x-7 mt-14'}>
                <div className='xs:flex hover:cursor-pointer  xs:w-[50%] w-full h-[300px] xs:h-[174px]  transition-transform duration-300 hover:-translate-y-3 '>
                    <div className='mt-[-10px] xs:w-[36%]'>
                        <Image src={'/img/weblog/njanja-kovac-3532-62002-original-protected-1-637x383-1.jpg'} className='w-full xs:h-[195px] h-[150px] rounded-2xl' width={1000} height={1000} alt='Logo'/>
                    </div>
                    <div className='xs:w-[65%] p-4 shadow shadow-blue-100 xs:rounded-l-3xl xs:rounded-br-none rounded-b-3xl xs:mx-0 mx-3 bg-white'>
                        <p className='text-[11px] text-gray-600'>21 سپتامبر 2023</p>
                        <Link href={''} className='xs:text-[15px] text-sm xs:my-3 my-1 block line-clamp-1'>مواردی که قبل از طراحی سایت باید بدانید !</Link>
                        <p className={`text-gray-400 ${DanaRegular.className} text-[13px] xs:leading-6`}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی شهر شما هم آشنایی...</p>
                        <Link href={'/'} className='text-[#5e71ff] inline-flex items-center mt-2 text-xs'>
                            <span>مشاهده بیشتر</span>
                            <TrendingFlatOutlinedIcon className='rotate-180'/>
                        </Link>
                    </div>
                </div>
                <div className='xs:flex hover:cursor-pointer  xs:w-[50%] w-full h-[300px] xs:h-[174px]  transition-transform duration-300 hover:-translate-y-3 xs:my-0 my-16'>
                    <div className='mt-[-10px] xs:w-[36%]'>
                        <Image src={'/img/weblog/753-1970x1103-1-1024x573.jpg'} className='w-full xs:h-[195px] h-[150px] rounded-2xl' width={1000} height={1000} alt='Logo'/>
                    </div>
                    <div className='xs:w-[65%] p-4 shadow shadow-blue-100 xs:rounded-l-3xl xs:rounded-br-none rounded-b-3xl xs:mx-0 mx-3 bg-white'>
                        <p className='text-[11px] text-gray-600'>21 سپتامبر 2023</p>
                        <Link href={''} className='xs:text-[15px] text-sm xs:my-3 my-1 inline-block'>معرفی پنج ایده جدید برای طراحی Ui , Ux</Link>
                        <p className={`text-gray-400 ${DanaRegular.className} text-[13px] xs:leading-6`}>در نظر بگیرید که یک گردشگر وارد شهر شده و به اماکن تاریخی، فرهنگی و دیدنی شهر شما هم آشنایی...</p>
                        <Link href={'/'} className='text-[#5e71ff] inline-flex items-center mt-2 text-xs'>
                            <span>مشاهده بیشتر</span>
                            <TrendingFlatOutlinedIcon className='rotate-180'/>
                        </Link>
                    </div>
                </div>
            </section>
            {/* section baner */}
            <section className={'xs:mt-20 mt-10'}>
                <Image src={'/img/weblog/single-post-banner-1.png'} className='w-full' width={1000} height={10000} alt='Logo'/>
            </section>
        </div>
    )
}


