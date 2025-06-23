import Card from "components/Card";
import Heading from "components/Heading";
import { productCategory } from "./data";

function ProductsCategory({ className, title = "Product Category" }) {
  return (
    <div className={`grid justify-center bg-white w-full p-5${className}`}>
      <Heading
        label={title}
        className="text-[12px] md:text-[26px] flex justify-center font-bold p-2"
      />
      <div className="grid grid-cols-10 gap-3 m-3 w-full">
        {productCategory.map((data) => (
          <Card
            key={data.id}
            url={data.url}
            title={data.title}
            className="w-[90%] h-auto md:col-span-2 col-span-3 hover:translate-x-2 ease-in-out "
            navigate={data?.navigateurl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsCategory;
