"use client";
import { useState } from "react";
import { useFormik } from "formik";
import styles from "./style.module.scss";
import { contactFormInitialValues } from "@utils/formik/initialvalue";
import { contactFormValidationSchema } from "@utils/formik/validationSchema";
import { Input, Loader } from "@components/ui";
import { showToast } from "@utils/helpers";
import { ErrorText } from "@styles/styledComponent";
import { ToastContainer } from "react-toastify";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: contactFormInitialValues,
    validationSchema: contactFormValidationSchema,
  });

  const handleSubmit = (event) => {
    console.log("chala");
    setIsLoading(true);
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.ok) {
          showToast("Form Submitted Successfully", "success");
          formik.resetForm();
        } else {
          showToast("Form Submission Error", "error");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  return (
    <div className={styles.formBlock}>
      <form onSubmit={handleSubmit} name="contactForm" data-netlify="true">
        <input type="hidden" name="form-name" value="contactForm" />
        <div>
          <div>
            <Input
              label="Full Name"
              type="text"
              name="name"
              fieldProps={formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <ErrorText className={styles.errorText}>
                {formik.errors.name}
              </ErrorText>
            )}
          </div>
        </div>
        <div>
          <div>
            <Input
              label="Company Name"
              type="text"
              name="company_name"
              fieldProps={formik.getFieldProps("company_name")}
            />
            {formik.touched.company_name && formik.errors.company_name && (
              <ErrorText className={styles.errorText}>
                {formik.errors.company_name}
              </ErrorText>
            )}
          </div>
        </div>
        <div>
          <div>
            <Input
              label="Company Phone Number"
              type="text"
              name="company_phone_number"
              fieldProps={formik.getFieldProps("company_phone_number")}
            />
            {formik.touched.company_phone_number &&
              formik.errors.company_phone_number && (
                <ErrorText className={styles.errorText}>
                  {formik.errors.company_phone_number}
                </ErrorText>
              )}
          </div>
          <div>
            <Input
              label="Email"
              type="email"
              name="email"
              fieldProps={formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorText className={styles.errorText}>
                {formik.errors.email}
              </ErrorText>
            )}
          </div>
        </div>
        <div>
          <div>
            <Input
              label="Company Website (If Applicable)"
              type="text"
              name="company_website"
              fieldProps={formik.getFieldProps("company_website")}
            />
            {formik.touched.company_website &&
              formik.errors.company_website && (
                <ErrorText className={styles.errorText}>
                  {formik.errors.company_website}
                </ErrorText>
              )}
          </div>
        </div>
        <div>
          <div>
            <Input
              label="Province/State"
              type="text"
              name="province_state"
              fieldProps={formik.getFieldProps("province_state")}
            />
            {formik.touched.province_state && formik.errors.province_state && (
              <ErrorText className={styles.errorText}>
                {formik.errors.province_state}
              </ErrorText>
            )}
          </div>
          <div>
            <Input
              label="City"
              type="text"
              name="city"
              fieldProps={formik.getFieldProps("city")}
            />
            {formik.touched.city && formik.errors.city && (
              <ErrorText className={styles.errorText}>
                {formik.errors.city}
              </ErrorText>
            )}
          </div>
        </div>
        <div>
          <div>
            <Input
              label="Address"
              type="text"
              name="address"
              fieldProps={formik.getFieldProps("address")}
            />
            {formik.touched.address && formik.errors.address && (
              <ErrorText className={styles.errorText}>
                {formik.errors.address}
              </ErrorText>
            )}
          </div>
        </div>
        <div>
          <div>
            <Input
              label="Referral Code"
              type="text"
              name="referral_code"
              fieldProps={formik.getFieldProps("referral_code")}
            />
            {formik.touched.referral_code && formik.errors.referral_code && (
              <ErrorText className={styles.errorText}>
                {formik.errors.referral_code}
              </ErrorText>
            )}
          </div>
        </div>
        <div>
          <button
            className={
              !(formik.isValid && formik.dirty) || isLoading
                ? "disabledBtn"
                : "submitBtn primaryBtn"
            }
          >
            {isLoading ? <Loader /> : "SUBMIT"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
