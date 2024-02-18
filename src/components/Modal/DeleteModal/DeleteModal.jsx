import React from "react";
import classnames from "classnames";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import styles from "./DeleteModal.module.css";

const DeleteModal = () => {
  return (
    <div className={classnames(styles.modal_container, styles.flex)}>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Удаление"} center={true} />
        <h3 className={classnames(styles.title)}>
          Вы действительно хотите удалить категорию “Чай” ?
        </h3>
        <div className={classnames(styles.button_block, styles.flex)}>
          <button className={classnames(styles.button, styles.border)}>
            Отмена
          </button>
          <button className={classnames(styles.button, styles.fill)}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
