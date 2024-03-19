import React from "react";
import styles from "./SideBar.module.css";
import { icons } from "../../assets";
import { navigateName } from "../../routes/routesHelpers";
import { NavLink, useLocation } from "react-router-dom";
import { outOffApp } from "../../helpers/outOffApp";
import { useDispatch } from "react-redux";
import { setCurrentModal, setModalTitle } from "../../redux/slices/DataSlice";

const SideBar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

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
          // to={"/"}
          className={styles.button}
          onClick={() => {
            // outOffApp();
            dispatch(setCurrentModal("outModal"));
            dispatch(setModalTitle("Выход"));
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
