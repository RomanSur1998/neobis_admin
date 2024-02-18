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
        <form action="" className={classnames(styles.form)}>
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
          <h3 className={classnames(styles.label_bold)}>
            Наименования , категория и стоимость{" "}
          </h3>
          <div>
            <TextField labelName={"Наименование"} name={"add_name"} />
          </div>
          <label htmlFor="" className={classnames(styles.label)}>
            Описание
            <textarea
              name="add_descr"
              id=""
              cols="30"
              rows="10"
              className={classnames(styles.textarea)}
            />
          </label>
          <div className={classnames(styles.button_block, styles.flex)}>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Категория
              <button
                className={classnames(
                  styles.background,
                  styles.width,
                  styles.flex,
                  styles.align,
                  styles.justify
                )}
              >
                Выберите категорию <img src={icons.arrow_dowm} alt="" />
              </button>
            </label>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Стоимость
              <input
                type="text"
                className={classnames(
                  styles.background,
                  styles.width,
                  styles.input
                )}
              />
            </label>
          </div>
          <div>
            <h3>Состав блюда и граммовка</h3>
            <div className={classnames(styles.button_block, styles.flex)}>
              <label
                htmlFor=""
                className={classnames(
                  styles.flex,
                  styles.label,
                  styles.direction
                )}
              >
                Наименование
                <input
                  type="text"
                  className={classnames(
                    styles.background,
                    styles.width,
                    styles.input
                  )}
                />
              </label>

              <label
                htmlFor=""
                className={classnames(
                  styles.flex,
                  styles.label,
                  styles.direction
                )}
              >
                <span>Кол-во (в гр, мл, л, кг)</span>
                <div className={classnames(styles.flex, styles.gap_8)}>
                  <input
                    type="text"
                    className={classnames(
                      styles.background,
                      styles.width,
                      styles.input,
                      styles.with_17
                    )}
                  />
                  <button
                    className={classnames(
                      styles.width,
                      styles.ml,
                      styles.flex,
                      styles.gap_8
                    )}
                  >
                    мл
                    <img src={icons.arrow_dowm} alt="" />
                  </button>
                </div>
              </label>
            </div>
            <button className={classnames(styles.add_button)}>
              Добавить еще -
            </button>
          </div>
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

export default NewPositionModal;
