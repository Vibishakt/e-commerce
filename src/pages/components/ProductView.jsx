import { RatingImg } from "assets/icons/Svg";
import { getData, postJson } from "api/ApiController";
import { API_URL, WEB_URL } from "api/urls";
import Button from "components/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cartQuantity, showPopup, toaster } from "redux/slice";

const ProductView = () => {
  const { productId = "" } = useParams();
  const [product, setProduct] = useState();
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart(type) {
    if (
      (product?.product_details?.size?.length > 0 && size) ||
      product?.product_details?.size?.length === 0
    ) {
      const payload = {
        productId: product?._id,
        qty: 1,
        size,
      };
      postJson(API_URL.CART.ADD_PRODUCT, payload).then((res) => {
        if (res) {
          const { success, statusCode = "", message } = res;
          if (success && statusCode === 200) {
            dispatch(toaster({ show: true, message: message }));

            getData(API_URL.CART.MY_CART).then((res) => {
              dispatch(cartQuantity(res?.data?.totalQty));
              if (type === "BUY") {
                navigate(`/${WEB_URL.CART}`);
              }
            });
          } else {
            if ([401, 403, "401", "403"].includes(statusCode)) {
              navigate(`/${WEB_URL.USER.LOGIN}`);
            } else
              dispatch(
                toaster({ show: true, message: res.message, varient: "error" })
              );
          }
        }
      });
    } else {
      dispatch(
        showPopup({
          title: "Oops! Size is required",
          content: "Please select the size",
          show: true,
          type: null,
          onButtonClick: () => {},
        })
      );
    }
  }
  useEffect(() => {
    if (productId) {
      getData(API_URL.PRODUCT.BY_ID.replace(":productId", productId)).then(
        (res) => {
          if (res.success) {
            setProduct(res?.data);
          } else
            dispatch(
              toaster({ show: true, message: res.message, varient: "error" })
            );
        }
      );
    }
  }, [productId]);

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
            onClick={() => addToCart("ADD")}
          >
            Add to cart
          </Button>
          <Button
            className=" border rounded-sm w-[35%] md:w-[45%] py-1 md:py-3 bg-teal-700 text-white font-semibold cursor-pointer text-xs md:text-sm"
            variant="gost"
            onClick={() => addToCart("BUY")}
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[40%]">
        <div className=" bg-white border rounded-md p-2 mb-3">
          <h3 className="text-left text-slate-950 font-bold ">
            {product?.title}
          </h3>
          <p className="text-left  text-teal-800 font-bold">
            ₹{product?.price}
          </p>
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
          <p className="text-left p-1 justify-center text-[10px] w-[40%] md:w-[20%] text-slate-950 font-semibold border rounded-lg bg-slate-400">
            {product?.deliveryStatus}
          </p>
        </div>
        {product?.product_details?.size.length > 0 && (
          <div className=" bg-white border rounded-md p-4 mb-3">
            <h3 className="text-black text-lg font-semibold mb-2">
              Select Size
            </h3>
            <ul className="flex flex-row gap-2">
              {product?.product_details?.size?.map((val) => (
                <li className="text-red-700" key={val}>
                  <Button
                    onClick={() => setSize(val)}
                    variant="rounded"
                    className={
                      size === val
                        ? " text-emerald-950 font-semibold border-teal-900"
                        : "hover:bg-slate-200"
                    }
                  >
                    {val}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className=" bg-white border rounded-md p-2">
          <h3 className="text-black text-lg font-semibold mb-2">
            Product Details
          </h3>
          <p className="text-black text-sm font-normal">
            Fabric:&ensp;
            {product?.product_details?.fabric}
          </p>
          <p className="text-black text-sm font-normal">
            Color:&ensp;
            {product?.product_details?.color}
          </p>
          <p className="text-black text-sm font-normal">
            Work:&ensp;
            {product?.product_details?.work}
          </p>
          <p className="text-black text-sm font-normal">
            Occasion:&ensp;
            {product?.product_details?.occasion}
          </p>
          <p className="text-black text-sm font-normal">
            Seller Name:&ensp;
            {product?.sellerName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
