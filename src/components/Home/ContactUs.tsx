// pages/ContactUs.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdPlace } from "react-icons/md";

export const ContactUs = () => {
  return (
    <section className="py-24" id="iletisim">
      <div className="container">
        <h6 className="text-red-500 text-sm font-bold">BİZE ULAŞIN</h6>
        <h2 className="text-black text-3xl lg:text-4xl font-bold pt-3">
          En Başarılı Çözümleriniz İçin
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <Image
                  src="/contact_us.jpg"
                  alt="ContactUs tailwind section"
                  fill
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover brightness-50"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Bize Ulaşın
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <Link
                      href="tel:+905383549477"
                      target="_blank"
                      className="flex items-center mb-6"
                    >
                      <IoIosCall />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        +90 (538) 354 94 77
                      </h5>
                    </Link>
                    <Link
                      target="_blank"
                      href="mailto:info@istanpulpremium.com.tr"
                      className="flex items-center mb-6"
                    >
                      <IoMail />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        info@istanpulpremium.com.tr
                      </h5>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/pZmAcFhbfDKAFt916"
                      className="flex items-center"
                    >
                      <MdPlace />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        Demirkapı, Bağcılar Asf Cd, 34203 Bağcılar/İstanbul
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full bg-white flex flex-col justify-between p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <div>
              <h2 className="text-black text-4xl font-bold text-start mb-11">
                Bize Mesaj Gönder
              </h2>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Ad Soyad"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="E-Posta"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Telefon"
              />
              <textarea
                rows={6}
                className="w-full resize-none text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Mesaj"
              />
            </div>
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-lg transition-all duration-700 hover:bg-red-500/30 hover:text-black bg-red-500 shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
