import React from "react";
import styles from "./NewPositionModal.module.css";
import classnames from "classnames";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import { icons } from "../../../assets";
import TextField from "../../../ui/TextField/TextField";

const NewPositionModal = () => {
  return (
    <div className={classnames(styles.modal_container, styles.flex)}>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новая позиция"} />
        <form action="">
          <label htmlFor="download">
            Добавьте фото к позиции
            <div className={classnames(styles.downloads_out, styles.flex)}>
              <div className={classnames(styles.downloads_in, styles.flex)}>
                <img src={icons.download_icon} alt="" />
                <p>
                  Перетащите изображение для изменения или <span>обзор</span>{" "}
                </p>
              </div>
            </div>
            <input
              type="file"
              name="file"
              id="download"
              className={classnames(styles.file_input)}
            />
          </label>
          <h3>Наименования , категория и стоимость </h3>
          <TextField
            labelName={"Наименование"}
            name={"edti_name"}
            // value={"Капучино"}
          />
        </form>
      </div>
    </div>
  );
};

export default NewPositionModal;
