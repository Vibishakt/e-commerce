import { FilterImg } from "assets/icons/Svg";
import { getData } from "components/api/ApiController";
import { API_URL, WEB_URL } from "components/api/urls";
import Card from "components/Card";
import Heading from "components/Heading";
import FilterSidebar from "components/Sidemenu";
import { useEffect, useState } from "react";
import { sideBarFilter } from "utils/common";
const sideMenuData = [
  {
    title: "Category",
    submenu: ["All", "Saree", "Kurti", "Top", "Gown", "Palozzo Set"],
  },
  {
    title: "Brand",
    submenu: ["Zara", "Nike", "Adidas", "Puma"],
  },
  {
    title: "Price",
    submenu: ["Under $350", "$350 - $600", "Over $601"],
  },
];

function Womens() {
  const [filterBtn, setFilterBtn] = useState(false);
  const [womensProd, setWomenProd] = useState([]);
  const [filterProd, setFilterProd] = useState([]);
  useEffect(() => {
    getData(API_URL.PRODUCT.BY_CATEGORY.replace(":category", "Women")).then(
      (res) => {
        setWomenProd(res?.data);
        setFilterProd(res?.data);
      }
    );
  }, []);

  const getSelectedItem = (item = []) => {
    setFilterProd(sideBarFilter(womensProd, item, sideMenuData));
  };

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
          label="Womens Wear"
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
        <div className="md:overflow-hidden sm:overflow-x-auto gap-x-20 gap-5 grid-cols-4 grid md:grid-cols-8 md:gap-3 m-3 w-[75%]">
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

export default Womens;
