import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { icons } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentModal,
  setModalTitle,
  setPageNumber,
  setSearch,
} from "../../redux/slices/DataSlice";
import { useLocation } from "react-router-dom";
import { getHeaderTitle } from "../../helpers/getHeaderTitle";
import {
  getCurrentModalName,
  getCurrentModalTitle,
} from "../../helpers/getCurrentModalName";
import useDebounce from "../../hooks/useDebounce";
import { getAction } from "../../helpers/getAction";

const Header = () => {
  const { pathname } = useLocation();
  const { search } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(search, 500);
  useEffect(() => {
    const action = getAction[pathname];
    // console.log(debouncedSearchTerm, "debounce");
    if (action && debouncedSearchTerm.length !== 0) {
      console.log(search, "поиск");
      dispatch(action(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    dispatch(setPageNumber(1));
  }, [pathname]);

  function handleAdd() {
    dispatch(setCurrentModal(getCurrentModalName[pathname]));
    dispatch(setModalTitle(getCurrentModalTitle[pathname]));
  }

  function handleChange(value) {
    dispatch(setSearch(value));
  }

  return (
    <header className={styles.headerContainer}>
      <span className={styles.title}>{getHeaderTitle[pathname]}</span>
      <div className={styles.containerRight}>
        <form action="">
          <label htmlFor="" className={styles.input}>
            <img src={icons.search_icon} alt="" />
            <input
              type="text"
              placeholder="Поиск "
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </label>
        </form>

        <button className={styles.createButtnon} onClick={handleAdd}>
          Создать
          <img src={icons.plus_icon} alt="" />
        </button>
        <button className={styles.imageButton}>
          <img src={icons.notification_logo} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
