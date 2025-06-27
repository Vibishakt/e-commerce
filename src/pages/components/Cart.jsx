import { DeleteIcon, EmptyCart } from "assets/icons/Svg";
import { getData, postJson } from "api/ApiController";
import { API_URL, WEB_URL } from "api/urls";
import Button from "components/Button";
import Heading from "components/Heading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addressList, cartQuantity, showDrawer, toaster } from "redux/slice";
import Drawer from "components/Drawer";

import { AddressCard } from "./AddressCard";
import { getAddressList } from "redux/selector";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [myCart, setMyCart] = useState({});
  const addedList = useSelector(getAddressList);

  const handleShowToast = (msg) => {
    dispatch(toaster({ show: true, message: msg }));
    setTimeout(() => dispatch(toaster({ show: false, message: "" })), 3000);
  };

  function remove(items) {
    postJson(API_URL.CART.REMOVE_PRODUCT, { productId: items?._id }).then(
      (res) => {
        handleShowToast(res?.message);
        getData(API_URL.CART.MY_CART).then((res) => {
          if (res?.data) {
            setMyCart(res?.data);
            dispatch(cartQuantity(res?.data?.totalQty));
          } else {
            setMyCart({});
            dispatch(cartQuantity(0));
          }
        });
      }
    );
  }

  useEffect(() => {
    getData(API_URL.CART.MY_CART).then((res) => {
      if (res?.data) {
        dispatch(cartQuantity(res.data?.totalQty));
        setMyCart(res.data);
      }
    });
    getData(API_URL.BUY.MY_ADDRESS).then((res) => {
      if (res?.data) {
        dispatch(addressList(res?.data));
      }
    });
  }, []);

  if (Object.keys(myCart).length === 0) {
    return (
      <div className="flex flex-col p-3 gap-10 w-full bg-white">
        <div className="flex justify-center">
          <EmptyCart className="relative items-center w-full" />
          <h2 className="absolute font-bold text-black text-lg text-center bottom-14">
            Cart is Empty
          </h2>
        </div>
        <div className="flex justify-center">
          <Button
            variant="primary"
            className="font-bold w-[15%]"
            onClick={() => (window.location.href = "/")}
          >
            Start Shopping
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between flex-row w-full px-4 py-10">
        <div className="w-[70%]">
          <Heading
            label="My Cart Details"
            className="text-lg  text-teal-900 font-bold p-2"
          />
          <table className=" table-fixed border border-r-2 w-[90%] m-2 text-black">
            <thead>
              <tr className="border-b-2 p-3 text-left">
                <th>Product</th>
                <th>Title</th>
                <th>Size</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {myCart?.items?.map((val) => (
                <tr className="text-left border border-x-2" key={val?._id}>
                  <td>
                    <img
                      onClick={() =>
                        navigate(
                          `/${WEB_URL.PRODUCT.VIEW.replace(
                            ":productId",
                            val?.productId
                          )}`
                        )
                      }
                      className="w-[35%] p-2 cursor-pointer"
                      src={val?.imageUrl}
                    />
                  </td>
                  <td
                    onClick={() =>
                      navigate(
                        `/${WEB_URL.PRODUCT.VIEW.replace(
                          ":productId",
                          val?.productId
                        )}`
                      )
                    }
                    className="cursor-pointer hover:font-semibold"
                  >
                    {val?.title}
                  </td>
                  <td>{val?.size}</td>
                  <td>₹{val?.price}</td>
                  <td>
                    <DeleteIcon
                      className="cursor-pointer"
                      fill="red"
                      onClick={() => remove(val)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between w-full">
            <Heading
              label="Select Delivery Address"
              className="text-lg font-bold text-teal-900 p-2"
            />
            <Button
              variant="gost"
              className="text-center text-teal-900 font-bold w-[45%]"
              onClick={() =>
                dispatch(
                  showDrawer({
                    show: true,
                    content: "address",
                    title: "ADD DELIVERY ADDRESS",
                    width: "400px",
                    addressData: null,
                  })
                )
              }
            >
              +Add address
            </Button>
            <Drawer />
          </div>
          {addedList.length !== 0 && (
            <div className="grid grid-cols-4 gap-4">
              {Array.isArray(addedList) &&
                addedList?.map((addresses) => (
                  <AddressCard key={addresses?._id} addressData={addresses} />
                ))}
            </div>
          )}
        </div>
        <div className="w-1/3">
          <Heading
            label="Price Details"
            className="text-lg font-bold text-teal-900 p-2"
          />
          <table className="w-[90%] table-fixed m-3">
            <tr className="text-black">
              <td>Number of items:</td>
              <td>{myCart?.totalQty}</td>
            </tr>
            <tr className="text-black">
              <td>Original Price:</td>
              <td>₹{myCart?.originalCost}</td>
            </tr>
            <tr className="text-black">
              <td>Discount:</td>
              <td>₹{myCart?.discount}</td>
            </tr>
            <tr className="text-black">
              <td>Delivery Charge:</td>
              <td>₹{myCart?.deliveryCharge}</td>
            </tr>
            <tr className="text-black">
              <td>Total Products Price:</td>
              <td>₹{myCart?.totalCost}</td>
            </tr>

            <hr className="boder-1 border-black w-[320px] m-2" />

            <tr className="text-black font-bold">
              <td>Order Total:</td>
              <td>₹{myCart?.totalCost}</td>
            </tr>
          </table>

          <div className="flex justify-center ml-10 p-4 w-[55%]">
            <Button
              variant="primary"
              className="font-bold text-center w-[85%]"
              onClick={() => (window.location.href = "/")}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
export default Cart;
