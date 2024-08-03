"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
import Phone from '@mui/icons-material/PhoneEnabled';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Search from '@mui/icons-material/SearchOutlined';


const MorabbaLight = localFont({
    src: '../../public/fonts/Morabba/woff2/Morabba-Light.woff2'
});

const DanaRegular = localFont({
    src: '../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2'
});

const DanaBold = localFont({
    src: '../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2'
});

const DanaMedium = localFont({
    src: "../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
});

const Morabbamedium = localFont({
    src: '../../public/fonts/Morabba/woff2/Morabba-Medium.woff2'
});

export default function Nav() {
    const [showDiv, setShowDiv] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowDiv(!showDiv);
    };

    return (
        <nav
            className={`xs:mb-14 mb-10 bg-white shadow rounded-md m-auto xs:w-[84%] w-[91%] mt-6 xs:p-4 p-3 xs:flex justify-between items-center ${DanaMedium.className}`}>
            {/* section logo and nav */}
            <section className={'xs:w-auto  xs:h-auto h-[61px] w-full flex items-center justify-between'}>
                <div className={'xs:order-none order-2 xs:border-l border-l-gray-200 xs:pl-5 '}>
                    <Image src={'/img/navbar/Group-31.svg'} width={166} height={150} alt='Logo'/>
                </div>
                {/* nav mobile */}
                <div className={'xs:hidden block order-1'}>
                    <a href="#" onClick={handleClick} className="flex items-center">
                        <GridViewOutlinedIcon className={'text-[#5E71FF]'}/>
                    </a>
                </div>
                {/* overlay */}
                {showDiv && (
                    <div>
                        <div className="overlay overlay--visible" onClick={() => setShowDiv(false)}></div>
                        <div className="nav w-[70%] nav--visible">
                            {/* links */}
                            <div className={'flex-col items-center mt-4 w-full'}>
                                {/* logo mobile */}
                                <div
                                    className={'xs:border-l flex justify-center items-center border-l-gray-200 xs:pl-5 '}>
                                    <Image src={'/img/navbar/Group-31.svg'} width={166} height={150} alt='Logo'/>
                                </div>
                                {/* form search */}
                                <div className={'relative mt-8'}>
                                    <input type="search" placeholder={"    جستجو..."}
                                           className={"w-full py-2 rounded-[10px] placeholder-small bg-gray-100"}/>
                                    <div
                                        className={'absolute text-center left-0 top-0 bottom-0 bg-[#5e71ff] text-white h-1- w-10  rounded-l-lg'}>
                                        <Search className={'text-[24px] mt-2'}/>
                                    </div>
                                </div>
                                {/* mobile links */}
                                <div className={'mt-8'}>
                                    <Link className={' text-[15px] transition-all block text-sky-950 my-6'} href={'/'}>صفحه
                                        اصلی</Link>
                                    <Link
                                        className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 my-6'}
                                        href={'/weblog'}>وبلاگ</Link>
                                    <Link
                                        className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 my-6'}
                                        href={'/'}>خدمات</Link>
                                    <Link
                                        className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 my-6'}
                                        href={'/'}>پروژه
                                        ها</Link>
                                    <Link
                                        className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 my-6'}
                                        href={'/'}>درباره
                                        ما</Link>
                                    <Link
                                        className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 my-6'}
                                        href={'/'}>تماس
                                        با ما</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* tell in phone */}
                <div
                    className={'xs:hidden inline-flex text-blue-700 bg-[#DFDFFD] rounded-full w-[30px] h-[30px] xs:m-auto order-3'}>
                    <Phone className={'m-auto text-[20px]'}/>
                </div>
                {/* laptop header */}
                <div className={' xs:flex hidden gap-x-8 mr-5'}>
                    <Link className={' text-[15px] transition-all block text-sky-950 '} href={'/'}>صفحه اصلی</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '}
                          href={'/weblog'}>وبلاگ</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '}
                          href={'/'}>خدمات</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '} href={'/'}>پروژه
                        ها</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '} href={'/'}>درباره
                        ما</Link>
                    <Link className={' text-[15px] transition-all block text-gray-500 hover:text-sky-950 '} href={'/'}>تماس
                        با ما</Link>
                </div>
            </section>
            {/* section calls */}
            <section className={' xs:flex hidden items-center gap-x-5'}>
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
                    <Link href={'/'} className={' text-white bg-[#5E71FF] text-xs py-2 px-4 rounded-md'}>لیست تعرفه های
                        ما</Link>
                </div>
            </section>
        </nav>
    );
}
