import React, { useEffect, useRef, useState } from "react";
import styles from "./BodyRow.module.css";
import { icons } from "../../assets";
import SelectAction from "../SelectAction/SelectAction";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setCurrentModal,
  setModalTitle,
  setProps,
} from "../../redux/slices/DataSlice";
import classnames from "classnames";

const BodyRow = ({ row }) => {
  const [isShowSelectAction, setIsShowSelectAction] = useState(false);
  const rootRef = useRef();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(pathname, "ROW");

  const getBlock = {
    "/branches": "scheduleModal",
    "/employers": "scheduleModal",
  };

  function getClick(data) {
    dispatch(setCurrentModal(getBlock[pathname]));
    dispatch(setModalTitle("График работы"));
    dispatch(setProps(data));
  }

  useEffect(() => {
    function hadleOenSelecrtAction(event) {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setIsShowSelectAction((prev) => !prev);
      }
    }

    if (isShowSelectAction) {
      document.addEventListener("click", hadleOenSelecrtAction);
    } else {
      document.removeEventListener("click", hadleOenSelecrtAction);
    }

    return () => {
      document.removeEventListener("click", hadleOenSelecrtAction);
    };
  }, [isShowSelectAction]);
  return (
    <tr>
      {row.dataList?.map((cell, i) => {
        return (
          <td
            className={classnames({
              [styles.active]: getBlock[pathname],
            })}
            key={i}
            onClick={() => {
              getClick(row);
            }}
          >
            {cell[1]}
          </td>
        );
      })}
      <td>
        {isShowSelectAction && <SelectAction elementData={row} />}
        <button
          className={classnames(styles.dotsBlock, {
            [styles.active]: getBlock[pathname],
          })}
          onClick={() => setIsShowSelectAction((prev) => !prev)}
          ref={rootRef}
        >
          <img src={icons.dots_icon} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default BodyRow;
