import React from "react";
import { FaCarCrash } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { TbCar4Wd } from "react-icons/tb";

export const TripleCard = () => {
  return (
    <div className="flex flex-row gap-12 absolute bottom-0 w-full z-50">
      <div className="p-6 flex flex-1 flex-row items-start mt-4 gap-6 bg-white shadow-black shadow-sm">
        <div className="bg-primary p-2 rounded-full text-white mt-2">
          <FaCarCrash size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Periyodik Bakım ve Onarım
          </h2>
          <p className="text-sm font-thin">
            Araçların düzenli bakımını ve ihtiyaç duyulan onarımlarını kapsayan
            hizmetler.
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-1 flex-row items-start mt-4 gap-6 bg-white shadow-black shadow-sm">
        <div className="bg-red-500 p-2 rounded-full text-white mt-2">
          <MdOutlineCarRental size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Arıza Tespit</h2>
          <p className="text-sm font-thin">
            Gelişmiş arıza tespit cihazları ile araçlardaki elektronik ve
            mekanik sorunların hızlı ve doğru bir şekilde belirlenmesi
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-1 flex-row items-start mt-4 gap-6 bg-white shadow-black shadow-sm">
        <div className="bg-whatsapp p-2 rounded-full text-white mt-2">
          <TbCar4Wd  size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Yedek Parça ve Garanti
          </h2>
          <p className="text-sm font-thin">
            Orijinal veya eşdeğer yedek parça kullanımı ve yapılan işlemler için
            garanti sunulması, müşteri güvenini artıran kritik bir unsurdur.
          </p>
        </div>
      </div>
    </div>
  );
};
