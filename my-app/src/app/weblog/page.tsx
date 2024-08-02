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

``


export default function Weblogpage() {
    return (
        <div className={` ${DanaMedium.className} w-[84%]  m-auto `}>
            <section className={'xs:flex justify-between '}>
                {/* section side */}
                <section className={'mt-12 xs:h-min xs:w-[190px] w-full bg-white shadow rounded-xl p-4'}>
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
                    <div className={'xs:flex gap-x-3 mb-5 mt-12'}>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[530px] w-full xs:h-[200px] h-[150px] xs:m-0 mb-3 rounded-xl blog-back1 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={''} className={'text-base tracking-tighter'}>مواردی که قبل از طراحی سایت باید
                                بدانید !</Link>
                        </div>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[530px] w-full xs:h-[200px] h-[150px] xs:m-0 mb-3 rounded-xl blog-back2 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={''} className={'text-base tracking-tighter'}>چند نکته برای لینک سازی داخلی که در
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
                            <Link href={''} className={'text-base tracking-tighter'}>معرفی 5 ایده طراحی سایت</Link>
                        </div>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[347px] xs:h-[200px] w-full h-[150px] xs:m-0 mb-3 rounded-xl blog-back4 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={''} className={'text-base tracking-tighter'}>چجوری از برنامه نویسی پول در
                                بیاریم</Link>
                        </div>
                        <div
                            className={'flex flex-col items-center justify-end py-4 xs:w-[347px] xs:h-[200px] w-full h-[150px] xs:m-0 mb-3 rounded-xl transition-all blog-back5 text-white'}>
                            <div className={'flex gap-x-3 text-sm'}>
                                <div><Cart className={'text-sm'}/> designer</div>
                                <div><Com className={'text-sm'}/> 0</div>
                            </div>
                            <Link href={''} className={'text-base tracking-tighter'}>سالادی که هندی ها دوست دارند
                                !</Link>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}


