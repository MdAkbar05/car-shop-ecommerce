import React, { useEffect, useState } from "react";

import Title from "../../assets/BMW_Title.png";
import BMW from "../../assets/BMW_Car.png";
import Model from "../../assets/BMW_X7.png";

export const Main = () => {
  return (
    <>
      <section className="customContainer py-32 bg-black flex justify-between gap-12  items-center">
        <div className="space-y-3">
          <div className="text-xl font-medium text-slate-100">NEW IN STOCK</div>
          <div className="text-4xl font-bold">EXCLUSIVE SPORTS CAR</div>
          <div className="pr-20 text-slate-100 font-semibold text-lg">
            Sports car advanced features:
          </div>
          <p className="pr-20 text-slate-300 text-lg">
            Sports car offer advanced features and high-quality materials for a
            more comportable driving experience. For more information please
            visit the website
          </p>
          <button className="darkBtn text-lg mr-4">Get Start</button>
          <a href="#cars" className="lightBtn text-lg">
            Se more
          </a>
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
