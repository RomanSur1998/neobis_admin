import React from "react";
import styles from "./Header.module.css";
import { icons } from "../../assets";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../redux/slices/DataSlice";

const Header = () => {
  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(setCurrentModal("newPosition"));
  }
  return (
    <header className={styles.headerContainer}>
      <span className={styles.title}>Заказы</span>
      <div className={styles.containerRight}>
        <label htmlFor="" className={styles.input}>
          <img src={icons.search_icon} alt="" />
          <input type="text" placeholder="Поиск " />
        </label>
        <button className={styles.createButtnon} onClick={handleAdd}>
          Создать
          <img src={icons.plus_icon} alt="" />
        </button>
        <button className={styles.imageButton}>
          <img src={icons.notification_logo} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
