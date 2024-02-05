import React from "react";
import styles from "./MainLayout.module.css";
import { icons } from "../../assets";
import Button from "../../components/Button/Button";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.sideBar}>
        <div className={styles.navContainer}>
          <img src={icons.logo_color} alt="" />
          <button>sdfsdf</button>
          <button>sdfsdf</button>
          <button>sdfsdf</button>
          <button>sdfsdf</button>
        </div>
        <button>
          {" "}
          <img src={icons.out_icon} alt="" />
          Выход
        </button>
      </nav>
      <main>
        <header>
          <span>Заказы</span>
          <button>
            <img src={icons.notification_logo} alt="" />
          </button>
        </header>
        <section>
          <table></table>
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
