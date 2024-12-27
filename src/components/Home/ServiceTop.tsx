"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineCarRental } from "react-icons/md";

export const ServiceTop = () => {
  return (
    <div className="flex justify-center items-center py-24">
      <div className="container -translate-y-12">
        <h6 className="text-red-500 text-sm font-bold text-center">
          Servislerimiz
        </h6>
        <h2 className="text-black text-4xl font-bold text-center pt-2">
          Ne Sunuyoruz?
        </h2>
        <div className="flex gap-6 mt-12 items-stretch">
          <div className="flex-1 flex flex-col justify-between gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`left-${index}`}
                className="p-6 flex flex-row items-start gap-6 bg-white border shadow-sm shadow-black/30 flex-1"
              >
                <MdOutlineCarRental size={64} className="text-red-500" />
                <div>
                  <h2 className="text-base font-semibold mb-2">Arıza Tespit</h2>
                  <p className="text-xs font-thin">
                    Gelişmiş arıza tespit cihazları ile araçlardaki elektronik
                    ve mekanik sorunların hızlı ve doğru bir şekilde
                    belirlenmesi
                  </p>
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
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`right-${index}`}
                className="p-6 flex flex-row items-start gap-6 bg-white border shadow-sm shadow-black/30 flex-1"
              >
                <MdOutlineCarRental size={64} className="text-red-500" />
                <div>
                  <h2 className="text-base font-semibold mb-2">Arıza Tespit</h2>
                  <p className="text-xs font-thin">
                    Gelişmiş arıza tespit cihazları ile araçlardaki elektronik
                    ve mekanik sorunların hızlı ve doğru bir şekilde
                    belirlenmesi
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
