import { useEffect, useState } from "react";
import Button from "../components/Button";
import menu from "assets/images/menu.png";
import { getUserDetails, logOut } from "utils/common";
import { CartIcon, ProfileIcon } from "assets/icons/Svg";
import { API_URL, WEB_URL } from "../api/urls";
import { useNavigate } from "react-router-dom";
import Logo_name from "assets/images/Logo_name.png";
import { useDispatch, useSelector } from "react-redux";
import { getCartCount } from "redux/selector";
import { getData } from "../api/ApiController";
import { cartQuantity } from "redux/slice";

const TopBar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Name = "" } = getUserDetails();
  const count = useSelector(getCartCount);
  const token = localStorage.getItem("pvr-token");

  useEffect(() => {
    if (token)
      getData(API_URL.CART.MY_CART).then((res) => {
        dispatch(cartQuantity(res?.data?.totalQty));
      });
  }, [token]);

  return (
    <>
      <div className="bg-teal-50 w-full border-b fixed top-0 justify-between flex px-4 py-2 z-50 shadow-xl">
        <div>
          <img className="w-[25%]" src={Logo_name} alt="Logo_name" />
        </div>

        <div className="hidden md:flex gap-x-6 ">
          <a href="/" className="text-teal-950 hover:font-bold p-2">
            Shop
          </a>
          <div className="relative group hidden md:block ">
            <button className="cursor-pointer focus:outline-none p-2 text-teal-950 hover:font-bold ">
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
          <div className="block w-[40px] align-middle mt-2">
            <CartIcon
              className="cursor-pointer"
              onClick={() => {
                if (token) {
                  navigate(WEB_URL.CART);
                } else {
                  navigate(WEB_URL.USER.LOGIN);
                }
              }}
            />

            {count && count !== 0 && (
              <div className="w-[12px] h-[12px] bg-red-700 text-white justify-center text-[8px] border-1 rounded-[35px] flex -mt-7 ml-4">
                {count}
              </div>
            )}
          </div>

          <div className="relative group hidden md:block">
            <Button variant="login">
              {Name ? (
                <div className="flex flex-row gap-2">
                  <ProfileIcon />
                  <p className="text-teal-950 hover:text-red-700">{Name}</p>
                </div>
              ) : (
                <a href="/login">Login</a>
              )}
            </Button>
            {Name && (
              <ul className="absolute right-0 p-5 top-[40px] w-18 bg-teal-100 text-black rounded-lg shadow-lg hidden group-hover:block">
                <li>
                  <a
                    href={WEB_URL.ORDER.PLACE_ORDER}
                    className="cursor-pointer focus:outline-none p-3 text-gray-600 hover:text-black hover:font-bold"
                  >
                    My Order
                  </a>
                </li>
                <li>
                  <button
                    className="cursor-pointer focus:outline-none p-3 text-gray-600 hover:text-black hover:font-bold"
                    onClick={() => logOut()}
                  >
                    Logout
                  </button>
                </li>
              </ul>
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
