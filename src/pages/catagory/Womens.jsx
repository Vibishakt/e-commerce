import Card from "components/Card";
import Heading from "components/Heading";
import FilterSidebar from "components/Sidemenu";
import { womens } from "pages/home/data";
import { useState } from "react";
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
  const [womensProd, setWomenProd] = useState(womens);

  const getSelectedItem = (item = []) => {
    setWomenProd(sideBarFilter(womens, item, sideMenuData));
  };

  return (
    <>
      <Heading
        label="Womens Wear"
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
          {womensProd.map((data) => (
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

export default Womens;
