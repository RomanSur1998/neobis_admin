import React from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import styles from "../SignInForm/SignInForm.module.css";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import LogoHeader from "../LogoHeader/LogoHeader";
import { useFormik } from "formik";
import * as yup from "yup";
import { validationShemas } from "../../helpers/validationShemas";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../redux/actions/UserActions";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const { error } = useSelector((state) => state.user);
  console.log(error, "Error auth");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(authUser({ data: values, navigate }));
    },
    validationSchema: validationShemas.loginForm,
  });
  return (
    <>
      <AuthLayout>
        <LogoHeader />
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <h2 className={styles.title}>Вход</h2>
          <InputField
            placeholder={"Электронная почта"}
            type="text"
            name="identifier"
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
