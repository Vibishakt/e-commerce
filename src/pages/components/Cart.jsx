import { DeleteIcon } from "assets/icons/Svg";
import { getData, postJson } from "components/api/ApiController";
import { API_URL, WEB_URL } from "components/api/urls";
import Heading from "components/Heading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartQuantity, toaster } from "redux/slice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [myCart, setMyCart] = useState({});

  const handleShowToast = (msg) => {
    dispatch(toaster({ show: true, message: msg }));
    setTimeout(() => dispatch(toaster({ show: false, message: "" })), 3000);
  };

  function remove(items) {
    postJson(API_URL.CART.REMOVE_PRODUCT, { productId: items?._id }).then(
      (res) => {
        handleShowToast(res?.message);
        getData(API_URL.CART.MY_CART).then((res) => {
          setMyCart(res?.data);
          dispatch(cartQuantity(res?.data?.totalQty));
        });
      }
    );
  }

  useEffect(() => {
    getData(API_URL.CART.MY_CART).then((res) => {
      dispatch(cartQuantity(res?.data?.totalQty));
      setMyCart(res?.data);
    });
  }, []);

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
              <tr className="text-left border border-x-2" key={val._id}>
                <td>
                  <img
                    onClick={() =>
                      navigate(
                        `/${WEB_URL.PRODUCT.VIEW.replace(
                          ":productId",
                          val.productId
                        )}`
                      )
                    }
                    className="w-[35%] p-2 cursor-pointer"
                    src={val.imageUrl}
                  />
                </td>
                <td
                  onClick={() =>
                    navigate(
                      `/${WEB_URL.PRODUCT.VIEW.replace(
                        ":productId",
                        val.productId
                      )}`
                    )
                  }
                  className="cursor-pointer hover:font-semibold"
                >
                  {val.title}
                </td>
                <td>{val.size}</td>
                <td>₹{val.price}</td>
                <td>
                  <DeleteIcon fill="red" onClick={() => remove(val)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <td>-₹{myCart?.discount}</td>
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
      </div>
    </div>
  );
};

export default Cart;
