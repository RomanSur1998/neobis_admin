import React from "react";
import styles from "./Table.module.css";
import { icons } from "../../assets";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const Table = () => {
  return (
    <>
      <MainLayout>
        <table>
          <thead>
            <tr className={styles.headerBlock}>
              <th>№</th>
              <th>Наименование</th>
              <th className={styles.block}>
                Категория <img src={icons.arrow_dowm} alt="" />{" "}
              </th>
              <th>Состав блюда и граммовка</th>
              <th>Стоимость</th>
              <th>Филиал</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Капучино</td>
              <td>Кофе</td>
              <td>Молоко (70мл), Кофе (15 зерен),</td>
              <td>140 сом</td>
              <td> NeoCafe Ala-Too Square</td>
              <td>
                <button className={styles.dotsBlock}>
                  <img src={icons.dots_icon} alt="" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Капучино</td>
              <td>Кофе</td>
              <td>Молоко (70мл), Кофе (15 зерен),</td>
              <td>140 сом</td>
              <td> NeoCafe Ala-Too Square</td>
              <td>
                <button className={styles.dotsBlock}>
                  <img src={icons.dots_icon} alt="" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Капучино</td>
              <td>Кофе</td>
              <td>Молоко (70мл), Кофе (15 зерен),</td>
              <td>140 сом</td>
              <td> NeoCafe Ala-Too Square</td>
              <td>
                <button className={styles.dotsBlock}>
                  <img src={icons.dots_icon} alt="" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Капучино</td>
              <td>Кофе</td>
              <td>Молоко (70мл), Кофе (15 зерен),</td>
              <td>140 сом</td>
              <td> NeoCafe Ala-Too Square</td>
              <td>
                <button className={styles.dotsBlock}>
                  <img src={icons.dots_icon} alt="" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Капучино</td>
              <td>Кофе</td>
              <td>Молоко (70мл), Кофе (15 зерен),</td>
              <td>140 сом</td>
              <td> NeoCafe Ala-Too Square</td>
              <td>
                <button className={styles.dotsBlock}>
                  <img src={icons.dots_icon} alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </MainLayout>
    </>
  );
};

export default Table;
