import Image from "next/image";
import React from "react";
import { MdOutlineCarRental } from "react-icons/md";

export const ServiceTop = () => {
  return (
    <div className="container">
      <h6 className="text-red-500 text-sm font-bold text-center">
        Servislerimiz
      </h6>
      <h2 className="text-black text-4xl font-bold text-center pt-2">
        Ne Sunuyoruz?
      </h2>
      <div className="flex gap-6">
        <div className="flex-1 flex flex-col justify-between">
          {Array.from({ length: 3 }).map(() => (
            <div className="p-6 flex flex-row items-start gap-6 bg-white border shadow-sm shadow-black/30">
              <MdOutlineCarRental size={64} className="text-red-500" />

              <div>
                <h2 className="text-base font-semibold mb-2">Arıza Tespit</h2>
                <p className="text-xs font-thin">
                  Gelişmiş arıza tespit cihazları ile araçlardaki elektronik ve
                  mekanik sorunların hızlı ve doğru bir şekilde belirlenmesi
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <Image
            src="/item.jpg"
            alt="About Image"
            width={340}
            height={340}
            className="aspect-square w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          {Array.from({ length: 3 }).map(() => (
            <div className="p-6 flex flex-row items-start gap-6 bg-white border shadow-sm shadow-black/30">
              <MdOutlineCarRental size={64} className="text-red-500" />

              <div>
                <h2 className="text-base font-semibold mb-2">Arıza Tespit</h2>
                <p className="text-xs font-thin">
                  Gelişmiş arıza tespit cihazları ile araçlardaki elektronik ve
                  mekanik sorunların hızlı ve doğru bir şekilde belirlenmesi
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
