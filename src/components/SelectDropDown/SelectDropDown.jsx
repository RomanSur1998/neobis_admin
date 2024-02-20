import React, { useEffect, useRef, useState } from "react";
import styles from "./SelectDropDown.module.css";
import classnames from "classnames";
import { icons } from "../../assets";

const SelectDropDown = ({ optionsList, name, isSmall }) => {
  const rootRef = useRef();
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  function handleOpen() {
    setIsOpenSelect((prev) => !prev);
  }

  //   useEffect(() => {
  //     const closeOut = (event) => {
  //       const { target } = event;
  //       if (target instanceof Node && !rootRef.current?.contains(target)) {
  //         setIsOpenSelect((prev) => !prev);
  //       }
  //     };

  //     if (isOpenSelect) {
  //       document.addEventListener("click", closeOut);
  //     } else {
  //       document.removeEventListener("click", closeOut);
  //     }

  //     return () => {
  //       document.removeEventListener("click", closeOut);
  //     };
  //   }, [isOpenSelect]);

  return (
    <div
      ref={rootRef}
      className={classnames(styles.flex, styles.container, {
        [styles.container_small]: isSmall,
      })}
    >
      {isOpenSelect ? (
        <ul className={classnames(styles.options, styles.background)}>
          <li
            className={classnames(styles.option_item, styles.flex, {
              [styles.option_item_small]: isSmall,
            })}
            onClick={handleOpen}
          >
            {name} <img src={icons.arrow_dowm} alt="" />
          </li>
          <hr className={classnames(styles.line)} />
          {/* Здесь будет рендер  */}
          <li
            className={classnames(styles.option_item, {
              [styles.option_item_small]: isSmall,
            })}
          >
            sdf
          </li>
          <hr className={classnames(styles.line)} />
          <li
            className={classnames(styles.option_item, {
              [styles.option_item_small]: isSmall,
            })}
          >
            sdf
          </li>
          <hr className={classnames(styles.line)} />
          <li
            className={classnames(styles.option_item, {
              [styles.option_item_small]: isSmall,
            })}
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

            { [styles.with_small]: isSmall }
          )}
        >
          {name}
          <img src={icons.arrow_dowm} alt="" />
        </button>
      )}
    </div>
  );
};

export default SelectDropDown;
