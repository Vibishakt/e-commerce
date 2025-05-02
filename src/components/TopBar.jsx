import React, { useState } from "react";
import Button from "../components/Button";
import menu from "../components/assets/menu.png";

const TopBar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <>
      <div className="bg-teal-200 w-full fixed top-0 justify-between flex px-4 py-2">
        <div>
          <h1 className=" text-[1rem] font-bold text-zinc-900">PVR shop</h1>
        </div>
        <nav className="nav-list hidden md:block">
          <a href="#">Shop</a>
          <a href="#">Mens</a>
          <a href="#">Women</a>
          <Button variant="login">Login</Button>
        </nav>
        <img
          onClick={() => setToggleBtn(!toggleBtn)}
          className="h-4 w-4 block md:hidden"
          src={menu}
          alt="toggle"
        />
      </div>
      {toggleBtn && (
        <nav className=" mobile-nav fixed top-10 text-center grid w-full md:hidden ">
          <a href="#">Shop</a>
          <a href="#">Mens</a>
          <a href="#">Women</a>
          <Button variant="login">Login</Button>
        </nav>
      )}
    </>
  );
};

export default TopBar;
