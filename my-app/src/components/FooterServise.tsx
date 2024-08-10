"use client"
import React from 'react'

import Link from 'next/link'

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

export default function FooterServise({ product }) {
  return (
    <div className='bg-white px-4 py-2 border border-[#b5b1b12e] rounded-2xl'>
        <div className='flex items-center justify-start'>
            <Link href={'/'}>
                <span className={`${DanaMedium.className} text-sm text-[#337ab7] ml-2`}>صفحه اصلی</span>
            </Link>
            <span className='ml-2 text-sm text-[#337ab7]'>/</span>
            <Link href={'/services'}>
                <span className={`${DanaMedium.className} text-sm text-[#337ab7]`}>خدمات ما</span>
            </Link>
            <span className='mr-2 text-sm text-[#337ab7]'>/</span>
            <span className={`${DanaMedium.className} text-sm mr-2 text-gray-600`}>{product.title}</span>
        </div>
    </div>
  )
}
