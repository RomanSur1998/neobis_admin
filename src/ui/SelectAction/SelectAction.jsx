import React from "react";
import styles from "./SelectAction.module.css";
import classnames from "classnames";
import { icons } from "../../assets";

const SelectAction = () => {
  return (
    <ul className={classnames(styles.container, styles.flex)}>
      <li className={classnames(styles.flex)}>
        <button className={classnames(styles.button, styles.flex)}>
          <img src={icons.pencil_icon} alt="" /> Редактировать
        </button>
      </li>
      <hr className={classnames(styles.line)} />
      <li className={classnames(styles.flex)}>
        <button className={classnames(styles.button, styles.flex)}>
          {" "}
          <img src={icons.delete_mono} alt="" />
          Удалить
        </button>
      </li>
    </ul>
  );
};

export default SelectAction;
