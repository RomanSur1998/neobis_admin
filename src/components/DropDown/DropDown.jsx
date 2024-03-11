import React, { useEffect, useRef, useState } from "react";
import styles from "./DropDown.module.css";
import { icons } from "../../assets";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentModal,
  setIsShowPopUp,
  setModalTitle,
} from "../../redux/slices/DataSlice";
import DropDownButton from "../../ui/DropDownButton/DropDownButton";

import { getCategoryList } from "../../redux/actions/DataActions";

const DropDown = () => {
  const { category } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  function handleOpenModal() {
    dispatch(setCurrentModal("newCategory"));
    dispatch(setModalTitle("Новая категория"));
  }
  return (
    <div
      className={classnames(styles.drop_container, styles.flex, styles.column)}
    >
      <button
        className={classnames(styles.drop_button, styles.flex)}
        onClick={() => dispatch(setIsShowPopUp(false))}
      >
        Категория <img src={icons.arrow_dowm} alt="" />
      </button>
      <div
        className={classnames(styles.flex, styles.drop_content, styles.column)}
      >
        {category?.map((item, index) => {
          return <DropDownButton name={item} key={index} />;
        })}
      </div>
      <button
        onClick={handleOpenModal}
        className={classnames(styles.drop_button, styles.flex, styles.add)}
      >
        Добавить
        <img src={icons.plus_color} alt="" />
      </button>
    </div>
  );
};

export default DropDown;
