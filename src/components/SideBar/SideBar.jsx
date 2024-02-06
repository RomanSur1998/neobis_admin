import React from "react";
import styles from "./SideBar.module.css";
import { icons } from "../../assets";
import NavButton from "../NavButton/NavButton";

const SideBar = () => {
  return (
    <nav className={styles.sideBar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={icons.logo_color} alt="" />
        </div>
        <NavButton text="Меню" imagePath={icons.menu_icon} isActive={true} />
        <NavButton text="Склад" imagePath={icons.branches_icon} />
        <NavButton text="Филиалы" imagePath={icons.stock_icon} />
        <NavButton text="Сотрудники" imagePath={icons.employer_icon} />
      </div>
      <div className={styles.outButton}>
        <NavButton text="Выйти" imagePath={icons.out_icon} />
      </div>
    </nav>
  );
};

export default SideBar;
