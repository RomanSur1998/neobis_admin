// import React from "react";
// import styled from "styled-components";
// const RespnsiveButton = styled.button`
//   width: 534px;
//   height: 70px;
//   border-radius: 20px;
//   background: ${({ isdisabled }) =>
//     isdisabled ? "#35536B" : " rgba(53, 83, 107, 0.75)"};
//   border: none;
//   color: rgb(254, 254, 254);
//   font-size: 18px;
//   font-weight: 600;
//   cursor: pointer;
//   margin-top: ${(props) => props.margintop || "0px"};
// `;

// const Button = (props) => {
//   return <RespnsiveButton {...props}></RespnsiveButton>;
// };

// export default Button;

import React from "react";
import styles from "./Button.module.css";
import { colors } from "../../helpers/colors";
const Button = ({ children, type, isDisabled }) => {
  return (
    <button
      className={styles.button}
      type={type ?? null}
      style={{
        backgroundColor: !isDisabled ? `${colors.noValidButtonColor}` : null,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
