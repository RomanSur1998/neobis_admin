import React from "react";
import classnames from "classnames";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import styles from "./DeleteModal.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../../redux/slices/DataSlice";

const DeleteModal = () => {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(setCurrentModal(null));
  }
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Удаление"} center={true} />
        <h3 className={classnames(styles.title)}>
          Вы действительно хотите удалить категорию “Чай” ?
        </h3>
        <div className={classnames(styles.button_block, styles.flex)}>
          <ModalButton buttonType={"outlined"} click={handleClose}>
            Отменa
          </ModalButton>
          <ModalButton buttonType={"filled"}> Удалить</ModalButton>
        </div>
      </div>
    </BackgroundModal>
  );
};

export default DeleteModal;
