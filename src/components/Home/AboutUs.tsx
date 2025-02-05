import Image from "next/image";
import React from "react";
import { FaCheckDouble } from "react-icons/fa";

export const AboutUs = () => {
  return (
    <div className="lg:h-dvh flex justify-center items-center py-12" id="hakkimizda">
      <section className="grid lg:grid-cols-5 container gap-12">
        <div className="lg:col-span-2 relative order-2 lg:order-1">
          <Image
            src="/about_us.webp"
            alt="About Image"
            width={340}
            height={340}
            className="max-w-[80%] lg:max-w-full mx-auto w-full h-[45vw] min-h-[350px] lg:max-h-[550px] object-cover"
          />
          <div className="absolute -top-6 left-6 lg:-top-6 lg:-left-6 bg-red-500 p-4 flex justify-center items-center flex-col">
            <span className="text-4xl font-bold text-white">25</span>
            <span className="text-white font-bold">Yıllık</span>
            <span className="text-white font-bold">Tecrübe</span>
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-4 order-1 lg:order-2">
          <h6 className="text-red-500 text-sm font-bold">HAKKIMIZDA</h6>
          <h2 className="text-black text-3xl lg:text-4xl font-bold">
            İstanbul’un Güvenilir Araç Servisi <br />
            Kalite ve Güvenin Adresi
          </h2>
          <p className="text-sm lg:text-lg font-light text-justify">
            İstanbul Premium, araç bakım ve tamir hizmetlerinde İstanbul’un
            lider servislerinden biridir. Uzman ekibimiz, modern ekipmanlarımız
            ve müşteri odaklı yaklaşımımızla, aracınızın tüm ihtiyaçlarını
            profesyonelce karşılıyoruz. Motor bakımından elektrik arızalarına,
            periyodik bakım hizmetlerinden fren ve süspansiyon çözümlerine kadar
            geniş bir yelpazede hizmet sunuyoruz.
          </p>
          <p className="text-sm lg:text-lg font-light text-justify">
            Amacımız, her müşterimize güvenli, konforlu ve sorunsuz bir sürüş
            deneyimi sunmaktır. Araç bakım ve tamir hizmetlerinde uzman
            kadromuzla, sizlere en iyi çözümleri sunmak için çalışıyoruz. Modern
            ekipmanlarımız ve sektördeki yenilikçi yaklaşımımızla, kaliteyi ve
            müşteri memnuniyetini her zaman ön planda tutuyoruz. Uygun
            fiyatlarla, aracınızın ihtiyaçlarına profesyonelce cevap veren doğru
            adres: İstanbul Premium!
          </p>
          <div className="flex flex-row items-center gap-2 text-sm lg:text-lg text-bold">
            <FaCheckDouble className="text-red-500" size={12} />
            Müşteri Memnuniyeti Odaklı Hizmet
          </div>
          <div className="flex flex-row items-center gap-2 text-sm lg:text-lg text-bold">
            <FaCheckDouble className="text-red-500" size={12} />
            Kaliteli ve Hızlı Çözümler
          </div>
          <div className="flex flex-row items-center gap-2 text-sm lg:text-lg text-bold">
            <FaCheckDouble className="text-red-500" size={12} />
            Sürekli Gelişim ve Yenilik
          </div>
        </div>
      </section>
    </div>
  );
};
