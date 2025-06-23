import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/Button";
import FormController from "components/FormController";
import Heading from "components/Heading";
import { addressSchema } from "pages/Auth/validate";
import { useForm } from "react-hook-form";

const Address = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addressSchema),
  });

  return (
    <form className="w-full items-center text-slate-900 rounded-lg shadow-md p-1 overflow-y-auto">
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
        name="phoneNumber"
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
