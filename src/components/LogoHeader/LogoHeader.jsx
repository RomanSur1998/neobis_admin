import React from "react";
import { icons } from "../../assets";
import styles from "./LogoHeader.module.css";
const LogoHeader = ({ logoMono }) => {
  return (
    <>
      {logoMono ? (
        <div className={styles.headerLogoMono}>
          <img src={icons.logo_mono} alt="" />
        </div>
      ) : (
        <div className={styles.headerLogo}>
          <img src={icons.logo_color} alt="" />
        </div>
      )}
    </>
  );
};

export default LogoHeader;
