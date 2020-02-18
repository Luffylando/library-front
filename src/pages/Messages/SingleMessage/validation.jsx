import * as Yup from "yup";

const MessageSchema = Yup.object().shape({
  answerSubject: Yup.string()
    .min(2, "Min 2 letters!")
    .max(50, "Max 100 letters!")
    .required("Required Field"),
  answerText: Yup.string()
    .min(2, "Min 2 letters!")
    .max(50, "Max 500 letters!")
    .required("Required Field")
});

export default MessageSchema;
