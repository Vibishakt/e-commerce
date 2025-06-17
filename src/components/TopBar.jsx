import { useState } from "react";
import Button from "../components/Button";
import menu from "../components/assets/menu.png";
import { getUserDetails, logOut } from "utils/common";
import { CartIcon } from "assets/icons/Svg";
import { WEB_URL } from "./api/urls";
import { useNavigate } from "react-router-dom";
import Logo_name from "components/assets/Logo_name.png";
import { useSelector } from "react-redux";
import { getCartCount } from "redux/selector";

const TopBar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const navigate = useNavigate();
  const { Name = "" } = getUserDetails();
  const count = useSelector(getCartCount);

  return (
    <>
      <div className="bg-teal-200 w-full fixed top-0 justify-between flex px-4 py-2 z-50">
        <div>
          <img className="w-[25%]" src={Logo_name} alt="Logo_name" />
        </div>

        <div className="hidden md:flex gap-x-6 ">
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
          <div className="relative group hidden md:block">
            <Button variant="login">
              {Name ? (
                <p className="text-gray-600">Hi {Name}</p>
              ) : (
                <a href="/login">Login</a>
              )}
            </Button>
            {Name && (
              <ul className="absolute right-0 top-[40px] w-28 bg-teal-100 text-black rounded-lg shadow-lg hidden group-hover:block">
                <li>
                  <button
                    className="cursor-pointer focus:outline-none p-2 text-gray-600 hover:text-black"
                    onClick={() => logOut()}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
          <div className="block w-[50px] align-middle mt-2">
            <CartIcon onClick={() => navigate(WEB_URL.CART)} />

            {count && (
              <div className="w-[12px] h-[12px] bg-red-700 text-white justify-center text-[8px] border-1 rounded-[35px] flex -mt-7 ml-4">
                {count}
              </div>
            )}
          </div>
        </div>
        <img
          onClick={() => setToggleBtn(!toggleBtn)}
          className="relative group block md:hidden mx-14 h-4 w-4"
          src={menu}
          alt="toggle"
        />
      </div>
      {toggleBtn && (
        <div className="absolute right-0 grid border rounded-md bg-teal-100 z-50 p-2 top-10 text-center h-[25%] w-[40%] text-zinc-700 group-hover:block md:hidden">
          <a href="/" className="text-gray-600 hover:text-black">
            Shop
          </a>
          <div className="relative group hover:block">
            <button className="cursor-pointer focus:outline-none p-2 text-gray-600 hover:text-black">
              Category
            </button>
            <ul className="absolute right-28 -mt-16 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 hidden group-hover:block">
              <li>
                <a
                  href="/category/mens"
                  className="block px-4 py-2 hover:bg-gray-400"
                >
                  Mens
                </a>
              </li>
              <li>
                <a
                  href="/category/womens"
                  className="block px-4 py-2 hover:bg-gray-400"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="/category/footwear"
                  className="block px-4 py-2 hover:bg-gray-400"
                >
                  Footwear
                </a>
              </li>
              <li>
                <a
                  href="/category/bags"
                  className="block px-4 py-2 hover:bg-gray-400"
                >
                  Bags
                </a>
              </li>
              <li>
                <a
                  href="/category/beauty-products"
                  className="block px-4 py-2 hover:bg-gray-400"
                >
                  Beauty Products
                </a>
              </li>
            </ul>
          </div>

          <button>
            <a href="/login">Login</a>
          </button>
        </div>
      )}
    </>
  );
};

export default TopBar;
