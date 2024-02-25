import React, { useEffect, useRef } from "react";
import styles from "./Table.module.css";
import { icons } from "../../assets";
import classnames from "classnames";
import DropDown from "../DropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowPopUp } from "../../redux/slices/DataSlice";
import BodyRow from "../../ui/BodyRow/BodyRow";
import MyPagination from "../Pagination/MyPagination";

const Table = ({ headerList, bodyList }) => {
  const { isShowPopUp } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const rootRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        console.log(event);
        dispatch(setIsShowPopUp(false));
      }
    };

    if (isShowPopUp) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isShowPopUp]);

  return (
    <>
      <table>
        <thead>
          <tr className={styles.headerBlock}>
            {headerList.map((item) => (
              <th key={item.id} className={item.image ? styles.block : null}>
                {item.header}
                {item.image ? (
                  <button
                    ref={rootRef}
                    className={classnames(styles.button)}
                    onClick={() => item.onClick(dispatch, true)}
                  >
                    <img src={icons.arrow_dowm} alt="" />
                  </button>
                ) : null}
                {isShowPopUp && item.image ? (
                  <DropDown showFunctions={item.onClick} />
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyList?.map((row, index) => {
            return <BodyRow row={row} key={index} />;
          })}
        </tbody>
      </table>
      <div className={classnames(styles.pagination_block)}>
        <MyPagination />
      </div>
    </>
  );
};

export default Table;
