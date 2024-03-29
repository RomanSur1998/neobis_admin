import React from "react";
import styles from "./TextField.module.css";
import classnames from "classnames";

const TextField = ({ placeholder, name, value, change, blur }) => {
  return (
    <>
      <input
        className={classnames(styles.input)}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={change}
        onBlur={blur}
      />
    </>
  );
};

export default TextField;
