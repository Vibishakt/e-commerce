import { getData } from "api/ApiController";
import { API_URL, WEB_URL } from "api/urls";
import { EmptyProduct } from "assets/icons/Svg";
import Button from "components/Button";
import Heading from "components/Heading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toaster } from "redux/slice";
import { deliveryDate, formatDate } from "utils/common";

const OrderCard = ({
  items = [],
  className,
  address,
  orderNumber,
  deliveryStatus,
  orderDate,
  deliveryExpected,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col justify-between gap-4 md:gap-3 w-full h-auto px-5 py-10 border-2 rounded-md bg-teal-50 ${className}`}
    >
      <div className="flex flex-row justify-between border-black border-b rounded-sm p-1 w-full -mt-7">
        <div className="flex flex-col gap-1">
          <h3 className="text-teal-900 text-[10px] md:text-[15px] font-bold">
            Order Number
          </h3>
          <p className="text-black text-[10px] md:text-[15px]">{orderNumber}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-teal-900 font-bold text-[10px] md:text-[15px]">
            Order Date
          </h3>
          <p className="text-black text-[10px] md:text-[15px]">{orderDate}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-teal-900 font-bold text-[10px] md:text-[15px]">
            Delivery Status
          </h3>

          <p className="text-black text-[10px] md:text-[15px]">
            {deliveryStatus}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-teal-900 font-bold text-[10px] md:text-[15px]">
            Delivery Expected by
          </h3>
          <p className="text-black text-[10px] md:text-[15px]">
            {deliveryExpected}
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col gap-5 w-full">
          {items.map((item, index) => (
            <div key={index} className="flex gap-3 md:gap-14">
              <img
                className="w-[50px] h-[60px] md:w-[90px] md:h-[100px] p-2"
                src={item.imageUrl}
              />
              <div className="flex flex-col gap-2 w-[70%] md:w-[40%] justify-center">
                <h4
                  onClick={() =>
                    navigate(
                      `/${WEB_URL.PRODUCT.VIEW.replace(
                        ":productId",
                        item?.productId
                      )}`
                    )
                  }
                  className="text-black text-[10px] md:text-[15px] font-semibold cursor-pointer hover:font-bold"
                >
                  {item.title}
                </h4>
                <p className="text-[10px] md:text-[15px] text-teal-800 font-bold">
                  ₹{item.price}
                </p>
                <p className="text-black text-[10px] md:text-[15px]">
                  Size: {item.size}
                </p>
                <p className="text-black text-[10px] md:text-[15px]">
                  Qty: {item.qty}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-[90%] md:w-[60%]">
          <h3 className="text-teal-900 md:pt-1 pt-2 font-bold text-[10px] md:text-[15px]">
            Shipping address
          </h3>
          <p className="text-[10px] md:text-[15px] text-black">{address}</p>
        </div>
      </div>
    </div>
  );
};

const OrderPage = () => {
  const [myOrder, setMyOrder] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getData(API_URL.CART.MY_ORDER).then((res) => {
      if (res.success) {
        setMyOrder(res?.data);
      } else
        dispatch(
          toaster({ show: true, message: res.message, varient: "error" })
        );
    });
  }, []);

  if (myOrder.length === 0) {
    return (
      <div className="w-full h-full flex flex-col justify-center p-5 gap-3 bg-teal-50">
        <div className="flex flex-col mt-5 p-3 items-center">
          <EmptyProduct className="md:w-[150px] w-[90px] md:h-[150px] h-[90px]" />
          <h2 className="text-[15px] md:text-[25px] font-bold text-teal-900">
            No orders Found in this page
          </h2>
          <h4 className="text-[10px] md:text-[12px] font-semibold text-teal-900">
            Looks like you have not made any orders yet
          </h4>
        </div>
        <div className="flex justify-center">
          <Button
            variant="primary"
            className="text-[8px] md:text-[15px] font-bold w-[35%] md:w-[15%]"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center w-full md:w-full bg-white">
        <div className="w-full md:w-[80%] mt-3 md:mt-5">
          <div className="w-full p-2">
            <Heading
              label="My Orders"
              className="text-[18px] md:text-[25px] text-teal-900 font-bold pt-3"
            />
            <div className="flex flex-col justify-center gap-3 md:gap-2">
              {myOrder.map((data) => (
                <OrderCard
                  key={data._id}
                  orderNumber={data.orderId}
                  items={data.items}
                  address={data.address}
                  deliveryStatus={data.deliveryStatus}
                  orderDate={formatDate(data.createdAt)}
                  deliveryExpected={deliveryDate(data.createdAt)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default OrderPage;
