import { useFormik } from "formik";
import React from "react";
import { useOtpInput } from "react-otp-input-hook";
import styles from "./CodeForm.module.css";
import * as yup from "yup";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Button from "../Button/Button";
import LogoHeader from "../LogoHeader/LogoHeader";
import { getOTPparams } from "../../helpers/getOTPparams";
import { validationShemas } from "../../helpers/validationShemas";

const CodeForm = ({ error }) => {
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      console.log(values.code);
    },
    validationSchema: validationShemas.authForm,
  });

  const { register } = useOtpInput({
    onInputValueChange: (value) => {
      formik.setFieldValue("code", value);
    },
    numberOfInputs: 4,
    defaultInlineStyles: getOTPparams(error),
    placeholder: "_",
  });

  const defaultOptions = { required: true };

  return (
    <AuthLayout>
      <LogoHeader logoMono={true} />
      <div className={styles.CodeFormContainer}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.errorMessageContainer}>
            <h2>Код подтверждения</h2>
            {error ? (
              <span className={styles.errorMessage}>
                Код неверный, попробуйте ещё раз
              </span>
            ) : (
              <span className={styles.errorMessage}></span>
            )}
          </div>

          <div className={styles.otpContainer}>
            <input {...register(defaultOptions)} />
            <input {...register(defaultOptions)} />
            <input {...register(defaultOptions)} />
            <input {...register(defaultOptions)} />
          </div>
          <Button type="submit" isDisabled={formik.isValid || null}>
            Войти
          </Button>
        </form>
        <span
          style={{ color: error ? "#F47356" : "black" }}
          className={styles.text}
        >
          Отправить повторно
        </span>
      </div>
    </AuthLayout>
  );
};

export default CodeForm;
