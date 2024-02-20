import classnames from "classnames";
import React from "react";
import styles from "./NewCategoryModal.module.css";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import TextField from "../../../ui/TextField/TextField";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import ModalButton from "../../../ui/ModalButton/ModalButton";

const NewCategoryModal = () => {
  // const dispatch = useDispatch();
  // function handleSetCategory() {}
  // const formik = useFormik();
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новая категория"} />
        <form action="" className={classnames(styles.form, styles.flex)}>
          <TextField
            labelName={"Наименование"}
            name={"add_category"}
            placeholder={"Введите название категории"}
          />

          <div className={classnames(styles.button_block, styles.flex)}>
            <ModalButton buttonType={"outlined"}>Отменa</ModalButton>
            <ModalButton buttonType={"filled"}> Удалить</ModalButton>
          </div>
        </form>
      </div>
    </BackgroundModal>
  );
};

export default NewCategoryModal;
