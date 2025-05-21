import { useForm } from "react-hook-form";
import FormController from "components/FormController";
import { RegisterImg } from "assets/icons/Svg";
import Heading from "components/Heading";
import Button from "components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./validate";

function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };
  return (
    <div className=" flex flex-col md:flex-row justify-center w-full p-3 md:p-5 md:mt-5 md:gap-5 bg-teal-50">
      <div className="md:h-[300px] md:w-1/3">
        <RegisterImg />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-[400px] md:w-[30%] md:h-auto text-slate-900 rounded-lg shadow-md p-3 md:p-3 bg-teal-100"
      >
        <Heading
          label="Register"
          className="text-sm md:text-lg text-center font-bold"
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

        <FormController
          name="email"
          control={control}
          errors={errors}
          label="Email"
          type="email"
        />
        <FormController
          name="password"
          control={control}
          errors={errors}
          label="Password"
          type="password"
        />
        <FormController
          name="confirmPassword"
          control={control}
          errors={errors}
          label="Confirm Password"
          type="password"
        />

        <div className="flex ">
          <Button
            type="register"
            variant="secondary"
            className="rounded-[80px] w-full text-xs md:text-lg hover:bg-gray-400"
          >
            Register
          </Button>
        </div>
        <h3 className="p-3 text-xs md:text-sm">
          Have an account?&ensp;
          <a
            href="/Login"
            className="text-red-600 text-xs md:text-sm font-bold hover:underline"
          >
            Login Here
          </a>
        </h3>
      </form>
    </div>
  );
}

export default Register;
