import Card from "components/Card";
import Heading from "components/Heading";
import FilterSidebar from "components/Sidemenu";
import { useEffect, useState } from "react";
import { sideBarFilter } from "utils/common";
import { EmptyProduct, FilterImg } from "assets/icons/Svg";
import { getData } from "api/ApiController";
import { API_URL, WEB_URL } from "api/urls";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { toaster } from "redux/slice";
const sideMenuData = [
  {
    title: "Category",
    submenu: [
      "All",
      "Shirts",
      "Jeans",
      "T-Shirts",
      "Dhoti",
      "Shorts",
      "Pants",
      "Ethnic Wear",
    ],
  },
  {
    title: "Brand",
    submenu: ["Nike", "Adidas", "Puma", "Zara"],
  },
  {
    title: "Price",
    submenu: ["Under $350", "$350 - $600", "Over $601"],
  },
];

function Mens() {
  const [filterBtn, setFilterBtn] = useState(false);
  const [mensProd, setMenProd] = useState([]);
  const [filterProd, setFilterProd] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(API_URL.PRODUCT.BY_CATEGORY.replace(":category", "Men")).then(
      (res) => {
        if (res.success) {
          setMenProd(res?.data);
          setFilterProd(res?.data);
        } else
          dispatch(
            toaster({ show: true, message: res.message, varient: "error" })
          );
      }
    );
  }, []);

  const getSelectedItem = (item = []) => {
    setFilterProd(sideBarFilter(mensProd, item, sideMenuData));
  };
  if (mensProd.length === 0) {
    return (
      <div className="w-full h-full flex flex-col justify-center p-5 gap-3 bg-teal-50">
        <div className="flex flex-col mt-5 p-3 items-center">
          <EmptyProduct className="md:w-[150px] w-[90px] md:h-[150px] h-[90px]" />
          <h2 className="text-[15px] md:text-[25px] font-bold text-teal-900">
            No Products Found
          </h2>
          <h4 className="text-[10px] md:text-md font-semibold text-teal-900">
            The page you are looking for could not be found.
          </h4>
        </div>
        <div className="flex justify-center">
          <Button
            variant="primary"
            className="text-[8px] md:text-[15px] font-bold w-[35%] md:w-[15%]"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <div className="flex justify-between w-full bg-white">
          <FilterImg
            onClick={() => setFilterBtn(!filterBtn)}
            className="relative group block md:hidden mx-10 h-8 w-8 mt-2"
            alt="filterBtn"
          />
          {filterBtn && (
            <div className=" absolute w-[45%] rounded-md border shadow-md mt-10 z-10">
              <FilterSidebar
                sideMenu={sideMenuData}
                selectedItems={getSelectedItem}
              />
            </div>
          )}
          <Heading
            label="Mens Wear"
            className=" md:text-center md:border rounded-md border-teal-500 p-3 text-teal-700 font-bold text-center w-[90%] md:w-full bg-white"
          />
        </div>
        <div className="flex justify-between w-full p-2">
          <div className="hidden md:block w-[25%] rounded-md border shadow-md ">
            <FilterSidebar
              sideMenu={sideMenuData}
              selectedItems={getSelectedItem}
            />
          </div>
          <div className="md:overflow-hidden sm:overflow-x-auto grid grid-cols-4 gap-1 gap-x-20 md:grid-cols-8 md:gap-2 m-2 w-[70%] h-[90%]">
            {filterProd.map((data) => (
              <Card
                key={data._id}
                url={data.url}
                title={data.title}
                price={data.price}
                deliveryStatus={data.deliveryStatus}
                reviews={data.reviews}
                ratings={data.ratings}
                className="h-[250px] md:h-auto col-span-2"
                varient="product"
                navigate={`/${WEB_URL.PRODUCT.VIEW.replace(
                  ":productId",
                  data._id
                )}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Mens;
