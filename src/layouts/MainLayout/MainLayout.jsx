import React from "react";
import styles from "./MainLayout.module.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <main>
        <section>
          <Header />
          <table></table>
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
