// pages/ContactUs.tsx

import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdPlace } from "react-icons/md";

export const ContactUs = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h6 className="text-red-500 text-sm font-bold">Bize Ulaşın</h6>
        <h2 className="text-black text-3xl lg:text-4xl font-bold pt-3">
          En Başarılı Çözümleriniz İçin
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="ContactUs tailwind section"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Bize Ulaşın
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a href="javascript:;" className="flex items-center mb-6">
                      <IoIosCall />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </a>
                    <a href="javascript:;" className="flex items-center mb-6">
                      <IoMail />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        Pagedone1234@gmail.com
                      </h5>
                    </a>
                    <a href="javascript:;" className="flex items-center">
                      <MdPlace />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </a>
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
