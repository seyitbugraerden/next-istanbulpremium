import Image from "next/image";
import React from "react";
import { FaCheckDouble } from "react-icons/fa";

export const AboutUs = () => {
  return (
    <div className="lg:h-dvh flex justify-center items-center py-12">
      <section className="grid lg:grid-cols-5 container gap-12">
        <div className="lg:col-span-2 relative order-2 lg:order-1">
          <Image
            src="https://picsum.photos/1920/600"
            alt="About Image"
            width={340}
            height={340}
            className="max-w-[80%] lg:max-w-full mx-auto w-full h-[550px] object-cover"
          />
          <div className="absolute -top-6 left-6 lg:-top-6 lg:-left-6 bg-red-500 p-4 flex justify-center items-center flex-col">
            <span className="text-4xl font-bold text-white">25</span>
            <span className="text-white font-bold">Years of</span>
            <span className="text-white font-bold">Experience</span>
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-4 order-1 lg:order-2">
          <h6 className="text-red-500 text-sm font-bold">HAKKIMIZDA</h6>
          <h2 className="text-black text-3xl lg:text-4xl font-bold">
            Make your car feel like a brand new one
          </h2>
          <p className="text-sm lg:text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
            rem amet veniam itaque ea nihil reprehenderit! Eius qui blanditiis
            aspernatur dolores earum facilis libero dolorem, odio deserunt
            molestias fugiat vel.earum facilis libero dolorem, odio deserunt
            molestias fugiat vel.
          </p>
          <p className="text-sm lg:text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
            rem amet veniam itaque ea nihil reprehenderit! Eius qui blanditiis
            aspernatur dolores earum facilis libero dolorem, odio deserunt
            molestias fugiat vel.earum facilis libero dolorem, odio deserunt
            molestias fugiat vel.
          </p>
          <div className="flex flex-row items-center gap-2 text-sm lg:text-lg">
            <FaCheckDouble className="text-red-500" size={12} /> Lorem ipsum
            dolor sit amet.
          </div>
          <div className="flex flex-row items-center gap-2 text-sm lg:text-lg">
            <FaCheckDouble className="text-red-500" size={12} /> Lorem ipsum
            dolor sit amet.
          </div>
          <div className="flex flex-row items-center gap-2 text-sm lg:text-lg">
            <FaCheckDouble className="text-red-500" size={12} /> Lorem ipsum
            dolor sit amet.
          </div>
        </div>
      </section>
    </div>
  );
};
