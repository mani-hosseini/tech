"use client"
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import localFont from 'next/font/local'
import Phone from '@mui/icons-material/PhoneEnabled';


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

export default function Nav() {
    return (
        <nav
            className={` bg-white shadow rounded-md m-auto w-[84%] mt-6 p-4 flex justify-between items-center ${DanaMedium.className}`}>
            {/* section logo and nav */}
            <section className={' flex items-center'}>
                <div className={' border-l border-l-gray-200 pl-5'}>
                    <Image src={'./img/navbar/Group-31.svg'} width={166} height={150} alt=''/>
                </div>
                <div className={' flex gap-x-8 mr-5'}>
                    <Link className={' text-[15px] transition-all block text-sky-950 '} href={'/'}>صفحه اصلی</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '}
                          href={'/weblog'}>وبلاگ</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '}
                          href={'/'}>خدمات</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '} href={'/'}>پروژه
                        ها</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '} href={'/'}>درباره
                        ما</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '} href={'/contact-us'}>تماس
                        با ما</Link>
                </div>
            </section>
            {/* section calls */}
            <section className={' flex items-center gap-x-5'}>
                <div className={' flex items-center gap-x-3'}>
                    <div className={' inline-flex text-blue-700 bg-[#DFDFFD] rounded-full w-[30px] h-[30px] m-auto'}>
                        <Phone className={'m-auto text-[20px]'}/>
                    </div>
                    <div>
                        <h4 className={` text-xs ${DanaBold.className}`}>تلفن تماس :</h4>
                        <h4 className={' text-xs text-gray-500 mt-1'}>1234567 - 035</h4>
                    </div>
                </div>
                <div>
                    <Link href={'/'} className={' text-white bg-[#5E71FF] text-xs py-2 px-4 rounded-md'}>لیست تعرفه های ما</Link>
                </div>
            </section>
        </nav>
    )
}