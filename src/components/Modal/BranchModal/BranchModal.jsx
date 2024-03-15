import React from "react";
import styles from "./BranchModal.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import classnames from "classnames";
import ModalButton from "../../../ui/ModalButton/ModalButton";

import TextField from "../../../ui/TextField/TextField";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import { icons } from "../../../assets";
import GraphRow from "../../../ui/GraphRow/GraphRow";
import { setCurrentModal } from "../../../redux/slices/DataSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { editFilial, setBranch } from "../../../redux/actions/DataActions";

const BranchModal = (props) => {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(setCurrentModal(null));
  }
  const formik = useFormik({
    initialValues: {
      image: props?.image || null,
      file: null,
      name: props?.name || "",
      address: props?.address || "",
      phoneNumber: props?.phoneNumber || "",
      link: props?.gisUrl || "",
      tableQuantity: props?.tableAmount || "",
      workDays: props?.workDays || [
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
      const data = {
        name: values.name,
        address: values.address,
        phone: values.phoneNumber,
        link: values.link,
        tableQuantity: values.tableQuantity,
        workDays: values.workDays,
      };
      const formData = {
        file: values.file,
        file_json: JSON.stringify(data),
      };
      if (props) {
        dispatch(editFilial({ data: formData, id: props.id }));
      } else {
        dispatch(setBranch(formData));
      }
    },
  });
  console.log(props, "PROPS");
  function hendleSelectDay(dayName, start, end) {
    let days = formik.values?.workDays?.map((elem) => {
      if (dayName === elem.day) {
        return { ...elem, checked: !elem.checked, from: start, to: end };
      }
      return elem;
    });
    formik.setFieldValue("workDays", days);
  }
  const handleChageImage = (e) => {
    console.log(e.type, "type");
    e.preventDefault();
    const files = e.type === "drop" ? e.dataTransfer.files : e.target.files;
    if (files && files.length > 0) {
      let file = files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          formik.handleChange({
            target: { id: "image", value: reader.result },
          });
        };
        reader.readAsDataURL(file);
      }
      formik.setFieldValue("file", file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новая филиал"} />
        <form
          action=""
          className={classnames(styles.flex, styles.direction, styles.gap_16)}
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label
              htmlFor="download"
              className={classnames(styles.label_bold)}
              onDragOver={handleDragOver}
              onDrop={handleChageImage}
            >
              Добавьте фото к позиции
              <div className={classnames(styles.downloads_out, styles.flex)}>
                <div className={classnames(styles.downloads_in, styles.flex)}>
                  <img
                    className={classnames({
                      [styles.image]: formik.values.image || props?.image,
                    })}
                    src={
                      formik.values.image
                        ? formik.values.image
                        : icons.download_icon
                    }
                    alt=""
                  />
                  <p>
                    Перетащите изображение для изменения или <span>обзор</span>{" "}
                  </p>
                </div>
              </div>
              <input
                type="file"
                name="file"
                id="download"
                className={classnames(styles.file_input)}
                onChange={handleChageImage}
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
              Наименования
              <TextField
                name={"name"}
                value={formik.values.name}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите название"}
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
              Адрес
              <TextField
                name={"address"}
                value={formik.values.address}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите адресс"}
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
              Номер телефона
              <TextField
                name={"phoneNumber"}
                value={formik.values.phoneNumber}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите телефон"}
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
              Ссылка на 2ГИС
              <TextField
                name={"link"}
                value={formik.values.link}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите ссылку"}
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
              Количество столиков
              <TextField
                name={"tableQuantity"}
                value={formik.values.tableQuantity}
                change={formik.handleChange}
                blur={formik.handleBlur}
                placeholder={"Введите кол-во столиков"}
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

export default BranchModal;
