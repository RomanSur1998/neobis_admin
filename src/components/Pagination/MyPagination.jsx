import React, { useState } from "react";
import { Pagination, styled } from "@mui/material";
import styles from "./MyPagination.module.css";

const StyledPagination = styled(Pagination)({
  color: "#515151",
  gap: "8px",

  "& .MuiPaginationItem-root": {
    color: "#515151",
    backgroundColor: "#fff",
    border: "none",
    width: "40px",
    height: "40px",
  },

  "& .MuiPaginationItem-outlined.Mui-selected": {
    color: "#515151",
    backgroundColor: "#EBEFF2",
    width: "40px",
    height: "40px",
  },
});

const MyPagination = () => {
  const page = [1, 2, 3, 4];
  const [curretPage, setCurrentPAge] = useState("1");

  console.log(curretPage, "page num");
  return (
    <>
      {/* <div className={styles.paginationContainer}>
        <button
          style={
            curretPage != 1
              ? {
                  backgroundColor: "#35536B",
                  color: "#fff",
                  transition: "0.3s",
                }
              : null
          }
        >
          {" "}
          {"<"}{" "}
        </button>
        {page.map((elem) => {
          return (
            <button
              style={
                curretPage == elem
                  ? {
                      backgroundColor: "#EBEFF2",
                      transition: "0.3s",
                    }
                  : null
              }
              value={elem}
              onClick={(e) => {
                setCurrentPAge(e.target.value);
              }}
              key={elem}
            >
              {elem}
            </button>
          );
        })}
        <button
          style={
            curretPage != page[page.length]
              ? {
                  backgroundColor: "#35536B",
                  color: "#fff",
                  transition: "0.3s",
                }
              : null
          }
        >
          {" "}
          {">"}{" "}
        </button>
      </div> */}
      <StyledPagination count={8} variant="outlined" shape="rounded" />
    </>
  );
};

export default MyPagination;
