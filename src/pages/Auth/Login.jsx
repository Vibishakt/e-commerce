import { useForm } from "react-hook-form";
import FormController from "components/FormController";
import { LoginImg } from "assets/icons/Svg";
import Heading from "components/Heading";
import Button from "components/Button";
import { loginSchema } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rememberMe: false,
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };
  return (
    <div className=" flex flex-col md:flex-row  justify-center h-full md:w-full gap-10 md:gap-5 p-3 md:p-5 mt-0 md:mt-0 bg-teal-50">
      <div className="md:w-1/3">
        <LoginImg />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-[250px] md:h-[350px] md:w-1/3 text-slate-900 p-2 md:p-3 rounded-lg shadow-md bg-teal-100"
      >
        <Heading
          label="Login"
          className="text-sm md:text-lg text-center font-bold"
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
        <div className="flex justify-between">
          <FormController
            name="rememberMe"
            control={control}
            errors={errors}
            label="Remember Me"
            type="checkbox"
          />
          <a
            href="#"
            className="text-blue-700 text-xs md:text-sm hover:underline"
          >
            Forgot Password
          </a>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="secondary"
            className="text-sm md:text-md rounded-[30px] hover:bg-gray-400"
          >
            Login
          </Button>
        </div>
        <h3 className="text-xs md:text-lg">
          Don&apos;t have an account?&ensp;
          <a
            href="/register"
            className="text-red-600 font-bold hover:underline"
          >
            Register
          </a>
        </h3>
      </form>
    </div>
  );
}

export default Login;
