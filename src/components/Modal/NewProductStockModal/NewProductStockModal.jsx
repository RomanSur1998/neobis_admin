import React from "react";
import styles from "./NewProductStockModal.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import classnames from "classnames";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import TextField from "../../../ui/TextField/TextField";
import SelectDropDown from "../../SelectDropDown/SelectDropDown";

const NewProductStockModal = () => {
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новая позиция"} />
        <form
          action=""
          className={classnames(styles.flex, styles.direction, styles.gap_16)}
        >
          <h3 className={classnames(styles.text)}>
            Наименование, категория и стоимость
          </h3>
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
              {/* <input type="text" /> */}
            </label>
          </div>

          <div className={classnames(styles.button_block, styles.flex)}>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Кол-во (в гр, мл, л, кг)
              <div className={classnames(styles.flex, styles.select)}>
                <div className={classnames(styles.field)}>
                  <TextField />
                  {/* <input type="text" /> */}
                </div>
                <SelectDropDown name={"мл"} inputType={"small"} />
              </div>
            </label>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Филиал
              <SelectDropDown name={"Выбирите категорию"} />
            </label>
          </div>
          <div className={classnames(styles.flex, styles.button_block)}>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Минимальный лимит
              <TextField />
            </label>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Дата прихода
              <TextField />
            </label>
          </div>
          <div className={classnames(styles.flex, styles.button_block)}>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Филиал
              <SelectDropDown name={"Выбирите филиал"} />
            </label>
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

export default NewProductStockModal;
