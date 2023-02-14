import * as Yup from "yup";

export const FormValidate = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required"),
  message: Yup.string().trim().required("Message is required"),
});
