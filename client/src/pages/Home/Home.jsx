import React, { useEffect, useState } from "react";

import Title from "../../assets/BMW_Title.png";
import BMW from "../../assets/BMW_Car.png";
import Model from "../../assets/BMW_X7.png";

export const Main = () => {
  return (
    <>
      <section className="customContainer py-32 bg-black flex justify-between gap-12  items-center">
        <div className="space-y-3">
          <div className="text-xl font-medium text-slate-100">Rahik Racer</div>
          <div className="text-4xl font-bold">
            The world is so fast, so buy fast go fast!
          </div>
          <p className="pr-20 text-slate-300 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quam, obcaecati officia quis omnis laborum earum vitae porro, culpa
            nemo cupiditate tenetur! Natus libero accusantium aliquid
            repudiandae deleniti, doloribus neque odit cupiditate nemo iusto,
            perferendis sint, voluptatem expedita odio esse.
          </p>
          <button className="text-xl py-2 px-4 bg-primary rounded-md">
            Get Start
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img src={Title} className="w-[100rem] h-auto" alt="" />
          <img src={BMW} className="w-[26rem] h-auto -mt-10" alt="" />
        </div>
      </section>
    </>
  );
};

export default Main;
