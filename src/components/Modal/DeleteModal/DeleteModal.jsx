import React from "react";
import classnames from "classnames";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import styles from "./DeleteModal.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "../../../redux/slices/DataSlice";
import {
  deleteCategory,
  deleteEmployer,
  deleteFilial,
  deleteMenuPostition,
  deleteStockProduct,
} from "../../../redux/actions/DataActions";

const DeleteModal = (props) => {
  console.log(props.id, "props");

  const dispatch = useDispatch();
  const { deleteType } = useSelector((state) => state.data);
  const deleteTypes = {
    deletePosition: () => {
      dispatch(deleteMenuPostition(props.id));
      // dispatch(deleteMenu(props.id));
    },
    deleteProduct: () => {
      dispatch(deleteStockProduct(props.id));
    },
    deleteBrach: () => {
      dispatch(deleteFilial(props.id));
    },
    deleteEmployer: () => {
      dispatch(deleteEmployer(props.email));
    },
  };
  console.log(props, "props");

  function handleClose() {
    dispatch(setCurrentModal(null));
  }

  function handleDeleteCategory() {
    if (deleteType) {
      deleteTypes[deleteType]();
    } else {
      dispatch(deleteCategory(props));
    }
  }

  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Удаление"} center={true} />
        <h3 className={classnames(styles.title)}>
          Вы действительно хотите удалить {props?.name} ?
        </h3>
        <div className={classnames(styles.button_block, styles.flex)}>
          <ModalButton buttonType={"outlined"} click={handleClose}>
            Отменa
          </ModalButton>
          <ModalButton buttonType={"filled"} click={handleDeleteCategory}>
            Удалить
          </ModalButton>
        </div>
      </div>
    </BackgroundModal>
  );
};

export default DeleteModal;
