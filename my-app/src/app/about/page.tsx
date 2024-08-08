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

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import StarIcon from '@mui/icons-material/Star';
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";

export default function page() {
    return (
        <div className={` ${DanaMedium.className} xs:w-[84%] w-[91%] m-auto `}>
            {/* section main */}
            <section className={'xs:flex justify-around items-center'}>
                {/* tittle */}
                <div className={'xs:w-[50%] w-full'}>
                    <h4 className={`text-sky-950 xs:text-[32px] text-[22px] ${DanaBold.className} tracking-tight`}>یک
                        تجربه استثنایی</h4>
                    <h4 className={`text-sky-950 xs:text-[32px] text-[22px] ${DanaBold.className} tracking-tight`}>و <span
                        className={'text-blue-600'}>منحصر به فرد</span> برای شما عزیزان</h4>
                    <p className={'text-gray-400 xs:text-[14px] text-[11px] mt-4 mb-6 xs:leading-8 leading-5 text-justify'}>لورم
                        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                        گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        صورت می توان امید داشت که تمام و دشواری موجود است.</p>
                    <div className={'flex items-center gap-x-6'}>
                        <Link href={'/'}
                              className={' bg-gradient-to-br from-purple-600 to-blue-400 text-white xs:px-6 px-3 rounded-xl py-2 text-[13px]'}>مشاهده
                            خدمات</Link>
                        <div className={'flex items-center gap-x-2'}>
                            <Image src={'/img/about/Play.png'} className='xs:w-[40px] w-[20px] xs:h-[40px] h-[20px]'
                                   width={1000} height={1000} alt='Logo'/>
                            <Link href={''}
                                  className={`xs:text-[14px] text-[11px] ${DanaBold.className} border-b-2 border-b-sky-600`}>ویدیو
                                معرفی</Link>
                        </div>
                    </div>
                </div>
                {/* picture */}
                <div className={'xs:w-[50%] w-full xs:mt-0 mt-12'}>
                    <div
                        className={'relative bg-gradient-to-tr from-purple-400 to-blue-300 rounded-full xs:w-[400px] w-[300px] xs:h-[400px] h-[300px] m-auto'}>
                        <div className={'absolute w-[450px]'}>
                            <Image src={'/img/about/newworkhome.png'}
                                   className='xs:w-[450px] w-[300px] xs:h-[400px] h-[300px]' width={1000} height={1000}
                                   alt='Logo'/>
                        </div>
                        <Image src={'/img/about/Mask-Group-10.png'}
                               className='xs:w-[103px] w-[90px] xs:h-[121px] h-[110px]  rotate-[23deg]' width={1000}
                               height={1000} alt='Logo'/>
                        <div className={'relative'}>
                            <Image src={'/img/about/Mask-Group-8.png'}
                                   className='xs:w-[102px] w-[90px]  xs:h-[97px] h-[90px] absolute left-0 xs:top-[222px] top-[130px]'
                                   width={1000} height={1000} alt='Logo'/>
                            <Image src={'/img/about/Rectangle-45.png'}
                                   className='w-[63px] h-[63px] absolute xs:left-[-30px] left-0 xs:bottom-[100%] xs:top-[-85px] top-[-133px]'
                                   width={1000} height={1000} alt='Logo'/>
                        </div>
                    </div>
                </div>
            </section>
            {/* section projocts */}
            <section
                className={'xs:mt-32 mt-24 xs:flex inline-flex xs:flex-row flex-col items-center gap-x-4 justify-center'}>
                <div className={'xs:w-[50%] w-full order-2  xs:order-1 flex items-center gap-x-4'}>
                    <div className={'relative'}>
                        <Image src={'/img/about/img-2@2x-3.jpeg'} className='w-[308px] xs:h-[270px] h-[190px]'
                               width={1000}
                               height={1000} alt='Logo'/>
                        <div
                            className={'bg-white xs:mr-0 mr-[5px] shadow xs:w-[246px] w-[164px] xs:h-auto h-[60px] absolute bottom-[-32px] flex justify-between items-center p-4 rounded-md mb-0'}>
                            <div>
                                <h4 className={'xs:text-[15px] text-[12px]'}>مانی حسینی</h4>
                                <h4 className={'xs:text-[14px] text-[11px] text-blue-500'}>برنامه نویس فرانت اند</h4>
                            </div>
                            <div className={'text-[11px] inline-flex items-center justify-center'}>
                                <StarBorderOutlinedIcon className={'text-yellow-300 text-[14px]'}/>
                                <span className={'text-gray-600'}>2</span>
                            </div>
                        </div>
                    </div>
                    <div className={'relative'}>
                        <Image src={'/img/about/img-3@2x-3.jpeg'} className='w-[308px] xs:h-[270px] h-[190px]'
                               width={1000}
                               height={1000} alt='Logo'/>
                        <div
                            className={'bg-white xs:mr-0 mr-[5px] shadow xs:w-[246px] w-[164px] xs:h-auto h-[60px] absolute bottom-[-32px] flex justify-between items-center p-4 rounded-md mb-0'}>
                            <div>
                                <h4 className={'xs:text-[15px] text-[12px]'}>مانی حسینی</h4>
                                <h4 className={'xs:text-[14px] text-[11px] text-blue-500'}>برنامه نویس فرانت اند</h4>
                            </div>
                            <div className={'text-[11px] inline-flex items-center justify-center'}>
                                <StarBorderOutlinedIcon className={'text-yellow-300 text-[14px]'}/>
                                <span className={'text-gray-600'}>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'xs:w-[50%] w-[80%] order-1 xs:order-2'}>
                    <div className={'xs:flex items-center justify-between bg-white shadow-sm  rounded-2xl'}>
                        <div className={'xs:w-[213px]  p-4 flex-col items-center justify-center flex'}>
                            <h4 className={` ${DanaBold.className} bg-gradient-to-b from-purple-500 to-blue-500 text-[33px] inline-block text-transparent bg-clip-text`}>733
                                +</h4>
                            <p className={'text-[14px]'}>پروژه های انجام شده</p>
                            <p className={'text-[12px] text-gray-400 text-center mt-2'}>لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده میباشد.</p>
                        </div>
                        <div
                            className={'xs:w-[213px]  xs:border-l xs:border-b-0 border-b xs:border-r xs:border-t-0 border-t border-gray-200 p-4 flex-col items-center justify-center flex'}>
                            <h4 className={` ${DanaBold.className} bg-gradient-to-b from-purple-500 to-blue-500 text-[33px] inline-block text-transparent bg-clip-text`}>233
                                +</h4>
                            <p className={'text-[14px]'}>پروژه های انجام شده</p>
                            <p className={'text-[12px] text-gray-400 text-center mt-2'}>لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده میباشد.</p>
                        </div>
                        <div className={'xs:w-[213px]  p-4 flex-col items-center justify-center flex'}>
                            <h4 className={` ${DanaBold.className} bg-gradient-to-b from-purple-500 to-blue-500 text-[33px] inline-block text-transparent bg-clip-text`}>464
                                +</h4>
                            <p className={'text-[14px]'}>پروژه های انجام شده</p>
                            <p className={'text-[12px] text-gray-400 text-center mt-2'}>لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده میباشد.</p>
                        </div>
                    </div>
                    <div className={'flex items-center justify-center gap-x-2 mt-7'}>
                        <Link href={'/'}
                              className={'bg-blue-500 rounded-full text-white'}><ChevronRightOutlinedIcon/></Link>
                        <Link href={'/'}
                              className={'bg-blue-500 rounded-full text-white'}><ChevronLeftOutlinedIcon/></Link>
                    </div>
                </div>
            </section>
            {/* section tittle */}
            <section className={'flex flex-col items-center justify-center xs:mt-24 mt-16'}>
                <Link href={'/'}
                      className={'xs:text-sm text-xs text-sky-600 bg-[#FECBF8] inline-block m-auto xs:px-5 px-3 py-1 rounded-full'}>
                    نظرات
                </Link>
                <h4 className={'xs:text-[20px] text-sm xs:mt-4 mt-2'}>نظرات مشتریان ما</h4>
            </section>
            {/* section comment */}
            <section className={'flex items-center justify-between mt-24'}>
                <div className={'xs:w-[406px] w-full h-[206px] bg-white shadow-sm rounded-3xl px-4'}>
                    <div className={'flex justify-between'}>
                        <Image src={'/img/about/comment-icon-1.svg'} className='w-[27px] h-[24px]' width={1000}
                               height={1000} alt='Logo'/>
                        <Image src={'/img/about/user-avatar4-min-300x188-1.jpg'}
                               className='w-[75px] h-[75px] rounded-full mt-[-40px] mr-[-25px]' width={1000}
                               height={1000} alt='Logo'/>
                        <span></span>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h5 className={'xs:text-[15px] text-[12px] mt-4'}>ناهید اصلانی</h5>
                        <span className={'xs:text-[13px] text-[11px] text-gray-400 my-1'}>خلاقیت کویر</span>
                        <p  className={'xs:text-[12px] text-[11px] text-gray-400 text-justify'}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز میباشد.</p>
                        <div className={'mt-[10px]'}>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                        </div>
                    </div>
                </div>
                <div className={'xs:w-[406px] xs:inline-block hidden w-full h-[206px] bg-white shadow-sm rounded-3xl px-4'}>
                    <div className={'flex justify-between'}>
                        <Image src={'/img/about/comment-icon-1.svg'} className='w-[27px] h-[24px]' width={1000}
                               height={1000} alt='Logo'/>
                        <Image src={'/img/about/user-avatar5-min-300x300-1.jpg'}
                               className='w-[75px] h-[75px] rounded-full mt-[-40px] mr-[-25px]' width={1000}
                               height={1000} alt='Logo'/>
                        <span></span>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h5 className={'xs:text-[15px] text-[12px] mt-4'}>مانی حسینی</h5>
                        <span className={'xs:text-[13px] text-[11px] text-gray-400 my-1'}>خلاقیت کویر</span>
                        <p  className={'xs:text-[12px] text-[11px] text-gray-400 text-justify'}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز میباشد.</p>
                        <div className={'mt-[10px]'}>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                        </div>
                    </div>
                </div>
                <div className={'xs:w-[406px] xs:inline-block hidden w-full h-[206px] bg-white shadow-sm rounded-3xl px-4'}>
                    <div className={'flex justify-between'}>
                        <Image src={'/img/about/comment-icon-1.svg'} className='w-[27px] h-[24px]' width={1000}
                               height={1000} alt='Logo'/>
                        <Image src={'/img/about/user-avatar2-min-300x300-1.jpg'}
                               className='w-[75px] h-[75px] rounded-full mt-[-40px] mr-[-25px]' width={1000}
                               height={1000} alt='Logo'/>
                        <span></span>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h5 className={'xs:text-[15px] text-[12px] mt-4'}>کسری مجیدی</h5>
                        <span className={'xs:text-[13px] text-[11px] text-gray-400 my-1'}>خلاقیت کویر</span>
                        <p  className={'xs:text-[12px] text-[11px] text-gray-400 text-justify'}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز میباشد.</p>
                        <div className={'mt-[10px]'}>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                            <StarIcon className={'text-[#5E71FF] text-[14px]'}/>
                        </div>
                    </div>
                </div>

            </section>
            {/* section tittle */}
            <section className={'flex flex-col items-center justify-center xs:mt-24 mt-16'}>
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
