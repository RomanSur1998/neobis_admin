import React from "react";
import styles from "./SelectAction.module.css";
import classnames from "classnames";
import { icons } from "../../assets";
import { useDispatch } from "react-redux";
import {
  setCurrentModal,
  setDeleteType,
  setModalTitle,
  setProps,
} from "../../redux/slices/DataSlice";
import { useLocation } from "react-router-dom";
import {
  getCurrentModalName,
  getDeleteTypes,
} from "../../helpers/getCurrentModalName";

const SelectAction = ({ elementData }) => {
  console.log(elementData, "elementData");
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  function hadleOpenModal() {
    dispatch(setCurrentModal(getCurrentModalName[pathname]));
    dispatch(setModalTitle("Редактирование"));
    dispatch(setProps(elementData));
  }
  function hadleOpenDeleteModal() {
    dispatch(setCurrentModal("deleteCategory"));
    dispatch(setModalTitle("Удаление"));
    dispatch(setDeleteType(getDeleteTypes[pathname]));
    dispatch(setProps(elementData));
  }

  return (
    <ul className={classnames(styles.container, styles.flex)}>
      <li className={classnames(styles.flex)}>
        <button
          className={classnames(styles.button, styles.flex)}
          onClick={hadleOpenModal}
        >
          <img src={icons.pencil_icon} alt="" /> Редактировать
        </button>
      </li>
      <hr className={classnames(styles.line)} />
      <li className={classnames(styles.flex)}>
        <button
          className={classnames(styles.button, styles.flex)}
          onClick={hadleOpenDeleteModal}
        >
          <img src={icons.delete_mono} alt="" />
          Удалить
        </button>
      </li>
    </ul>
  );
};

export default SelectAction;
