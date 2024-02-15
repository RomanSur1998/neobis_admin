import React from "react";
import styles from "./DropDown.module.css";
import { icons } from "../../assets";
import classnames from "classnames";

const DropDown = ({ list }) => {
  return (
    <div
      className={classnames(styles.drop_container, styles.flex, styles.column)}
    >
      <button className={classnames(styles.drop_button, styles.flex)}>
        Категория <img src={icons.arrow_dowm} alt="" />
      </button>
      <div
        className={classnames(styles.flex, styles.drop_content, styles.column)}
      >
        {/* {list.map((item) => {
          <button className={classnames(styles.drop_button, styles.flex)}>
            Кофе
            <img src={icons.card_icon} alt="" />
          </button>;
        })} */}
        <button className={classnames(styles.drop_button, styles.flex)}>
          Кофе
        </button>
        <button className={classnames(styles.drop_button, styles.flex)}>
          Десерты
        </button>
        <button className={classnames(styles.drop_button, styles.flex)}>
          Коктели
        </button>
        <button className={classnames(styles.drop_button, styles.flex)}>
          Выпечка
        </button>
        <button
          className={classnames(styles.drop_button, styles.flex, styles.active)}
        >
          Чай
          <img src={icons.card_icon} alt="" />
        </button>
      </div>
      <button
        className={classnames(styles.drop_button, styles.flex, styles.add)}
      >
        Добавить
        <img src={icons.plus_color} alt="" />
      </button>
    </div>
  );
};

export default DropDown;