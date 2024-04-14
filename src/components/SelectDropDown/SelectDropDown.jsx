import React, { useEffect, useRef, useState } from "react";
import styles from "./SelectDropDown.module.css";
import classnames from "classnames";
import { icons } from "../../assets";
import { useDispatch } from "react-redux";

import { getCategoryList } from "../../redux/actions/DataActions";

const inputTypes = {
  full: styles.full_width,
  small: styles.small_width,
};

const SelectDropDown = ({
  name,
  inputType,
  selectList,
  change,
  ingredientIndex,
}) => {
  // console.log(ingredientIndex, "полученный index");
  const dispatch = useDispatch();
  const rootRef = useRef();
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  function handleOpen() {
    setIsOpenSelect((prev) => !prev);
  }

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  function handleChangeCategory(categoryName) {
    change(categoryName, ingredientIndex);
    setIsOpenSelect(false);
  }

  // useEffect(() => {
  //   const closeOut = (event) => {
  //     const { target } = event;
  //     if (target instanceof Node && !rootRef.current?.contains(target)) {
  //       setIsOpenSelect((prev) => !prev);
  //     }
  //   };

  //   if (isOpenSelect) {
  //     document.addEventListener("click", closeOut);
  //   } else {
  //     document.removeEventListener("click", closeOut);
  //   }

  //   return () => {
  //     document.removeEventListener("click", closeOut);
  //   };
  // }, [isOpenSelect]);

  return (
    <div
      ref={rootRef}
      className={classnames(
        styles.flex,
        styles.container,
        inputTypes[inputType]
      )}
    >
      {isOpenSelect ? (
        <ul
          className={classnames(
            styles.options,
            styles.background,
            inputTypes[inputType]
          )}
        >
          <li
            className={classnames(
              styles.option_item,
              styles.flex,
              inputTypes[inputType]
            )}
            onClick={handleOpen}
          >
            {name} <img src={icons.arrow_up_black} alt="" />
          </li>
          <hr className={classnames(styles.line)} />
          {selectList?.map((select) => {
            return (
              <li
                key={select}
                value={select}
                onClick={() => handleChangeCategory(select)}
                className={classnames(
                  styles.option_item,
                  styles.flex,
                  inputTypes[inputType]
                )}
              >
                {select}
              </li>
            );
          })}
        </ul>
      ) : (
        <button
          onClick={handleOpen}
          className={classnames(
            styles.background,
            styles.width,
            styles.flex,
            styles.align,
            inputTypes[inputType]
          )}
        >
          {name}
          <img src={icons.arrow_black} alt="" />
        </button>
      )}
    </div>
  );
};

export default SelectDropDown;
