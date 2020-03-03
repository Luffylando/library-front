import * as Yup from "yup";

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(5, "Min 5 letters!")
    .max(50, "Max 50 letters!")
    .required("Required Field"),
  newPassword: Yup.string()
    .min(5, "Min 5 letters!")
    .max(50, "Max 50 letters!")
    .required("Required Field"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Required Field!")
});

export default ChangePasswordSchema;
