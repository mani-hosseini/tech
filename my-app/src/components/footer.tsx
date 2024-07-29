import Link from 'next/link'
import React from 'react'

export default function footer() {
  return (
    <footer className='relative bg-gradient-to-r from-purple-500 to-pink-500 text-white pt-20 pb-10 clip-ellipse-top'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/4 mb-6 md:mb-0'>
            <h3 className='text-lg font-bold mb-4'>سایت آماده تکنولوژی</h3>
            <p className='mb-4'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <Link href={'/'}>
              <button className='text-white  bg-purple-500 px-2 py-4 rounded'>عضویت</button>
            </Link>
          </div>
          <div className='w-full md:w-1/4 mb-6 md:mb-0'>
            <h4 className='text-white font-bold mb-4'>خدمات ما</h4>
            <ul>
                <Link href={'/'}>
                  <li className='mb-2'>بازاریابی محتوا</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>سِئو و بهینه سازی</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>طراحی سایت</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>بهینه سازی سرعت</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>تبلیغات کلیدی</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>پشتیبانی وبسایت</li>
                </Link>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mb-6 md:mb-0'>
              <h4 className='text-white font-bold mb-4'>لینک های مفید</h4>
              <ul>
                <Link href={'/'}>
                  <li className='mb-2'>صفحه اصلی</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>آخرین مقالات</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>خدمات</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>پروژه های ما</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>درباره ما</li>
                </Link>
                <Link href={'/'}>
                  <li className='mb-2'>تماس با ما</li>
                </Link>
            </ul>
          </div>
          <div className='w-full md:w-1/4'>
            <h4 className='text-white font-bold mb-4'>اطلاعات تماس</h4>
            <p className='mb-2'>آدرس:تهران منطقه 18 یافت آباد</p>
            <p className='mb-2'>تلفن:09195028825-09105940090</p>
            <div className='flex space-x-4 mt-4'>
              <Link href={'/'} className='text-white'>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href={'/'} className='text-white'>
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href={'/'} className='text-white'>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href={'/'} className='text-white'>
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


