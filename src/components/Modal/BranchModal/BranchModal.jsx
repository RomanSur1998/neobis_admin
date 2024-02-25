import React from "react";
import styles from "./BranchModal.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import classnames from "classnames";
import ModalButton from "../../../ui/ModalButton/ModalButton";

import TextField from "../../../ui/TextField/TextField";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import { icons } from "../../../assets";
import GraphRow from "../../../ui/GraphRow/GraphRow";

const BranchModal = () => {
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новая филиал"} />
        <form
          action=""
          className={classnames(styles.flex, styles.direction, styles.gap_16)}
        >
          <div>
            <label htmlFor="download" className={classnames(styles.label_bold)}>
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
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Наименования
              <TextField />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Адрес
              <TextField />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Номер телефона
              <TextField />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Ссылка на 2ГИС
              <TextField />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Количество столиков
              <TextField />
            </label>
          </div>
          <div className={classnames(styles.time_container, styles.flex)}>
            <h3>График работы </h3>
            <hr />
            <GraphRow day={"Понедельник"} />
            <GraphRow day={"Вторник"} />
            <GraphRow day={"Среда"} />
            <GraphRow day={"Четверг"} />
            <GraphRow day={"Пятница"} />
            <GraphRow day={"Суббота"} />
            <GraphRow day={"Воскресенье"} />
          </div>
          <div
            className={classnames(
              styles.button_block,
              styles.flex,
              styles.position
            )}
          >
            <ModalButton buttonType={"outlined"}>Отменa</ModalButton>
            <ModalButton buttonType={"filled"}> Добавить</ModalButton>
          </div>
        </form>
      </div>
    </BackgroundModal>
  );
};

export default BranchModal;
