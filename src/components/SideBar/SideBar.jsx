import React from "react";
import styles from "./SideBar.module.css";
import { icons } from "../../assets";
import NavButton from "../NavButton/NavButton";
import { navigateName } from "../../helpers/routes/routesHelpers";

const SideBar = () => {
  return (
    <nav className={styles.sideBar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={icons.logo_color} alt="" />
        </div>
        {navigateName.map((elem) => {
          return (
            <NavButton
              text={elem.name}
              imagePath={elem.image}
              path={elem.route}
              key={elem.name}
            />
          );
        })}
      </div>
      <div className={styles.outButton}>
        <NavButton text="Выйти" imagePath={icons.out_icon} />
      </div>
    </nav>
  );
};

export default SideBar;
