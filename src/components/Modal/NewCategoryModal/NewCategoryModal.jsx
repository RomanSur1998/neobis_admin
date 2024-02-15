import classnames from "classnames";
import React from "react";
import styles from "./NewCategoryModal.module.css";
import { icons } from "../../../assets";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import TextField from "../../../ui/TextField/TextField";

const NewCategoryModal = () => {
  return (
    <div className={classnames(styles.modal_container, styles.flex)}>
      <div>
        <form action="" className={classnames(styles.modal, styles.flex)}>
          <HeaderModals name={"Новая категория"} />
          <TextField
            labelName={"Наименование"}
            name={"add_category"}
            placeholder={"Введите название категории"}
          />

          <div className={classnames(styles.button_block, styles.flex)}>
            <button className={classnames(styles.button, styles.border)}>
              Отмена
            </button>
            <button className={classnames(styles.button, styles.fill)}>
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCategoryModal;
