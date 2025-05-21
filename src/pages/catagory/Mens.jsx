import Card from "components/Card";
import Heading from "components/Heading";
import FilterSidebar from "components/Sidemenu";
import { mens } from "pages/home/data";
import { useState } from "react";
import { sideBarFilter } from "utils/common";
import { FilterImg } from "assets/icons/Svg";
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
  const [mensProd, setMenProd] = useState(mens);

  const getSelectedItem = (item = []) => {
    setMenProd(sideBarFilter(mens, item, sideMenuData));
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
        <div className="md:overflow-hidden sm:overflow-x-auto grid grid-cols-4 gap-5 gap-x-20 md:grid-cols-8 md:gap-2 m-3 w-[75%]">
          {mensProd.map((data) => (
            <Card
              key={data.id}
              url={data.url}
              title={data.title}
              price={data.price}
              deliveryStatus={data.deliveryStatus}
              reviews={data.reviews}
              ratings={data.ratings}
              className="h-[250px] md:h-auto col-span-2"
              varient="product"
              navigate={`/product-view/${data.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mens;
