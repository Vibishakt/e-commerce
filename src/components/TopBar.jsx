import { useState } from "react";
import Button from "../components/Button";
import menu from "../components/assets/menu.png";

const TopBar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <>
      <div className="bg-teal-200 w-full fixed top-0 justify-between flex px-4 py-2 z-50">
        <div>
          <h1 className=" text-[1rem] font-bold text-zinc-900">PVR shop</h1>
        </div>

        <div className="md:flex gap-x-6 ">
          <a href="/" className="text-gray-600 hover:text-black p-2">
            Shop
          </a>
          <div className="relative group hidden md:block ">
            <button className="cursor-pointer focus:outline-none p-2 text-gray-600 hover:text-black ">
              Category
            </button>
            <ul className="absolute right-0 top-[40px] w-48 bg-teal-100 text-black rounded-lg shadow-lg hidden group-hover:block">
              <li>
                <a
                  href="/category/mens"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mens
                </a>
              </li>
              <li>
                <a
                  href="/category/womens"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="/category/footwear"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Footwear
                </a>
              </li>
              <li>
                <a
                  href="/category/bags"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bags
                </a>
              </li>
              <li>
                <a
                  href="/category/beauty-products"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Beauty Products
                </a>
              </li>
            </ul>
          </div>

          <Button variant="login">
            <a href="/login">Login</a>
          </Button>
        </div>
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
