import { DeleteIcon } from "assets/icons/Svg";
import { getData, postJson } from "components/api/ApiController";
import { API_URL } from "components/api/urls";
import { useEffect, useState } from "react";

const Cart = () => {
  const [myCart, setMyCart] = useState({});

  function remove(items) {
    postJson(API_URL.CART.REMOVE_PRODUCT, { productId: items?._id }).then(
      () => {
        getData(API_URL.CART.MY_CART).then((res) => {
          setMyCart(res?.data);
        });
      }
    );
  }

  useEffect(() => {
    getData(API_URL.CART.MY_CART).then((res) => {
      setMyCart(res?.data);
    });
  }, []);

  return (
    <div className="w-full p-3">
      <table className=" table-fixed border border-r-2  w-[90%] ml-16 text-black">
        <thead>
          <tr className="border-b-2 p-2 text-left">
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
                <img className="w-[25%] p-2" src={val.imageUrl} />
              </td>
              <td>{val.title}</td>
              <td>{val.size}</td>
              <td>{val.price}</td>
              <td>
                <DeleteIcon fill="red" onClick={() => remove(val)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
