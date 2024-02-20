import React from "react";
import styles from "./BackgroundModal.module.css";
import classnames from "classnames";

const BackgroundModal = ({ children }) => {
  return (
    <div className={classnames(styles.modal_container, styles.flex)}>
      {children}
    </div>
  );
};

export default BackgroundModal;
