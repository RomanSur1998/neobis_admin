import classnames from "classnames";
import React, { useState } from "react";
import styles from "./NewCategoryModal.module.css";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import TextField from "../../../ui/TextField/TextField";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import { setCurrentModal } from "../../../redux/slices/DataSlice";
import { validationShemas } from "../../../helpers/validationShemas";
import { setNewCategory } from "../../../redux/actions/DataActions";

const NewCategoryModal = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      categoryName: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(setNewCategory(values.categoryName));
    },
    validationSchema: validationShemas.addCategory,
  });

  function handleClose() {
    dispatch(setCurrentModal(null));
  }
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новая категория"} />
        <form
          action=""
          className={classnames(styles.form, styles.flex)}
          onSubmit={formik.handleSubmit}
        >
          <label className={classnames(styles.label, styles.flex)}>
            Наименование
            <TextField
              labelName={"Наименование"}
              name={"categoryName"}
              placeholder={"Введите название категории"}
              change={formik.handleChange}
              blur={formik.handleBlur}
              value={formik.values.categoryName}
            />
          </label>

          <div className={classnames(styles.button_block, styles.flex)}>
            <ModalButton buttonType={"outlined"} click={handleClose}>
              Отменa
            </ModalButton>
            <ModalButton buttonType={"filled"} type={"submit"}>
              Добавить
            </ModalButton>
          </div>
        </form>
      </div>
    </BackgroundModal>
  );
};

export default NewCategoryModal;
