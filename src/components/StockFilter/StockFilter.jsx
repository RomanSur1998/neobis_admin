import React, { useState } from "react";
import styles from "./StockFilter.module.css";
import classnames from "classnames";
import FilterButton from "../../ui/FilterButton/FilterButton";
import { useSelector } from "react-redux";

const StockFilter = () => {
  const { filter } = useSelector((state) => state.data);

  return (
    <>
      <div className={styles.container}>
        {filter.map((elem) => {
          return (
            <FilterButton
              key={elem.name}
              name={elem.name}
              end={elem?.end}
              active={elem.active}
            />
          );
        })}
      </div>
      <hr />
    </>
  );
};

export default StockFilter;
