import React from "react";
import styles from "./InputField.module.css";
import { getStyles } from "../../helpers/getStyles";

const InputField = ({ type, name, onChange, onBlur, placeholder, error }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      className={styles.input}
      placeholder={placeholder}
      style={getStyles.getErrorInput((error = false))}
    />
  );
};

export default InputField;
