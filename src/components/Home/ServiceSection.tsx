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
        <p className="text-black py-12 font-thin text-justify text-sm lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, earum
          minus obcaecati optio incidunt praesentium dicta delectus suscipit
          dolores, sint voluptatibus commodi perferendis totam laboriosam iste
          omnis tempora cupiditate deleniti eaque sit mollitia. Quaerat
          obcaecati asperiores cupiditate, provident consequatur quos.
          Aspernatur quae dignissimos nulla vero, magni qui tempora rem quasi!
        </p>
      </div>
    </>
  );
};
