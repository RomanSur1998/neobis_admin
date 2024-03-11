import React, { useEffect, useRef, useState } from "react";
import styles from "./BodyRow.module.css";
import { icons } from "../../assets";
import SelectAction from "../SelectAction/SelectAction";

const BodyRow = ({ row }) => {
  const [isShowSelectAction, setIsShowSelectAction] = useState(false);
  const rootRef = useRef();

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
        return <td key={i}>{cell[1]}</td>;
      })}
      <td>
        {isShowSelectAction && <SelectAction elementData={row} />}
        <button
          className={styles.dotsBlock}
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
