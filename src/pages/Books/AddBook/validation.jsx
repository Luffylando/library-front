import * as Yup from "yup";

const AddBookSchema = Yup.object().shape({
  author: Yup.string()
    .min(2, "Min 2 letters!")
    .max(50, "Max 50 letters!")
    .required("Required Field"),
  title: Yup.string()
    .min(2, "Min 2 letters!")
    .max(50, "Max 50 letters!")
    .required("Required Field"),
  quote: Yup.string()
    .min(2, "Min 2 letters!")
    .max(500, "Max 500 letters!")
    .required("Required Field")
  // genre: Yup.string()
  //   .min(2, "Min 2 letters!")
  //   .max(50, "Max 50 letters!")
  //   .required("Required Field")
});

export default AddBookSchema;
