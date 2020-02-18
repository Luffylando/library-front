import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Min 2 letters!")
    .max(50, "Max 50 letters!")
    .required("Required Field"),
  lastName: Yup.string()
    .min(2, "Min 2 letters!")
    .max(50, "Max 50 letters!")
    .required("Required Field"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required Field"),
  gender: Yup.string().required("Required Field"),
  dob: Yup.string().required("Required Field"),
  password: Yup.string()
    .min(5, "Min 5 letters!")
    .max(50, "Max 50 letters!")
    .required("Required Field"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required Field!")
});

export default RegisterSchema;
