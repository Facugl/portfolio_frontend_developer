import { withFormik } from "formik";
import { FormValidate } from "../../utils/validateForm";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import {
  ErrorMsg,
  FormContact,
  Input,
  InputsWrapper,
  InputWrapper,
  Label,
  TextArea,
  ButtonSubmit,
} from "./styles";

const InnerForm = (props) => {
  const {
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    values,
    handleSubmit,
  } = props;

  return (
    <FormContact>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <InputsWrapper>
          <InputWrapper>
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "input-error" : ""}
            />
            {touched.name && errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "input-error" : ""}
            />
            {touched.email && errors.email && (
              <ErrorMsg>{errors.email}</ErrorMsg>
            )}
          </InputWrapper>
        </InputsWrapper>
        <InputWrapper style={{ marginTop: ".5rem" }}>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            id="message"
            component="textarea"
            rows="5"
            name="message"
            placeholder="Enter your message..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            className={touched.message && errors.message ? "input-error" : ""}
          />
          {touched.message && errors.message && (
            <ErrorMsg>{errors.message}</ErrorMsg>
          )}
        </InputWrapper>
        <ButtonSubmit
          type="submit"
          disabled={
            isSubmitting ||
            !!(errors.name && touched.name) ||
            !!(errors.email && touched.email) ||
            !!(errors.message && touched.message)
          }
        >
          Submit
        </ButtonSubmit>
      </motion.div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </FormContact>
  );
};

export const MyForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      name: props.initialName || "",
      email: props.initialEmail || "",
      message: props.initialMessage || "",
    };
  },

  validationSchema: FormValidate,

  handleSubmit: (_values, { setSubmitting, resetForm }) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        FormContact.toString(),
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("👌 The message was sent successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          resetForm();
          setSubmitting(false);
        },
        () => {
          toast.error("👎🏻 Upps... The message has failed!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  },
})(InnerForm);
