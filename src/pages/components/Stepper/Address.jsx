import { yupResolver } from "@hookform/resolvers/yup";
import { getData, putJson } from "api/ApiController";
import { API_URL } from "api/urls";
import Button from "components/Button";
import FormController from "components/FormController";
import Heading from "components/Heading";
import { addressSchema } from "pages/Auth/validate";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addressList } from "redux/slice";

const Address = ({ addressData = {} }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addressSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (data?._id) data.addressId = data?._id;
    putJson(API_URL.BUY.ADD_ADDRESS, data).then((res) => {
      if (res) {
        const { success, statusCode = "" } = res;
        if (success && statusCode === 200) {
          getData(API_URL.BUY.MY_ADDRESS).then((res) => {
            dispatch(addressList(res?.data));
          });
        }
      }
    });
  };

  useEffect(() => {
    if (addressData) {
      reset(addressData);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full items-center text-slate-900 rounded-lg shadow-md p-1 overflow-y-auto"
    >
      <Heading
        label="Contact Details"
        className="text-[14px] font-semibold mb-3"
      />
      <FormController
        name="name"
        control={control}
        errors={errors}
        label="Name"
      />
      <FormController
        name="phone"
        control={control}
        errors={errors}
        label="Phone Number"
      />
      <Heading label="Address" className="text-[14px] font-semibold mb-3" />

      <FormController
        name="houseAddress"
        control={control}
        errors={errors}
        label="House Address"
      />
      <FormController
        name="locality"
        control={control}
        errors={errors}
        label="Locality"
      />
      <FormController
        name="district"
        control={control}
        errors={errors}
        label="District"
      />
      <FormController
        name="state"
        control={control}
        errors={errors}
        label="State"
      />

      <FormController
        name="pincode"
        control={control}
        errors={errors}
        label="Pincode"
      />
      <Button variant="primary" className="font-bold text-center w-full">
        Save Address
      </Button>
    </form>
  );
};

export default Address;
