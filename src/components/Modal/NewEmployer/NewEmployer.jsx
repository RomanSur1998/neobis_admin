import React, { useEffect } from "react";
import styles from "./NewEmployer.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import classnames from "classnames";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import TextField from "../../../ui/TextField/TextField";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import GraphRow from "../../../ui/GraphRow/GraphRow";
import SelectDropDown from "../../SelectDropDown/SelectDropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryList,
  getFilialName,
  setEmployer,
} from "../../../redux/actions/DataActions";
import { useFormik } from "formik";
import { positon } from "../../../helpers/units";
import { setCurrentModal } from "../../../redux/slices/DataSlice";
const NewEmployer = (props) => {
  const { filialName } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  const formik = useFormik({
    initialValues: {
      login: props?.login || "",
      password: props?.password || "",
      name: props?.name || "",
      position: props?.position || "",
      birthday: props?.login || "",
      email: props?.email || "",
      branch: props?.branch || "",
      workDays: [
        { day: "Понедельник", checked: false, from: "", to: "" },
        { day: "Вторник", checked: false, from: "", to: "" },
        { day: "Среда", checked: false, from: "", to: "" },
        { day: "Четверг", checked: false, from: "", to: "" },
        { day: "Пятница", checked: false, from: "", to: "" },
        { day: "Суббота", checked: false, from: "", to: "" },
        { day: "Воскресенье", checked: false, from: "", to: "" },
      ],
    },
    onSubmit: (values) => {
      dispatch(setEmployer(values));
    },
  });

  console.log(props, "PROPS");

  useEffect(() => {
    dispatch(getFilialName());
  }, []);

  function handleChangePosition(position) {
    formik.setFieldValue("position", position);
  }

  function handleClose() {
    dispatch(setCurrentModal(null));
  }

  function hendleSelectDay(dayName, start, end) {
    let days = formik.values?.workDays?.map((elem) => {
      if (dayName === elem.day) {
        return { ...elem, checked: !elem.checked, from: start, to: end };
      }
      return elem;
    });
    formik.setFieldValue("workDays", days);
  }

  function handleFilialChange(branch) {
    formik.setFieldValue("branch", branch);
  }
  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новый работник "} />
        <form
          action=""
          className={classnames(styles.flex, styles.direction, styles.gap_16)}
          onSubmit={formik.handleSubmit}
        >
          <div>
            <h3>Личные данные</h3>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Логин
              <TextField
                name={"login"}
                value={formik.values.login}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите логин"}
              />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Пароль
              <TextField
                name={"password"}
                value={formik.values.password}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите пароль"}
              />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Имя
              <TextField
                name={"name"}
                value={formik.values.name}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите имя"}
              />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Должность
              <SelectDropDown
                inputType={"full"}
                name={formik.values.position || "Выберите должность"}
                selectList={positon}
                change={handleChangePosition}
              />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Дата рождения
              <TextField
                name={"birthday"}
                value={formik.values.birthday}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите дату рождения"}
              />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Почта
              <TextField
                name={"email"}
                value={formik.values.email}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"example@mail.com"}
              />
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Выберите филлиал
              <SelectDropDown
                name={formik.values.branch || "Выберите филал"}
                selectList={filialName}
                inputType={"full"}
                change={handleFilialChange}
              />
            </label>
          </div>
          <div className={classnames(styles.time_container, styles.flex)}>
            <h3>График работы </h3>
            <hr />
            {formik.values.workDays?.map((elem) => {
              return (
                <GraphRow
                  day={elem.day}
                  checked={elem.checked}
                  changeDay={hendleSelectDay}
                />
              );
            })}
          </div>
          <div
            className={classnames(
              styles.button_block,
              styles.flex,
              styles.position
            )}
          >
            <ModalButton buttonType={"outlined"} click={handleClose}>
              Отменa
            </ModalButton>
            <ModalButton buttonType={"filled"} type={"submit"}>
              {" "}
              Добавить
            </ModalButton>
          </div>
        </form>
      </div>
    </BackgroundModal>
  );
};

export default NewEmployer;
