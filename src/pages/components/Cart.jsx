import { DeleteIcon, EmptyCart } from "assets/icons/Svg";
import { getData, postJson } from "api/ApiController";
import { API_URL, WEB_URL } from "api/urls";
import Button from "components/Button";
import Heading from "components/Heading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  addressList,
  cartQuantity,
  showDrawer,
  showPopup,
  toaster,
} from "redux/slice";
import Drawer from "components/Drawer";

import { AddressCard } from "./AddressCard";
import { getAddressList } from "redux/selector";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./Stepper/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const base_url = import.meta.env.VITE_BASE_URL;

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [myCart, setMyCart] = useState({});
  const addedList = useSelector(getAddressList);
  const [clientSecret, setClientSecret] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const [paymentIdFromUrl, setPaymentIdFromUrl] = useState(null);
  const [buttonMode, setButtonMode] = useState("");
  const [searchParams] = useSearchParams();

  function remove(items) {
    postJson(API_URL.CART.REMOVE_PRODUCT, { productId: items?._id }).then(
      (res) => {
        if (res.success)
          dispatch(toaster({ show: true, message: res.message }));
        getData(API_URL.CART.MY_CART).then((res) => {
          if (res?.success) {
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

  const makePayment = async (data) => {
    if (addedList?.length > 0 && address) {
      const payload = {
        currency: "INR",
        amount: data?.totalCost * 100,
      };
      postJson(API_URL.CART.MAKE_PAYMENT, payload).then((res) => {
        if (res.success) {
          setClientSecret(res?.data?.client_secret);
          setPaymentId(res?.data?.id);
          setShowForm(true);
        }
      });
    } else {
      alert("Please select the address");
    }
  };

  const defaultAddress = (addresses) => {
    setAddress(addresses._id);
    const payload = {
      addressId: addresses?._id,
    };
    postJson(API_URL.USER.DEFAULT_ADDRESS, payload);
  };

  const placeOrder = () => {
    const payload = {
      paymentId: paymentIdFromUrl,
      cartId: myCart?._id,
    };
    postJson(API_URL.CART.PLACE_ORDER, payload).then((res) => {
      if (res)
        dispatch(
          showPopup({
            title: "***THANK YOU***",
            content: "Your Order Is Confirmed",
            show: true,
            type: "Ok",
            onButtonClick: () => {
              window.location.href = WEB_URL.ORDER.PLACE_ORDER;
            },
          })
        );
    });
  };

  useEffect(() => {
    getData(API_URL.CART.MY_CART).then((res) => {
      console.log("2222222", res);
      if (res?.success && res?.data) {
        dispatch(cartQuantity(res.data?.totalQty));
        setMyCart(res?.data);
        setAddress(res?.data?.address);
      } else
        dispatch(
          toaster({ show: true, message: res.message, varient: "error" })
        );
    });
    getData(API_URL.BUY.MY_ADDRESS).then((res) => {
      if (res?.success) {
        dispatch(addressList(res?.data));
      }
    });
    const paymentUrlId = searchParams.get("paymentId");

    if (paymentUrlId) {
      setPaymentIdFromUrl(paymentUrlId);

      setButtonMode("order");
    }
  }, [searchParams]);

  if (Object.keys(myCart).length === 0) {
    return (
      <div className="flex flex-col p-3 gap-10 w-full bg-teal-100">
        <div className="flex justify-center">
          <EmptyCart className="relative items-center w-full" />
          <h2 className="absolute font-bold text-black text-lg text-center bottom-64">
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
      <div className="relative flex flex-col w-full md:flex md:justify-betwee justify-center md:flex-row md:w-full px-4 py-10 bg-teal-50">
        <div className="w-full md:w-[70%] ml-0 md:ml-5">
          <Heading
            label="My Cart Details"
            className="text-[8px] md:text-[16px]  text-teal-900 font-bold p-2"
          />
          <table className="table-fixed border border-r-2 w-full md:w-full m-2 text-black">
            <thead>
              <tr className="border-b-2 p-2 text-left text-[10px] md:text-[16px]">
                <th>Product</th>
                <th>Title</th>
                <th>Size</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {myCart?.items?.map((val) => (
                <tr
                  className="text-left border border-x-2 text-[10px] md:text-[16px]"
                  key={val?._id}
                >
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
                      className="w-[55%] md:w-[35%] p-2 cursor-pointer"
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
          <div className="flex justify-between w-full text-[10px] md:text-[16px]">
            <Heading
              label="Select Delivery Address"
              className="text-[8px] md:text-[16px] font-bold text-teal-900 p-2"
            />
            <Button
              variant="gost"
              className="text-center text-teal-900 font-bold md:w-[45%]"
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
              +ADD NEW ADDRESS
            </Button>
            <Drawer />
          </div>
          {addedList.length !== 0 && (
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              {Array.isArray(addedList) &&
                addedList?.map((addresses) => (
                  <AddressCard
                    key={addresses?._id}
                    addressData={addresses}
                    onClick={() => defaultAddress(addresses)}
                    className={
                      address === addresses?._id
                        ? " text-emerald-950 font-semibold text-[8px] md:text-[16px] border-teal-900"
                        : "hover:bg-slate-200"
                    }
                  />
                ))}
            </div>
          )}
        </div>
        <div className="relative w-full text-[8px] md:text-[16px] md:w-1/3 ml-0 md:ml-5">
          <Heading
            label="Price Details"
            className="text-[10px] md:text-[16px] font-bold text-teal-900 p-2"
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

            <hr className="boder-1 border-black w-[190px] md:w-[320px] m-2" />

            <tr className="text-black font-bold">
              <td>Order Total:</td>
              <td>₹{myCart?.totalCost}</td>
            </tr>
          </table>

          <div className="flex justify-center ml-10 p-4 w-[55%] md:w-[55%]">
            <Button
              variant="primary"
              className="font-bold text-center w-full"
              onClick={() => {
                if (buttonMode === "order" && paymentIdFromUrl) {
                  console.log("1111", paymentIdFromUrl);
                  placeOrder(myCart, paymentIdFromUrl);
                } else {
                  makePayment(myCart, addedList);
                }
              }}
            >
              {buttonMode === "order" ? "Place Order" : "Pay Now"}
            </Button>
            {showForm && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm
                  paymentId={paymentId}
                  base_url={base_url}
                  className="absolute"
                />
              </Elements>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
