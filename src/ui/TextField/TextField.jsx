import React from "react";
import styles from "./TextField.module.css";
import classnames from "classnames";

const TextField = ({ labelName, placeholder, name, value, change, blur }) => {
  return (
    <>
      <label htmlFor="" className={classnames(styles.label)}>
        {labelName}
        <input
          className={classnames(styles.input)}
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={change}
          onBlur={blur}
        />
      </label>
    </>
  );
};

export default TextField;
