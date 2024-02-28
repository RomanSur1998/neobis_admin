import React from "react";
import styles from "./ModalButton.module.css";
import classnames from "classnames";

const ModalButton = ({ buttonType, children, click, type, name }) => {
  const btnTypes = {
    outlined: styles.outlined,
    filled: styles.filled,
    darker: styles.darker,
  };
  return (
    <button
      name={name ? name : null}
      type={type ? type : "button"}
      className={classnames(styles.button, btnTypes[buttonType])}
      onClick={click ? click : null}
    >
      {children}
    </button>
  );
};

export default ModalButton;
