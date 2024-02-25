import React, { useState } from "react";
import styles from "./StockFilter.module.css";
import classnames from "classnames";

const StockFilter = () => {
  const [isActice, setIsActive] = useState(true);

  return (
    <>
      <div className={styles.container}>
        <button
          className={classnames(styles.button, {
            [styles.active_btn]: true,
          })}
        >
          Готовая продукция
        </button>
        <button
          className={classnames(styles.button, {
            [styles.active_btn]: false,
          })}
        >
          Сырье{" "}
        </button>
        <button
          className={classnames(styles.button, styles.end, {
            [styles.end_active]: true,
          })}
        >
          Заканчивающиеся продукты{" "}
        </button>
      </div>
      <hr />
    </>
  );
};

export default StockFilter;
