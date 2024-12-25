"use client";
import Image from "next/image";
import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";

export const SwiperDemo = () => {
  return (
    <div className="relative h-dvh">
      <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-50 cursor-pointer text-black bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
        <FaArrowLeft size={16} />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-4 z-50 cursor-pointer text-black bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
        <FaArrowRight size={16} />
      </div>

      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        effect={"fade"}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <Image
            src="https://picsum.photos/1920/800"
            alt="inline"
            width={1920}
            height={800}
            className="brightness-50 w-full"
          />
          <div className="absolute top-[20%] left-0 z-50 w-full">
            <div className="container flex flex-col gap-6">
              <h6 className="text-white font-medium text-4xl">
                Welcome to ***
              </h6>
              <h1 className="text-white font-semibold text-8xl">
                Professional Car Service Provide
              </h1>
              <p className="text-white font-light text-lg mt-12 max-w-3xl whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eligendi excepturi cum animi aliquam alias quas
                consequatur quam libero laborum?
              </p>
              <div className="text-white mt-6 flex flex-row items-center gap-6">
                <div className="bg-red-500 inline-flex px-6 py-3 hover:bg-primary transition-all duration-300">
                  İletişime Geç
                </div>
                <div className="flex flex-row items-center gap-4 relative">
                  <FaPlay className="bg-white text-red-500 rounded-full p-4 size-12 hover:scale-125 transition-all duration-300" />
                  <p className="text-sm font-bold">Tanıtımı İzle</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src="https://picsum.photos/1918/800"
            alt="inline"
            width={1920}
            height={800}
            className="brightness-50 w-full"
          />
          <div className="absolute top-[20%] left-0 z-50 w-full">
            <div className="container flex flex-col gap-6">
              <h6 className="text-white font-medium text-4xl">
                Welcome to ***
              </h6>
              <h1 className="text-white font-semibold text-8xl">
                Professional Car TEST
              </h1>
              <p className="text-white font-light text-lg mt-12 max-w-3xl whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eligendi excepturi cum animi aliquam alias quas
                consequatur quam libero laborum?
              </p>
              <div className="text-white mt-6 flex flex-row items-center gap-6">
                <div className="bg-red-500 inline-flex px-6 py-3 hover:bg-primary transition-all duration-300">
                  İletişime Geç
                </div>
                <div className="flex flex-row items-center gap-4 relative">
                  <FaPlay className="bg-white text-red-500 rounded-full p-4 size-12 hover:scale-125 transition-all duration-300" />
                  <p className="text-sm font-bold">Tanıtımı İzle</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
