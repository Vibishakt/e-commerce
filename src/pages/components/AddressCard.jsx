import { getData, postJson } from "api/ApiController";
import { API_URL } from "api/urls";
import { DeleteIcon } from "assets/icons/Svg";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { addressList, showDrawer } from "redux/slice";

export const AddressCard = ({
  addressData = {},
  onClick = () => {},
  className = "",
}) => {
  const dispatch = useDispatch();

  function deleteAddress(res) {
    if (res)
      postJson(API_URL.BUY.DELETE_ADDRESS, { addressId: res }).then((res) => {
        if (res)
          getData(API_URL.BUY.MY_ADDRESS).then((res) => {
            dispatch(addressList(res?.data));
          });
      });
  }

  function editAddress(data) {
    dispatch(
      showDrawer({
        show: true,
        content: "address",
        title: "ADD DELIVERY ADDRESS",
        width: "400px",
        addressData: data,
      })
    );
  }

  return (
    <div
      onClick={onClick}
      className={`w-[80%] md:w-full md:h-[220px] h-[120px] border-2 rounded-xl shadow-md col-span-2 md:p-1 p-1 cursor-pointer ${className}`}
    >
      <div className="flex justify-between md:p-1 p-1">
        <Button
          variant="gost"
          className="text-[10px] md:text-[16px] text-center text-teal-900 font-bold w-[12%]"
          onClick={() => editAddress(addressData)}
        >
          EDIT
        </Button>
        <DeleteIcon
          className="cursor-pointer md:w-[15px] md:h-[15px] w-[9px] h-[9px]"
          fill="red"
          onClick={() => deleteAddress(addressData._id)}
        />
      </div>
      <div className="m-1">
        <p className="text-[10px] md:text-[16px] font-bold text-black p-1 md:p-2">
          {addressData.name}
        </p>
        <p className="text-[8px] md:text-[16px] text-black md:p-1">
          {addressData.houseAddress},{addressData.locality},
          {addressData.district}
        </p>
        <p className="text-[8px] md:text-[16px] text-black md:p-1">
          {addressData.state}
        </p>
        <p className="text-[8px] md:text-[16px] text-black md:p-1">
          {addressData.pincode}
        </p>
        <p className="text-[8px] md:text-[16px] text-black md:p-1">
          {addressData.phone}
        </p>
      </div>
    </div>
  );
};
