import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
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
  message: Yup.string()
    .min(2, "Min 2 letters!")
    .max(500, "Max 500 letters!")
    .required("Required Field")
});

export default ContactSchema;
