import React from "react";
import styles from "./NewEmployer.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import classnames from "classnames";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import TextField from "../../../ui/TextField/TextField";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import { icons } from "../../../assets";
import GraphRow from "../../../ui/GraphRow/GraphRow";
import SelectDropDown from "../../SelectDropDown/SelectDropDown";
const NewEmployer = () => {
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новый работник "} />
        <form
          action=""
          className={classnames(styles.flex, styles.direction, styles.gap_16)}
        >
          <div>
            <h3>Личные данные</h3>
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
              Логин
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
              Пароль
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
              Имя
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
              Должность
              <SelectDropDown inputType={"full"} name={"Выберите должность"} />
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
              Дата рождения
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
              Выберите филлиал
              <SelectDropDown name={"Выберите категорию"} inputType={"full"} />
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

export default NewEmployer;
