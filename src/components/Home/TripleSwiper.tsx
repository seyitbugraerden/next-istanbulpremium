"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

export const TripleSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper translate-y-20"
      >
        {Array.from({ length: 12 }).map(() => (
          <SwiperSlide>
            <div className="bg-white">
              <Image
                src="https://picsum.photos/200/300"
                alt="About Image"
                width={340}
                height={340}
                className="w-full h-[250px] object-cover"
              />
              <div className="px-4 pt-5 pb-12 border">
                <h6 className="text-red-500 text-sm font-bold">Servisler</h6>
                <h2 className="text-black text-lg font-bold">Servis Başlığı</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
