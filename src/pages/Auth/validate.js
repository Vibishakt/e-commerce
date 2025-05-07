import { EMAIL, EN, EN_SPECIAL_NUMERIC, MOBILE } from "utils/regex";
import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email Required").matches(EMAIL, "Invalid mail"),
  password: yup
    .string()
    .required("Password Required")
    .matches(EN_SPECIAL_NUMERIC, "Invalid password"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required").matches(EN, "Invalid Name"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(MOBILE, "Invalid number"),
  email: yup.string().required("Email Required").matches(EMAIL, "Invalid mail"),
  password: yup
    .string()
    .required("Password Required")
    .matches(EN_SPECIAL_NUMERIC, "Invalid password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match!"),
});
