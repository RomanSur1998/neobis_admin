import React from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import styles from "../SignInForm/SignInForm.module.css";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import LogoHeader from "../LogoHeader/LogoHeader";
import { useFormik } from "formik";
import * as yup from "yup";

const SignInForm = (error = false) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    }),
  });
  return (
    <>
      <AuthLayout>
        <LogoHeader />
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <h2 className={styles.title}>Вход</h2>
          <InputField
            placeholder={"Электронная почта"}
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={error}
          />
          <InputField
            placeholder={"Пароль"}
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={error}
          />
          <Button type="submit" isdisabled={true}>
            Вход
          </Button>
        </form>
      </AuthLayout>
    </>
  );
};

export default SignInForm;
