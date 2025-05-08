import Card from "components/Card";
import { womens } from "pages/home/data";

function Womens() {
  return (
    <div className="flex justify-center w-full p-3 bg-blue-100 mt-10">
      <div className="w-[20%]"></div>
      <div className="grid grid-cols-8 gap-3 m-3">
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
  );
}

export default Womens;
