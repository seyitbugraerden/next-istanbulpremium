import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

export const Header = () => {
  return (
    <header className="bg-primary h-14">
      <div className="container h-full flex items-center">
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
            <div className="h-14 text-xl bg-whatsapp flex flex-row gap-2 justify-center items-center px-4 text-black hover:brightness-75 transition duration-300 cursor-pointer">
              <FaWhatsapp /> WhatsApp
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
