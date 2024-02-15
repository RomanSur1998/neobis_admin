import React from "react";
import styles from "./Table.module.css";
import { icons } from "../../assets";
import classnames from "classnames";
import DropDown from "../DropDown/DropDown";

const Table = ({ headerList, bodyList }) => {
  return (
    <>
      <table>
        <thead>
          <tr className={styles.headerBlock}>
            {headerList.map((item) => (
              <th key={item.id} className={item.image ? styles.block : null}>
                {item.header}
                {item.image ? (
                  <button className={classnames(styles.button)}>
                    <img src={icons.arrow_dowm} alt="" />
                    <DropDown />
                  </button>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyList.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((cell, i) => {
                  return <td key={i}>{cell.tableCell}</td>;
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
