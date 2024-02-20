import React, { useState } from "react";
import styles from "./DropDownButton.module.css";
import { icons } from "../../../assets";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../../redux/slices/DataSlice";

const DropDownButton = ({ name }) => {
  const [isShow, setIsShow] = useState();
  const dispatch = useDispatch();
  const handleMouseOver = () => {
    setIsShow(true);
  };

  const handleMouseOut = () => {
    setIsShow(false);
  };
  function handleDelete() {
    dispatch(setCurrentModal("deleteCategory"));
  }

  return (
    <button
      className={classnames(styles.drop_button, styles.flex, {
        [styles.active]: isShow,
      })}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleDelete}
    >
      {name}
      {isShow && <img src={icons.card_icon} alt="" />}
    </button>
  );
};

export default DropDownButton;
