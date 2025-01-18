import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-darkblue shadow text-white">
      <div className="container py-12 lg:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/brand_white.svg" alt="logo" width={240} height={40} className="w-64 mx-auto md:w-36" />
          </a>
          <ul className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-white">
            <li>
              <Link href="#anasaya" className="hover:underline transition-all duration-300">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="#hakkimizda" className="hover:underline transition-all duration-300">
                Hakkımzda
              </Link>
            </li>
            <li>
              <Link href="#hizmetler" className="hover:underline transition-all duration-300">
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href="#sss" className="hover:underline transition-all duration-300">
                SSS
              </Link>
            </li>
            <li>
              <Link href="#iletisim" className="hover:underline transition-all duration-300">
                İletişim
              </Link>
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
