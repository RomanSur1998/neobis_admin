import classnames from "classnames";
import React from "react";
import styles from "./HeaderModals.module.css";
import { icons } from "../../assets";
import { useDispatch } from "react-redux";
import { setCurrentModal, setIsShowPopUp } from "../../redux/slices/DataSlice";

const HeaderModals = ({ name, center }) => {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(setCurrentModal(null));
    // dispatch(setIsShowPopUp(false));
  }

  return (
    <>
      <div className={classnames(styles.title, styles.flex)}>
        {center ? <div></div> : null}
        <h2>{name} </h2>
        <button className={classnames(styles.cancel)} onClick={handleClose}>
          <img src={icons.close_icon} alt="" />
        </button>
      </div>
    </>
  );
};

export default HeaderModals;
