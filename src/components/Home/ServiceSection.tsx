import React from "react";
import { TripleSwiper } from "./TripleSwiper";

export const ServiceSection = () => {
  return (
    <div className="bg_sec pt-24 mb-24">
      <div className="container">
        <h6 className="text-red-500 text-sm font-bold">HAKKIMIZDA</h6>
        <h2 className="text-white text-6xl font-bold mt-1">
          Başlıca Hizmeetler
        </h2>
        <TripleSwiper />
      </div>
    </div>
  );
};
