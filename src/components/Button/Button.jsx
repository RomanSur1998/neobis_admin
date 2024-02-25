import React from "react";
import styles from "./Button.module.css";

import classnames from "classnames";
const Button = ({ children, type, isDisabled, buttonType, ...props }) => {
  return (
    <button
      className={classnames(styles.button, {
        [styles.active]: isDisabled,
      })}
      type={type ?? null}
    >
      {children}
    </button>
  );
};

export default Button;
