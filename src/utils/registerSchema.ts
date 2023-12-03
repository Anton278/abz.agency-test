import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string()
    .min(2, "Min 2 characters")
    .max(60, "Max 60 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^(\+380)|(\+38 0)/g, "Phone should start with +380")
    .required("Required"),
  position_id: Yup.string().required("Required"),
  photo: Yup.string().required("Required"),
});
