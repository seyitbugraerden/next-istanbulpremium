"use client";
import Image from "next/image";
import React from "react";
import { CiTimer } from "react-icons/ci";
import { FaHandshake } from "react-icons/fa";
import { FaSpaceAwesome } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import {
  MdHandyman,
  MdOutlineSupervisorAccount,
} from "react-icons/md";

const leftMenu = [
  {
    title: "Hızlı Hizmet",
    description:
      "İstanbul Premium’da hızlı oto servis çözümleriyle zamanınızı kazanın. Aracınız en kısa sürede hazır!",
    icon: "time",
  },
  {
    title: "Güvenilir Çözümler",
    description:
      "Güvenilir oto servis çözümleri için İstanbul Premium’a güvenin. Kaliteli hizmet garantisi!",
    icon: "handshake",
  },
  {
    title: "Uygun Fiyatlar",
    description:
      "Bütçe dostu oto servis hizmetleri İstanbul Premium’da! Kaliteyi uygun fiyata alın.",
    icon: "price",
  },
];

const rightMenu = [
  {
    title: "Kaliteli İşçilik",
    description:
      "İstanbul Premium’un uzman ekibiyle kaliteli işçilik deneyimi. Aracınız emin ellerde!",
    icon: "MdHandyman ",
  },
  {
    title: "Modern Teknoloji",
    description:
      "Modern cihazlarla oto servis hizmeti. Arıza tespitinden performans testine kadar yenilikçi çözümler.",
    icon: "FaSpaceAwesome ",
  },
  {
    title: "Müşteri Odaklı Yaklaşım",
    description:
      "İstanbul Premium, müşteri memnuniyeti odaklı oto servis hizmetleriyle yanınızda!",
    icon: "MdOutlineSupervisorAccount ",
  },
];

export const ServiceTop = () => {
  return (
    <div className="flex justify-center items-center py-24">
      <div className="container -translate-y-12">
        <h6 className="text-red-500 text-sm font-bold">HİZMETLERİMİZ</h6>
        <h2 className="text-black text-3xl lg:text-4xl font-bold pt-3">
          Ne Sunuyoruz?
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 mt-12 items-stretch">
          <div className="flex-1 flex flex-col justify-between gap-6">
            {leftMenu.map((_, index) => (
              <div
                key={`left-${index}`}
                className="p-6 flex flex-row items-start gap-6 bg-white border shadow-sm shadow-black/30 flex-1"
              >
                {_.icon === "time" && (
                  <CiTimer size={80} className="text-red-500" />
                )}
                {_.icon === "handshake" && (
                  <FaHandshake size={64} className="text-red-500" />
                )}
                {_.icon === "price" && (
                  <IoIosPricetags size={64} className="text-red-500" />
                )}
                <div>
                  <h2 className="text-base font-semibold mb-2">{_.title}</h2>
                  <p className="text-xs font-thin">{_.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/item.jpg"
              alt="About Image"
              width={340}
              height={340}
              className="aspect-square h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between gap-6">
            {rightMenu.map((_, index) => (
              <div
                key={`left-${index}`}
                className="p-6 flex flex-row items-start gap-6 bg-white border shadow-sm shadow-black/30 flex-1"
              >
                {_.icon === "MdHandyman " && (
                  <MdHandyman size={54} className="text-red-500" />
                )}
                {_.icon === "FaSpaceAwesome " && (
                  <FaSpaceAwesome size={68} className="text-red-500" />
                )}
                {_.icon === "MdOutlineSupervisorAccount " && (
                  <MdOutlineSupervisorAccount
                    size={54}
                    className="text-red-500"
                  />
                )}
                <div>
                  <h2 className="text-base font-semibold mb-2">{_.title}</h2>
                  <p className="text-xs font-thin">{_.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
