import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required Field"),
  password: Yup.string()
    .min(5, "Min 5 letters!")
    .max(50, "Max 50 letters!")
    .required("Required Field")
});

export default LoginSchema;
