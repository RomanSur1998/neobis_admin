import React, { useState } from "react";
import styles from "./GraphRow.module.css";
import classnames from "classnames";
import InputMask from "react-input-mask";

const GraphRow = ({ day, checked, changeDay }) => {
  const [openHour, setOpneHour] = useState("11:00");
  const [closeHour, setCloseHour] = useState("22:00");

  function handleSelect() {
    if (openHour && closeHour) {
      changeDay(day, openHour, closeHour);
    }
  }

  return (
    <div className={classnames(styles.flex, styles.container)}>
      <span className={classnames(styles.flex, styles.title)}>{day}</span>

      <div className={classnames(styles.time_block, styles.flex)}>
        <input
          className={classnames(styles.checkbox)}
          type="checkbox"
          checked={checked}
          onChange={handleSelect}
        />
        <div className={classnames(styles.flex, styles.input_block)}>
          <input
            className={classnames(styles.input)}
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setOpneHour(e.target.value);
            }}
            value={openHour}
          />
          -
          <input
            className={classnames(styles.input)}
            type="text"
            name=""
            onChange={(e) => {
              setCloseHour(e.target.value);
            }}
            value={closeHour}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphRow;
