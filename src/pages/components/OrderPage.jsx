import { getData } from "api/ApiController";
import { API_URL, WEB_URL } from "api/urls";
import Heading from "components/Heading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      className={`flex flex-col justify-between gap-3 w-full h-auto px-5 py-10 border-2 rounded-md bg-teal-50 ${className}`}
    >
      <div className="flex flex-row justify-between border-black border-b rounded-sm p-1 w-full -mt-7">
        <div className="flex flex-col gap-1">
          <h3 className="text-teal-900 font-bold">Order Number</h3>
          <p className="text-black">{orderNumber}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-teal-900 font-bold">Order Date</h3>
          <p className="text-black">{orderDate}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-teal-900 font-bold">Delivery Status</h3>

          <p className="text-sm text-black">{deliveryStatus}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-teal-900 font-bold">Delivery Expected by</h3>
          <p className="text-sm text-black">{deliveryExpected}</p>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col gap-5 w-full">
          {items.map((item, index) => (
            <div key={index} className="flex gap-14">
              <img className="w-[90px] h-[100px] p-2" src={item.imageUrl} />
              <div className="flex flex-col gap-2 w-[40%] justify-center">
                <h4
                  onClick={() =>
                    navigate(
                      `/${WEB_URL.PRODUCT.VIEW.replace(
                        ":productId",
                        item?.productId
                      )}`
                    )
                  }
                  className="text-black text-sm font-semibold cursor-pointer hover:font-bold"
                >
                  {item.title}
                </h4>
                <p className="text-xs text-teal-800 font-bold">₹{item.price}</p>
                <p className="text-black text-sm">Size: {item.size}</p>
                <p className="text-black text-sm">Qty: {item.qty}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-[60%]">
          <h3 className="text-teal-900 font-bold">Shipping address</h3>
          <p className="text-sm text-black">{address}</p>
        </div>
      </div>
    </div>
  );
};

const OrderPage = () => {
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    getData(API_URL.CART.MY_ORDER).then((res) => {
      setMyOrder(res?.data);
      console.log("22222", res.data);
    });
  }, []);
  return (
    <div className="flex justify-center w-full bg-white">
      <div className="w-[80%] mt-5">
        <div className="w-full p-2">
          <Heading
            label="My Orders"
            className="text-[25px] text-teal-900 font-bold pt-3"
          />
          <div className="flex flex-col justify-center gap-2">
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
};

export default OrderPage;
