import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-darkblue rounded-lg shadow text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src="/logo.png" alt="logo" width={140} height={40} />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Hakkımzda
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Hizmetlerimiz
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                SSS
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                İletişim
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto  lg:my-4" />
        <span className="block text-sm text-white sm:text-center ">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            İstanbul Premium
          </a>
          . Tüm Hakları Saklıdır.
        </span>
      </div>
    </footer>
  );
};
