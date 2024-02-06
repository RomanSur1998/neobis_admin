import React from "react";
import styles from "./NavButton.module.css";
import { icons } from "../../assets";

const NavButton = ({ text, imagePath, isActive }) => {
  return (
    <>
      <button className={isActive ? styles.buttonActive : styles.button}>
        <img src={imagePath} alt="" />
        {text}
      </button>
    </>
  );
};

export default NavButton;
