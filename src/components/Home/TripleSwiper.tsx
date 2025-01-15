"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Pagination } from "swiper/modules";

interface TripleSwiperProps extends SwiperProps {
  items?: number;
}

const slideData = [
  {
    image: "/periyodik_bakim.jpg",
    category: "Başlıca Hizmetler",
    title: "Periyodik Bakımlar",
  },
  {
    image: "/tuvturk.webp",
    category: "Başlıca Hizmetler",
    title: "Araç Muayene Öncesi Hazırlık",
  },
  {
    image: "/tyre_change.jpg",
    category: "Başlıca Hizmetler",
    title: "Lastik Değişimi ve Rot Balans",
  },
  {
    image: "/motor_revizyon.webp",
    category: "Başlıca Hizmetler",
    title: "Motor Revizyon ve Onarım",
  },
  {
    image: "/sanzuman_tamir.webp",
    category: "Başlıca Hizmetler",
    title: "Şanzıman Tamiri (Otomatik ve Manuel)",
  },
  {
    image: "/sogutma.webp",
    category: "Başlıca Hizmetler",
    title:
      "Soğutma Sistemi Onarımları (Radyatör, termostat ve hortum tamirleri)",
  },
  {
    image: "/egzoz.png",
    category: "Başlıca Hizmetler",
    title: "Egzoz Sistemi Onarımları (Egzoz boruları, katalitik konvertör)",
  },
  {
    image: "/aku_degisim.webp",
    category: "Başlıca Hizmetler",
    title: "Akü Kontrol ve Değişimi",
  },
  {
    image: "/far.jpeg",
    category: "Başlıca Hizmetler",
    title: "Far, Stop Lambası ve Aydınlatma Tamiri",
  },
  {
    image: "/tesisat.jpeg",
    category: "Başlıca Hizmetler",
    title: "Araç Elektrik Tesisatı Tamir",
  },
  {
    image: "/sensor.jpg",
    category: "Başlıca Hizmetler",
    title: "Sensör Kontrolleri ve Değişimi",
  },
  {
    image: "/fren.jpg",
    category: "Başlıca Hizmetler",
    title:
      "Fren Sistemi Bakımı ve Onarımı (Disk, balata, hidrolik sıvı değişimi)",
  },
  {
    image: "/yay.webp",
    category: "Başlıca Hizmetler",
    title: "Amortisör ve Yay Değişimi",
  },
  {
    image: "/direksiyon.webp",
    category: "Başlıca Hizmetler",
    title:
      "Direksiyon Sistemi Tamiri (Hidrolik ve elektronik destek sistemleri)",
  },
  {
    image: "/kaporta.jpg",
    category: "Başlıca Hizmetler",
    title: "Kaporta Onarımı ve Düzeltme (Çizik, ezik giderme)",
  },
  {
    image: "/boya.jpg",
    category: "Başlıca Hizmetler",
    title: "Boya Tamiri ve Yenileme",
  },
  {
    image: "/aracklima.jpeg",
    category: "Başlıca Hizmetler",
    title: "Klima Bakımı ve Gaz Dolumu",
  },
  {
    image: "/bilg_tespit.jpg",
    category: "Başlıca Hizmetler",
    title: "Bilgisayarlı Arıza Tespiti",
  },
  {
    image: "/dyno.jpg",
    category: "Başlıca Hizmetler",
    title: "Motor Performans Testleri",
  },
  {
    image: "/aksesuar.webp",
    category: "Başlıca Hizmetler",
    title:
      "Aksesuar Montajı (Park sensörleri, kamera sistemleri, ses sistemleri)",
  },
];

export const TripleSwiper: React.FC<TripleSwiperProps> = ({ items = 6 }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={true}
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
      }}
      loop
      modules={[Pagination]}
      className="mySwiper translate-y-10 lg:translate-y-14 cursor-pointer"
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white max-w-[80%] lg:max-w-full mx-auto">
            <Image
              src={slide.image}
              alt={`Slide Image ${index + 1}`}
              width={340}
              height={340}
              className="w-full h-[200px] object-cover"
            />
            <div className="px-4 pt-5 pb-12 border">
              <h6 className="text-red-500 text-sm font-bold">
                {slide.category}
              </h6>
              <h2 className="text-black text-lg font-bold">{slide.title}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
