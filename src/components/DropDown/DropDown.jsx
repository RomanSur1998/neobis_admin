import React, { useEffect, useRef, useState } from "react";
import styles from "./DropDown.module.css";
import { icons } from "../../assets";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal, setIsShowPopUp } from "../../redux/slices/DataSlice";
import DropDownButton from "../../ui/BodyRow/DropDownButton/DropDownButton";

const DropDown = () => {
  const { isShowPopUp, category } = useSelector((state) => state.data);
  const dispatch = useDispatch();

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
        {category.map((item, index) => {
          return <DropDownButton name={item.categoryName} key={index} />;
        })}
      </div>
      <button
        onClick={() => dispatch(setCurrentModal("newCategory"))}
        className={classnames(styles.drop_button, styles.flex, styles.add)}
      >
        Добавить
        <img src={icons.plus_color} alt="" />
      </button>
    </div>
  );
};

export default DropDown;
