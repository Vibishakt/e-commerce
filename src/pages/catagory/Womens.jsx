import Card from "components/Card";
import Heading from "components/Heading";
import FilterSidebar from "components/Sidemenu";
import { womens } from "pages/home/data";
const sideMenuData = [
  {
    title: "Category",
    submenu: ["All", "Sarees", "Kurti", "Western Top", "Gown", "Palozzo Sets"],
  },
  {
    title: "Brand",
    submenu: ["Jivika", "High Star", "Alisha", "Myra"],
  },
  {
    title: "Price",
    submenu: ["Under $350", "$350 - $600", "Over $800"],
  },
];

function Womens() {
  return (
    <>
      <Heading
        label="Womens Wear"
        className=" text-center border rounded-md border-teal-500 p-3 text-teal-700 font-bold w-full bg-white"
      />
      <div className="flex justify-between w-full p-2">
        <div className="w-[25%] rounded-md border shadow-md ">
          <FilterSidebar sideMenu={sideMenuData} />
        </div>
        <div className="grid grid-cols-8 gap-3 m-3 w-[75%]">
          {womens.map((data) => (
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
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Womens;
