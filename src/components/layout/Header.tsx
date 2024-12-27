import Image from "next/image";
import Link from "next/link";
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
  return (
    <header className="bg-darkblue">
      <div className="container flex items-center h-14">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <MdOutlineEmail className="text-white" size={16} />
              <span className="text-white text-sm">info@example.com</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MdOutlinePhone className="text-white" size={16} />
              <span className="text-white text-sm">(000) 000 00 00 </span>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center text-white">
            <FaFacebookF
              size={18}
              className="cursor-pointer hover:opacity-70 transition duration-300"
            />
            <FaInstagram
              size={18}
              className="cursor-pointer hover:opacity-70 transition duration-300"
            />
            <FaXTwitter
              size={18}
              className="cursor-pointer hover:opacity-70 transition duration-300"
            />
            <FaLinkedinIn
              size={18}
              className="cursor-pointer hover:opacity-70 transition duration-300"
            />
            <div className="h-14 text-lg bg-whatsapp flex flex-row gap-2 justify-center items-center px-7 text-black hover:brightness-75 transition duration-300 cursor-pointer">
              <FaWhatsapp size={24} /> WhatsApp
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-2xl bg-white">
        <div className="container flex justify-between items-center py-4">
          <div>
            <Image src="/logo.png" alt="logo" width={140} height={40} />
          </div>
          <div className="flex flex-row gap-6">
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
          <div className="flex flex-row gap-3 items-center">
            <TbPhoneCall
              size={48}
              className="border border-black/10 shadow-lg shadow-blas p-1.5 rounded-full"
            />
            <div>
              <h2 className="ms-2">Call Now</h2>
              <h5 className="font-medium text-lg">+90 542 542 5422</h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
