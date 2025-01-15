"use client";
import Image from "next/image";
import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import { TripleCard } from "./TripleCard";

export const SwiperDemo = () => {
  return (
    <div className="relative" id="anasayfa">
      <div className="swiper-button-prev-custom hidden lg:block absolute top-1/2 left-12 z-10 cursor-pointer text-black bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
        <FaArrowLeft size={16} />
      </div>
      <div className="swiper-button-next-custom hidden lg:block absolute top-1/2 right-12 z-10 cursor-pointer text-black bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
        <FaArrowRight size={16} />
      </div>
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        effect={"fade"}
        modules={[EffectFade, Navigation]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="relative">
          <Image
            src="/banner_1.jpeg"
            alt="inline"
            width={1920}
            height={800}
            className="brightness-50 w-full h-[800px] object-cover"
          />
          <div className="absolute top-[30%] lg:top-[20%] left-0 z-10 w-full">
            <div className="container flex flex-col gap-4">
              <h6 className="text-white font-medium text-xl lg:text-4xl">
                Profesyonel Araç Servisi
              </h6>
              <h1 className="text-white font-semibold text-6xl lg:text-8xl">
                Aracınız İçin En İyi Bakım
              </h1>
              <p className="text-white text-sm lg:text-lg font-light max-w-3xl whitespace-normal">
                Aracınızın performansını artırmak ve güvenle yola çıkmanız için
                uzman kadromuzla her zaman yanınızdayız. Hızlı ve güvenilir
                çözümler sunuyoruz.
              </p>
              <div className="text-white mt-6 flex flex-row items-center gap-6">
                <div className="bg-red-500 inline-flex px-6 py-3 hover:bg-primary transition-all duration-300 cursor-pointer">
                  İletişime Geç
                </div>
                <div className="flex flex-row items-center gap-4 relative">
                  <FaPlay className="bg-white text-red-500 rounded-full p-4 size-12 hover:scale-125 transition-all duration-300" />
                  <p className="text-sm font-bold cursor-pointer">
                    Tanıtımı İzle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            src="/banner_2.jpg"
            alt="inline"
            width={1920}
            height={800}
            className="brightness-50 w-full h-[800px]"
          />
          <div className="absolute top-[30%] lg:top-[20%] left-0 z-10 w-full">
            <div className="container flex flex-col gap-4">
              <h6 className="text-white font-medium text-xl lg:text-4xl">
                Deneyimli Ekibimizle
              </h6>
              <h1 className="text-white font-semibold text-6xl lg:text-8xl">
                Sorunsuz Sürüş Garantisi
              </h1>
              <p className="text-white text-sm lg:text-lg font-light max-w-3xl whitespace-normal">
                Arıza tespiti, tamir ve bakım hizmetlerimizle aracınızı ilk
                günkü performansına kavuşturuyoruz. Kalite ve müşteri
                memnuniyeti önceliğimizdir.
              </p>
              <div className="text-white mt-6 flex flex-row items-center gap-6">
                <div className="bg-red-500 inline-flex px-6 py-3 hover:bg-primary transition-all duration-300 cursor-pointer">
                  İletişime Geç
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="container relative mt-16 hidden lg:block">
        <TripleCard />
      </div>
    </div>
  );
};
