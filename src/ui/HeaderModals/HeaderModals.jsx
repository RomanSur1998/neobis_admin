import classnames from "classnames";
import React from "react";
import styles from "./HeaderModals.module.css";
import { icons } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentModal,
  setIsShowPopUp,
  setProps,
} from "../../redux/slices/DataSlice";

const HeaderModals = ({ name, center }) => {
  const { modalTitle } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(setCurrentModal(null));
    dispatch(setProps(null));
  }

  return (
    <>
      <div className={classnames(styles.title, styles.flex)}>
        {center ? <div></div> : null}
        <h2>{modalTitle} </h2>
        <button className={classnames(styles.cancel)} onClick={handleClose}>
          <img src={icons.close_icon} alt="" />
        </button>
      </div>
    </>
  );
};

export default HeaderModals;
