import React from "react";
import styles from "./NavButton.module.css";
import { icons } from "../../assets";

const NavButton = ({ text, imagePath, isActive }) => {
  return (
    <>
      <button
        className={styles.button}
        style={isActive ? { backgroundColor: "#F47356" } : null}
      >
        <img src={imagePath} alt="" />
        {text}
      </button>
    </>
  );
};

export default NavButton;
