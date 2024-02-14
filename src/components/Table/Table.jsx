import React from "react";
import styles from "./Table.module.css";
import { icons } from "../../assets";

const Table = ({ headerList, bodyList }) => {
  return (
    <>
      <table>
        <thead>
          <tr className={styles.headerBlock}>
            {headerList.map((item) => (
              <th key={item.id} className={item.image ? styles.block : null}>
                {item.header}
                {item.image ? <img src={icons.arrow_dowm} alt="" /> : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyList.map((row) => {
            return (
              <tr>
                {row.map((cell) => {
                  return <td>{cell.tableCell}</td>;
                })}
                <td>
                  <button className={styles.dotsBlock}>
                    <img src={icons.dots_icon} alt="" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
