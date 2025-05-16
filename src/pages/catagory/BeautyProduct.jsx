import Card from "components/Card";
import Heading from "components/Heading";
import FilterSidebar from "components/Sidemenu";
import { beautyProducts } from "pages/home/data";
import { useState } from "react";
import { sideBarFilter } from "utils/common";
const sideMenuData = [
  {
    title: "Category",
    submenu: [
      "All",
      "Massage",
      "Perfume",
      "FaceWash",
      "Face Mask",
      "Face Pack",
      "Kit",
      "Capsules",
    ],
  },
  {
    title: "Brand",
    submenu: ["MamaEarth", "DermaTouch", "LatiBlue"],
  },
  {
    title: "Price",
    submenu: ["Under $350", "$350 - $600", "Over $601"],
  },
];

function BeautyProducts() {
  const [beautyProductsProd, setbeautyProductProd] = useState(beautyProducts);

  const getSelectedItem = (item = []) => {
    setbeautyProductProd(sideBarFilter(beautyProducts, item, sideMenuData));
  };
  return (
    <>
      <Heading
        label="Beauty Products"
        className=" text-center border rounded-md border-teal-500 p-3 text-teal-700 font-bold w-full bg-white"
      />
      <div className="flex justify-between w-full p-2">
        <div className="w-[25%] rounded-md border shadow-md ">
          <FilterSidebar
            sideMenu={sideMenuData}
            selectedItems={getSelectedItem}
          />
        </div>
        <div className="grid grid-cols-8 gap-3 m-3 w-[75%]">
          {beautyProductsProd.map((data) => (
            <Card
              key={data.id}
              url={data.url}
              title={data.title}
              price={data.price}
              deliveryStatus={data.deliveryStatus}
              reviews={data.reviews}
              ratings={data.ratings}
              className=" h-auto col-span-2"
              varient="product"
              navigate={`/product-view/${data.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BeautyProducts;
