import * as Yup from "yup";

export const contactFormValidationSchema = Yup.object({
  name: Yup.string().required("This is a required field"),
  company_name: Yup.string().required("This is a required field"),
  address: Yup.string().required("This is a required field"),
  email: Yup.string()
    .email("Inavlid Email")
    .required("This is a required field"),
  company_phone_number: Yup.string().required("This is a required field"),
  province_state: Yup.string().required("This is a required field"),
  city: Yup.string().required("This is a required field"),
});
