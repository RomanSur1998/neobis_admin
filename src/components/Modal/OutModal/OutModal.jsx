import React from "react";
import styles from "./OutModal.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import classnames from "classnames";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import { outOffApp } from "../../../helpers/outOffApp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../../redux/slices/DataSlice";

const OutModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleOut() {
    outOffApp();
    navigate("/");
    dispatch(setCurrentModal(null));
  }
  function handleClose() {
    dispatch(setCurrentModal(null));
  }
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Удаление"} center={true} />
        <h3 className={classnames(styles.title)}>
          Вы действительно хотите выйти ?
        </h3>
        <div className={classnames(styles.button_block, styles.flex)}>
          <ModalButton buttonType={"outlined"} click={handleClose}>
            Отменa
          </ModalButton>
          <ModalButton buttonType={"filled"} click={handleOut}>
            Выйти
          </ModalButton>
        </div>
      </div>
    </BackgroundModal>
  );
};

export default OutModal;
