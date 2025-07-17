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
  const [categoryBtn, setCategoryBtn] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");
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
          <img className="w-[45%] md:w-[25%]" src={Logo_name} alt="Logo_name" />
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

            <ul className="absolute items-center right-0 p-6 top-[40px] w-28 bg-teal-100 text-black rounded-lg shadow-lg hidden group-hover:block">
              <li>
                <a
                  href={WEB_URL.ORDER.PLACE_ORDER}
                  className="cursor-pointer focus:outline-none p-2 text-gray-600 hover:text-black hover:font-bold"
                >
                  MyOrder
                </a>
              </li>
              {Name && (
                <li>
                  <button
                    className="cursor-pointer focus:outline-none p-3 text-gray-600 hover:text-black hover:font-bold"
                    onClick={() => logOut()}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="md:hidden block w-[40px] align-middle mt-1">
          <CartIcon
            className="cursor-pointer w-[18px] h-[18px]"
            onClick={() => {
              if (token) {
                navigate(WEB_URL.CART);
              } else {
                navigate(WEB_URL.USER.LOGIN);
              }
            }}
          />

          {count && count !== 0 && (
            <div className="w-[8px] h-[8px] bg-red-700 text-white justify-center text-[5px] border-1 rounded-[35px] flex -mt-5 ml-3">
              {count}
            </div>
          )}
        </div>
        <img
          onClick={() => setToggleBtn(!toggleBtn)}
          className="relative group block md:hidden mx-4 mt-1 h-4 w-4"
          src={menu}
          alt="toggle"
        />
      </div>
      {toggleBtn && (
        <div className="absolute right-0 border rounded-md bg-teal-50 z-50 gap-3 p-3 top-14 text-center w-[40%] md:hidden">
          <a
            href="/"
            onClick={() => setActiveBtn("shop")}
            className={`block py-2 ${
              activeBtn === "shop"
                ? "font-bold bg-slate-200 rounded-md"
                : "text-black"
            }`}
          >
            Shop
          </a>

          <div className="text-left py-2">
            <button
              onClick={() => {
                setCategoryBtn(!categoryBtn);
                setActiveBtn("category");
              }}
              className={`w-full ${
                activeBtn === "category"
                  ? "font-bold  bg-slate-200 rounded-md"
                  : "text-black"
              }`}
            >
              Category
            </button>

            {categoryBtn && (
              <ul className="left-0 mt-2 w-38 bg-white text-black rounded-lg shadow-lg z-50">
                <li>
                  <a
                    href="/category/mens"
                    onClick={() => setActiveBtn("mens")}
                    className={`block px-4 py-2 ${
                      activeBtn === "mens"
                        ? "font-bold  bg-slate-200 rounded-md"
                        : "text-black"
                    }`}
                  >
                    Mens
                  </a>
                </li>
                <li>
                  <a
                    href="/category/womens"
                    onClick={() => setActiveBtn("women")}
                    className={`block px-4 py-2 ${
                      activeBtn === "women"
                        ? "font-bold  bg-slate-200 rounded-md"
                        : "text-black"
                    }`}
                  >
                    Women
                  </a>
                </li>
                <li>
                  <a
                    href="/category/footwear"
                    onClick={() => setActiveBtn("footwear")}
                    className={`block px-4 py-2 ${
                      activeBtn === "footwear"
                        ? "font-bold  bg-slate-200 rounded-md"
                        : "text-black"
                    }`}
                  >
                    Footwear
                  </a>
                </li>
                <li>
                  <a
                    href="/category/bags"
                    onClick={() => setActiveBtn("bags")}
                    className={`block px-4 py-2 ${
                      activeBtn === "bags"
                        ? "font-bold  bg-slate-200 rounded-md"
                        : "text-black"
                    }`}
                  >
                    Bags
                  </a>
                </li>
                <li>
                  <a
                    href="/category/beauty-products"
                    onClick={() => setActiveBtn("beauty")}
                    className={`block px-4 py-2 ${
                      activeBtn === "beauty"
                        ? "font-bold  bg-slate-200 rounded-md"
                        : "text-black"
                    }`}
                  >
                    Beauty Products
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a
            href={WEB_URL.ORDER.PLACE_ORDER}
            onClick={() => setActiveBtn("order")}
            className={`block py-1 cursor-pointer focus:outline-none ${
              activeBtn === "order"
                ? "font-bold  bg-slate-200 rounded-md"
                : "text-black"
            }`}
          >
            My Order
          </a>
          {Name ? (
            <div className="flex flex-col">
              <a
                className="cursor-pointer focus:outline-none p-3 text-black"
                onClick={() => logOut()}
              >
                Logout
              </a>
              <div className="flex flex-row gap-2">
                <ProfileIcon className="md:w-[25px] w-[18px] md:h-[25px] h-[20px]" />
                <p className="text-teal-600 text-[15px]">{Name}</p>
              </div>
            </div>
          ) : (
            <a
              href="/login"
              onClick={() => setActiveBtn("login")}
              className={`block py-2 cursor-pointer focus:outline-none ${
                activeBtn === "login"
                  ? "font-bold  bg-slate-200 rounded-md"
                  : "text-black font-bold"
              }`}
            >
              Login
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default TopBar;
