import React from "react";
import styles from "./ModalButton.module.css";
import classnames from "classnames";

const ModalButton = ({ buttonType, children, click }) => {
  const btnTypes = {
    outlined: styles.outlined,
    filled: styles.filled,
    darker: styles.darker,
  };
  return (
    <button
      className={classnames(styles.button, btnTypes[buttonType])}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default ModalButton;
