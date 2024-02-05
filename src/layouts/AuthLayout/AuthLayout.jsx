import React from "react";
import styles from "./AuthLayout.module.css";
import { images } from "../../assets";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>{children}</div>
        <div className={styles.rightContainer}>
          <img src={images.login_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
