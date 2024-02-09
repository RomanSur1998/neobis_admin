import React from "react";
import styles from "./MainLayout.module.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import MyPagination from "../../components/Pagination/MyPagination";
import { useLocation, useParams } from "react-router-dom";

const MainLayout = ({ children }) => {
  console.log(window.location.pathname);

  return (
    <div className={styles.container}>
      <SideBar />
      <main>
        <Header />
        <section className={styles.postionContainer}>
          <section className={styles.tableContainer}>
            {children}
            <div className={styles.myPagination}>
              <MyPagination />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
