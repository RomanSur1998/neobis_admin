import classnames from "classnames";
import React from "react";
import styles from "./HeaderModals.module.css";
import { icons } from "../../assets";

const HeaderModals = ({ name }) => {
  return (
    <>
      <div className={classnames(styles.title, styles.flex)}>
        <h2>{name} </h2>
        <button className={classnames(styles.cancel)}>
          <img src={icons.close_icon} alt="" />
        </button>
      </div>
    </>
  );
};

export default HeaderModals;
