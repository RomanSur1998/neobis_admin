import React, { useState } from "react";
import styles from "./FilterButton.module.css";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/DataSlice";

const FilterButton = ({ name, end, active }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setFilter(name))}
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
