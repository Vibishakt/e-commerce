import Card from "components/Card";
import Heading from "components/Heading";
import { productCategory } from "./data";

function ProductsCategory() {
  return (
    <div className="grid justify-center bg-white w-full p-5">
      <Heading
        label="Product Category "
        className="flex justify-center font-bold p-2"
      />
      <div className="grid grid-cols-10 gap-2 m-3 w-full">
        {productCategory.map((data) => (
          <Card
            key={data.id}
            url={data.url}
            title={data.title}
            className="w-[90%] h-auto col-span-2 hover:translate-x-2 ease-in-out "
            navigate={data?.navigateurl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsCategory;
