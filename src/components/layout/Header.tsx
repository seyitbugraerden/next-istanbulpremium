"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";

export const Header = () => {
  const links = ["Ana Sayfa", "Hakkımızda", "Hizmetlerimiz", "SSS", "İletişim"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-darkblue">
      {/* Top Bar */}
      <div className="container hidden lg:flex items-center h-14">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row gap-4 items-center">
            <Link
              target="_blank"
              href="mailto:info@istanpulpremium.com.tr"
              className="flex flex-row gap-2 items-center"
            >
              <MdOutlineEmail className="text-white" size={16} />
              <span className="text-white text-sm">
                info@istanpulpremium.com.tr
              </span>
            </Link>

            <Link
              href="tel:+905383549477"
              target="_blank"
              className="flex flex-row gap-2 items-center"
            >
              <MdOutlinePhone className="text-white" size={16} />
              <span className="text-white text-sm">+90 (538) 354 94 77</span>
            </Link>
          </div>
          <div className="flex flex-row gap-4 items-center text-white">
            <FaFacebookF
              size={18}
              className="cursor-pointer hover:opacity-70 transition duration-300 hidden"
            />
            <Link
              href="https://www.instagram.com/istanbul.premium.servis"
              title="İstanbul Premium Oto Servis Instagram"
              target="_blank"
            >
              <FaInstagram
                size={18}
                className="cursor-pointer hover:opacity-70 transition duration-300"
              />
            </Link>
            <FaXTwitter
              size={18}
              className="cursor-pointer hover:opacity-70 transition duration-300 hidden"
            />
            <FaLinkedinIn
              size={18}
              className="cursor-pointer hover:opacity-70 transition duration-300 hidden"
            />
            <Link
              href="https://wa.me/+905383549477"
              target="_blank"
              className="h-14 text-lg bg-whatsapp flex flex-row gap-2 justify-center items-center px-7 text-black hover:brightness-75 transition duration-300 cursor-pointer"
            >
              <FaWhatsapp size={24} /> WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="shadow-2xl bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Image src="/logo.png" alt="logo" width={140} height={40} />
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-200 ease-in-out ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-row gap-6">
            {links.map((x: string, _: number) => (
              <Link
                key={_}
                href="#"
                className="font-bold text-sm text-primary hover:opacity-50 transition duration-300"
              >
                {x}
              </Link>
            ))}
          </div>

          {/* Call Section */}
          <Link
            href="tel:+905383549477"
            className="hidden md:flex flex-row gap-3 items-center"
          >
            <TbPhoneCall
              size={48}
              className="border border-black/10 shadow-lg shadow-blas p-1.5 rounded-full"
            />
            <div>
              <h2 className="ms-2">Şimdi İletişime Geç</h2>
              <h5 className="font-medium text-lg">+90 (538) 354 94 77</h5>
            </div>
          </Link>
        </div>

        {/* Mobile Navigation - Animated slide down */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((x: string, _: number) => (
              <Link
                key={_}
                href="#"
                className="block px-3 py-2 text-primary font-bold text-sm hover:opacity-50 transition duration-300"
              >
                {x}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
