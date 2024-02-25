import React, { useEffect, useRef, useState } from "react";
import styles from "./SelectDropDown.module.css";
import classnames from "classnames";
import { icons } from "../../assets";

const SelectDropDown = ({ name, inputType }) => {
  const rootRef = useRef();
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  function handleOpen() {
    setIsOpenSelect((prev) => !prev);
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

  const inputTypes = {
    full: styles.full_width,
    small: styles.small_width,
  };

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
          {/* Здесь будет рендер  */}
          <li
            className={classnames(
              styles.option_item,
              styles.flex,
              inputTypes[inputType]
            )}
          >
            sdf
          </li>
          <hr className={classnames(styles.line)} />
          <li
            className={classnames(
              styles.option_item,
              styles.flex,
              inputTypes[inputType]
            )}
          >
            sdf
          </li>
          <hr className={classnames(styles.line)} />
          <li
            className={classnames(
              styles.option_item,
              styles.flex,
              inputTypes[inputType]
            )}
          >
            sdf
          </li>
          {/* Здесь будет рендер  */}
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
