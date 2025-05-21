import { RatingImg } from "assets/icons/Svg";
import Button from "components/Button";
import { bags, beautyProducts, footwear, mens, womens } from "pages/home/data";
import { useParams } from "react-router-dom";

const allProducts = [
  ...mens,
  ...womens,
  ...bags,
  ...footwear,
  ...beautyProducts,
];

const ProductView = () => {
  const { productId = "" } = useParams();

  if (!productId) {
    return null;
  }
  const product = allProducts.find((e) => e.id === productId);
  return (
    <div className="grid md:flex md:justify-center gap-10 w-full p-5 bg-teal-50">
      <div className="w-full h-auto md:w-[35%]  flex flex-col p-3 border rounded-md shadow-md bg-white justify-center">
        <img
          width="full"
          height="auto"
          className="items-center"
          src={product?.url}
          alt="productImg"
        />
        <div className="flex justify-between p-3 mt-5">
          <Button
            className="bg-transparent border rounded-sm py-1 md:py-3 w-[35%] md:w-[45%] cursor-pointer border-teal-700 text-slate-900 font-semibold text-xs md:text-sm"
            variant="gost"
          >
            Add to cart
          </Button>
          <Button
            className=" border rounded-sm w-[35%] md:w-[45%] py-1 md:py-3 bg-teal-700 text-white font-semibold cursor-pointer text-xs md:text-sm"
            variant="gost"
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[40%]">
        <div className=" bg-white border rounded-md p-2">
          <h3 className="text-left text-slate-950 font-bold ">
            {product?.title}
          </h3>
          <p className="text-left  text-teal-800 font-bold">{product?.price}</p>
          <div className="flex flex-row p-2 g-3 items-center">
            <div className="flex px-1 items-center gap-1 text-white border rounded-xl bg-green-700">
              <p className="text-xs">{product?.ratings}</p>
              <RatingImg />
            </div>
            &ensp;
            <p className="text-xs text-slate-950 font-normal">
              <span className="font-bold text-slate-700">
                {product?.reviews}{" "}
              </span>{" "}
              Review
            </p>
          </div>
          <p className="text-left p-1 justify-center text-xs w-[30%] md:w-[20%] text-slate-950 font-bold border rounded-lg bg-slate-400">
            {product?.deliveryStatus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
