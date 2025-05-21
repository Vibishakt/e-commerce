import React from "react";
import { Facebook, Instagram, Whatsapp } from "../assets/icons";

const Footer = () => {
  return (
    <div className="w-full bg-teal-500 p-1">
      <div className="md:text-lg text-[10px] mt-3 text-center footer p">
        <p>SHOP</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>
      <ul className="flex gap-2 justify-center p-2">
        <Facebook className=" bg-white rounded-md p-1" />
        <Whatsapp className=" bg-white rounded-md p-1" />
        <Instagram className=" bg-white rounded-md p-1" />
      </ul>
      <hr className="p-2 w-full" />
      <p className="md:text-lg text-[10px] p-1 text-center  text-zinc-600">
        CopyRight @2025. All Right Reserverd
      </p>
    </div>
  );
};

export default Footer;
