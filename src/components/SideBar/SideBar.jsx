import React from "react";
import styles from "./SideBar.module.css";
import { icons } from "../../assets";
import { navigateName } from "../../routes/routesHelpers";
import { NavLink, useLocation } from "react-router-dom";
import classnames from "classnames";
import { outOffApp } from "../../helpers/outOffApp";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.sideBar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={icons.logo_color} alt="" />
        </div>
        {navigateName.map((elem) => {
          return (
            <NavLink
              to={elem.route}
              key={elem.name}
              className={
                pathname == elem.route ? styles.buttonActive : styles.button
              }
            >
              <img src={elem.image} alt="icon" />
              {elem.name}
            </NavLink>
          );
        })}
      </div>
      <div className={styles.outButton}>
        <NavLink
          to={"/"}
          className={styles.button}
          onClick={() => {
            outOffApp();
          }}
        >
          <img src={icons.out_icon} alt="" />
          Выход
        </NavLink>{" "}
      </div>
    </nav>
  );
};

export default SideBar;
