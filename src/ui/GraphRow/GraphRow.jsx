import React from "react";
import styles from "./GraphRow.module.css";
import classnames from "classnames";

const GraphRow = ({ day }) => {
  return (
    <div className={classnames(styles.flex, styles.container)}>
      <span className={classnames(styles.flex, styles.title)}>{day}</span>

      <div className={classnames(styles.time_block, styles.flex)}>
        <input
          className={classnames(styles.checkbox)}
          type="checkbox"
          name=""
          id=""
        />
        <div className={classnames(styles.flex, styles.input_block)}>
          <input
            className={classnames(styles.input)}
            type="text"
            name=""
            id=""
            value={"11"}
          />
          -
          <input
            className={classnames(styles.input)}
            type="text"
            name=""
            value={"00"}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphRow;
