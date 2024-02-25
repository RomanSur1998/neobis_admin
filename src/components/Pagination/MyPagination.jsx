import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../helpers/pagination";
import styles from "./MyPagination.module.css";
import { setPageNumber } from "../../redux/slices/DataSlice";

const MyPagination = () => {
  const { totalPageCount, pageNumber } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const pageNumbers = getPage(totalPageCount, 5);
  console.log(pageNumber);

  return (
    <div className={styles.paginationContainer}>
      <button
        style={
          pageNumber !== 1
            ? {
                backgroundColor: "#35536B",
                color: "#fff",
                transition: "0.3s",
              }
            : null
        }
        onClick={() => dispatch(setPageNumber(pageNumber - 1))}
      >
        {"<"}
      </button>
      {pageNumbers.map((pageNum) => (
        <button
          style={
            pageNumber === pageNum
              ? {
                  backgroundColor: "#EBEFF2",
                  transition: "0.3s",
                }
              : null
          }
          value={pageNum}
          onClick={(e) => dispatch(setPageNumber(parseInt(e.target.value)))}
          key={pageNum}
        >
          {pageNum}
        </button>
      ))}
      <button
        onClick={() => dispatch(setPageNumber(pageNumber + 1))}
        style={
          pageNumber !== pageNumbers[pageNumbers.length - 1]
            ? {
                backgroundColor: "#35536B",
                color: "#fff",
                transition: "0.3s",
              }
            : null
        }
        disabled={pageNumber === totalPageCount}
      >
        {">"}
      </button>
    </div>
  );
};

export default MyPagination;
