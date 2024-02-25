import React from "react";
import classnames from "classnames";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import styles from "./DeleteModal.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../../redux/slices/DataSlice";
import { deleteCategory } from "../../../redux/actions/DataActions";

const DeleteModal = (props) => {
  console.log(props, "props");
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(setCurrentModal(null));
  }

  function handleDeleteCategory() {
    dispatch(deleteCategory(props));
  }

  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Удаление"} center={true} />
        <h3 className={classnames(styles.title)}>
          Вы действительно хотите удалить {props} ?
        </h3>
        <div className={classnames(styles.button_block, styles.flex)}>
          <ModalButton buttonType={"outlined"} click={handleClose}>
            Отменa
          </ModalButton>
          <ModalButton buttonType={"filled"} click={handleDeleteCategory}>
            {" "}
            Удалить
          </ModalButton>
        </div>
      </div>
    </BackgroundModal>
  );
};

export default DeleteModal;
