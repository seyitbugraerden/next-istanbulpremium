import React from "react";
import { TripleSwiper } from "./TripleSwiper";

export const ServiceSection = () => {
  return (
    <>
      <div className="bg_sec pt-12 mb-12">
        <div className="container">
          <h6 className="text-red-500 text-sm font-bold">HAKKIMIZDA</h6>
          <h2 className="text-white text-3xl lg:text-4xl font-bold mt-3">
            Başlıca Hizmeetler
          </h2>
          <TripleSwiper />
        </div>
      </div>
      <div className="container">
        <p className="text-black pt-12 font-thin text-justify text-sm lg:text-lg">
          İstanbul Premium olarak, aracınızın ihtiyaç duyduğu tüm bakım ve tamir
          hizmetlerini profesyonellikle sunuyoruz. Motor revizyonu, periyodik
          bakım, elektrik ve arıza tespit hizmetlerimizle aracınızın
          performansını artırıyoruz. Fren ve süspansiyon sistemlerinden yakıt ve
          egzoz çözümlerine kadar geniş bir hizmet yelpazesiyle güvenliğiniz
          için çalışıyoruz. Uzman ekibimiz, modern ekipmanlarımız ve müşteri
          odaklı yaklaşımımızla aracınızı ilk günkü gibi sorunsuz hale
          getiriyoruz. İstanbul’daki güvenilir oto servis merkezi olarak, kalite
          ve uygun fiyat politikamızla sizlere en iyi hizmeti sunmayı
          hedefliyoruz. Aracınıza değer katmak için İstanbul Premium’a
          güvenebilirsiniz!
        </p>
        <p className="text-black pt-3 font-thin text-justify text-sm lg:text-lg">
          İstanbul Premium olarak aracınızın tüm bakım ve tamir ihtiyaçlarını
          karşılayan profesyonel hizmetler sunuyoruz. İşte hizmetlerimiz:
        </p>
        <p className="text-black pt-3 font-thin text-justify text-sm lg:text-lg">
          <strong>Periyodik Bakımlar:</strong> Aracınızın uzun ömürlü ve güvenli
          bir şekilde kullanılabilmesi için düzenli bakım hizmeti sunuyoruz.
          Motor yağı değişiminden filtre kontrollerine kadar tüm detaylarla
          ilgileniyoruz.
        </p>
        <p className="text-black pt-3 font-thin text-justify text-sm lg:text-lg">
          <strong>Arıza Tespit:</strong> Gelişmiş cihazlarımızla aracınızdaki
          sorunları hızlı ve doğru bir şekilde tespit ediyor, zaman kaybetmeden
          çözüm sunuyoruz.
        </p>
        <p className="text-black pt-3 font-thin text-justify text-sm lg:text-lg">
          <strong>Kaporta ve Boya Hizmetleri:</strong> Kaza sonrası onarımlar,
          çizik giderme ve komple boyama işlemleriyle aracınızı ilk günkü
          görünümüne kavuşturuyoruz.
        </p>
        <p className="text-black pt-3 font-thin text-justify text-sm lg:text-lg">
          <strong>Elektrik Hizmetleri:</strong> Elektrik tesisatı arızaları, akü
          kontrolleri ve aydınlatma sistemleri gibi tüm elektrik sorunlarını
          profesyonelce çözüyoruz.
        </p>
        <p className="text-black pt-3 font-thin text-justify text-sm lg:text-lg">
          Kalite, güven ve uygun fiyat arıyorsanız doğru adres: İstanbul
          Premium! Aracınıza değer katmak için her zaman yanınızdayız.
        </p>
      </div>
    </>
  );
};
