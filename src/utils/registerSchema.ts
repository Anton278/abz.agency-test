import * as Yup from "yup";

import { emailPattern, phonePattern } from "./const";

export const registerSchema = Yup.object({
  name: Yup.string()
    .min(2, "Min 2 characters")
    .max(60, "Max 60 characters")
    .required("Required"),
  email: Yup.string()
    .matches(emailPattern, "Invalid email")
    .required("Required"),
  phone: Yup.string()
    .matches(phonePattern, "Invalid phone")
    .required("Required"),
  position_id: Yup.string().required("Required"),
  photo: Yup.string().required("Required"),
});
