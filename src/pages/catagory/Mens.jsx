import Card from "components/Card";
import Heading from "components/Heading";
import FilterSidebar from "components/Sidemenu";
import { mens } from "pages/home/data";

function Mens() {
  return (
    <>
      <Heading label="Mens Wear" className=" text-center font-bold w-full" />
      <div className="flex justify-between w-full p-2">
        <div className="w-[25%] rounded-md border shadow-md ">
          {/* <Heading label="Filter by:" className="text-[15px] p-2 font-bold" />
          <hr className="w-full border-b-0 border-y-neutral-500 " />
          <ul className="p-2  flex flex-col mens-list ">
            <a href="#">Category</a>

            <a onClick={()=>setButton(!button)}href="#">Price</a>
            <a href="#">Color</a>
            <a href="#">Rating</a>
          </ul> */}
          <FilterSidebar />
        </div>
        <div className="grid grid-cols-8 gap-3 m-3 w-[75%]">
          {mens.map((data) => (
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

export default Mens;
