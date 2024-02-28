import React from "react";
import styles from "./NewPositionModal.module.css";
import classnames from "classnames";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import { icons } from "../../../assets";
import TextField from "../../../ui/TextField/TextField";
import SelectDropDown from "../../SelectDropDown/SelectDropDown";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../../redux/slices/DataSlice";

const NewPositionModal = () => {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(setCurrentModal(null));
  }

  const formik = useFormik({
    initialValues: {
      name: "",
    },
  });
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новая позиция"} />
        <form
          action=""
          className={classnames(styles.form)}
          onSubmit={formik.handleSubmit}
        >
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
          <label
            className={classnames(styles.flex, styles.label, styles.direction)}
          >
            Наименование
            <TextField name={"add_name"} change={formik.handleChange} />
          </label>
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
              <SelectDropDown name={" Выберите категорию "} />
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
                Кол-во (в гр, мл, л, кг)
                <div className={classnames(styles.flex, styles.ex)}>
                  <input
                    type="text"
                    className={classnames(
                      styles.background,
                      styles.width,
                      styles.input,
                      styles.with_17
                    )}
                  />

                  <SelectDropDown name={"мл"} inputType={"small"} />
                </div>
              </label>
            </div>
            <ModalButton buttonType={"darker"}> Добавить еще +</ModalButton>
          </div>
          <div className={classnames(styles.button_block, styles.flex)}>
            <ModalButton buttonType={"outlined"} click={handleClose}>
              Отменa
            </ModalButton>
            <ModalButton buttonType={"filled"}> Добавить</ModalButton>
          </div>
        </form>
      </div>
    </BackgroundModal>
  );
};

export default NewPositionModal;
