import React from "react";
import styles from "./NavButton.module.css";
import { icons } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { setRoute } from "../../redux/slices/DataSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const NavButton = ({ text, imagePath, path }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleSetRoute(e) {
    navigate(path);
  }

  return (
    <>
      <button
        className={styles.button}
        style={pathname == path ? { backgroundColor: "#F47356" } : null}
        value={path}
        onClick={handleSetRoute}
      >
        <img src={imagePath} alt="" />
        {text}
      </button>
    </>
  );
};

export default NavButton;
