import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-darkblue shadow text-white">
      <div className="container py-4 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/logo.png" alt="logo" width={140} height={40} className="w-32 md:w-36" />
          </a>
          <ul className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-white">
            <li>
              <a href="#" className="hover:underline transition-all duration-300">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline transition-all duration-300">
                Hakkımzda
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline transition-all duration-300">
                Hizmetlerimiz
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline transition-all duration-300">
                SSS
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline transition-all duration-300">
                İletişim
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200/20" />
        <span className="block text-sm text-white/80 text-center">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline transition-all duration-300">
            İstanbul Premium
          </a>
          . Tüm Hakları Saklıdır.
        </span>
      </div>
    </footer>
  );
};
