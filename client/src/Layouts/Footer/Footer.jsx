import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="customContainer flex gap-8 justify-around bg-primary py-6 font-sans flex-wrap">
      <div className="flex flex-col items-start gap-6">
        <div className="font-medium text-2xl">Vehicles</div>
        <div className="flex flex-col gap-2">
          <Link to="/vehicles/car">Cars</Link>
          <Link to="/vehicles/motorcycle">Motorcycles</Link>
          <Link to="/vehicles/truck">Trucks</Link>
          <Link to="/vehicles/bus">Buses</Link>
          <Link to="/vehicles/other">Others</Link>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6">
        <div className="font-medium text-2xl">Shopping Tools</div>
        <div className="flex flex-col gap-2">
          <Link to="/vehicles/car">Build</Link>
          <Link to="/vehicles/motorcycle">Compare Vehicles</Link>
          <Link to="/vehicles/truck">Find a Dealer</Link>
          <Link to="/vehicles/bus">View Inventory</Link>
          <Link to="/vehicles/other">Shopping Assist</Link>
          <Link to="/vehicles/other">Special Offers</Link>
          <Link to="/vehicles/other">Financial Servicess</Link>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6">
        <div className="font-medium text-2xl">Stay in Touch</div>
        <div className="flex flex-col gap-2">
          <p>Receive the latest news, special offers and exlusives.</p>
          <div className="border-b-2 border-slate-500 py-2">
            <input
              className="border-none py-1 px-3 focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="Your Email Address"
            />
            <span className="px-3 py-2 bg-danger text-white hover:text-slate-300 hover:bg-red-600 cursor-pointer">
              Subscribe
            </span>
          </div>
          <div className="flex mt-4 gap-x-6">
            <Link className="size-8 bg-black rounded-full flexCenter hover:scale-110 transition-all hover:border ">
              <FaFacebookF size={18} />
            </Link>
            <Link className="size-8 bg-black rounded-full flexCenter hover:scale-110 transition-all hover:border  ">
              <FaInstagram size={18} />
            </Link>
            <Link className="size-8 bg-black rounded-full flexCenter hover:scale-110 transition-all hover:border ">
              <FaLinkedinIn size={18} />
            </Link>
            <Link className="size-8 bg-black rounded-full flexCenter hover:scale-110 transition-all hover:border ">
              <FaTwitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
