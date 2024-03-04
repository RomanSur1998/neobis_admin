import React, { useState } from "react";
import styles from "./FilterButton.module.css";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { setFilter, setFilterValue } from "../../redux/slices/DataSlice";

const FilterButton = ({ name, end, active }) => {
  const dispatch = useDispatch();
  function handleChangeFilterName() {
    dispatch(setFilter(name));
    dispatch(setFilterValue(name));
  }
  return (
    <button
      onClick={handleChangeFilterName}
      className={classnames(styles.button, {
        [styles.active_btn]: active,
        [styles.end_active]: active && end,
        [styles.end]: end,
      })}
      value={name}
    >
      {name}
    </button>
  );
};

export default FilterButton;
