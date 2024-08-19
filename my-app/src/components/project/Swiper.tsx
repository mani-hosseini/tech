import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore, { Navigation } from "swiper";

import Image from "next/image";

// فعال کردن navigation (دکمه های چپ و راست)
SwiperCore.use([Navigation]);

const images = [
  "/img/project1.jpg",
  "/img/project2.jpg",
  "/img/project3.jpg",
  "/img/project4.jpg",
];

export default function ImageSlider() {
  return (
    <div className="p-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                width={50}
                height={50}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
