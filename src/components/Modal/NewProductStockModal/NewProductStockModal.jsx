import React, { useEffect } from "react";
import styles from "./NewProductStockModal.module.css";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import classnames from "classnames";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import TextField from "../../../ui/TextField/TextField";
import SelectDropDown from "../../SelectDropDown/SelectDropDown";
import { stockCategory, units } from "../../../helpers/units";
import { useFormik } from "formik";
import {
  getCategoryList,
  getFilialName,
  setProduct,
} from "../../../redux/actions/DataActions";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "../../../redux/slices/DataSlice";

const NewProductStockModal = (props) => {
  const { category, filialName } = useSelector((state) => state.data);

  console.log(filialName, "filialName");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getFilialName());
  }, []);

  function handleClose() {
    dispatch(setCurrentModal(null));
  }

  const formik = useFormik({
    initialValues: {
      name: "" || props?.name,
      quantity: "" || props?.quantity,
      mesure: "мл" || props?.unit,
      minLimit: "",
      dateIn: "",
      branch: "",
      category: "",
    },
    onSubmit: (values) => {
      const data = {
        name: values.name,
        quantity: values.quantity,
        category: values.category,
        minimalLimit: values.minLimit,
        dateOfArrival: values.dateIn,
        unit: values.mesure,
      };
      console.log(values);
      dispatch(setProduct(data));
    },
  });

  function handleChangeMesure(mesure) {
    formik.setFieldValue("mesure", mesure);
  }
  function handleChangeCategory(categoryName) {
    formik.setFieldValue("category", categoryName);
  }
  function handleChangeFilialName(filialName) {
    formik.setFieldValue("branch", filialName);
  }

  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals />
        <form
          onSubmit={formik.handleSubmit}
          className={classnames(styles.flex, styles.direction, styles.gap_16)}
        >
          <h3 className={classnames(styles.text)}>
            Наименование, категория и стоимость
          </h3>
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
                placeholder={"Введите наименование"}
              />
            </label>
          </div>

          <div className={classnames(styles.button_block, styles.flex)}>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Кол-во (в гр, мл, л, кг)
              <div className={classnames(styles.flex, styles.select)}>
                <div className={classnames(styles.field)}>
                  <TextField
                    change={formik.handleChange}
                    name={"quantity"}
                    placeholder={"Введите кол-во"}
                    blur={formik.handleBlur}
                    value={formik.values.quantity}
                  />
                </div>
                <SelectDropDown
                  name={formik.values.mesure ? formik.values.mesure : "мл"}
                  inputType={"small"}
                  selectList={units}
                  change={handleChangeMesure}
                />
              </div>
            </label>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Категория
              <SelectDropDown
                name={
                  formik.values.category
                    ? formik.values.category
                    : "Выберите категорию"
                }
                selectList={stockCategory}
                change={handleChangeCategory}
              />
            </label>
          </div>
          <div className={classnames(styles.flex, styles.button_block)}>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Минимальный лимит
              <TextField
                name={"minLimit"}
                placeholder={"Введите мин.лимит"}
                change={formik.handleChange}
                blur={formik.handleBlur}
                value={formik.values.minLimit}
              />
            </label>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Дата прихода
              <TextField
                name={"dateIn"}
                placeholder={" дд.мм.гг "}
                change={formik.handleChange}
                blur={formik.handleBlur}
                value={formik.values.dateIn}
              />
            </label>
          </div>
          <div className={classnames(styles.flex, styles.button_block)}>
            <label
              htmlFor=""
              className={classnames(
                styles.flex,
                styles.label,
                styles.direction
              )}
            >
              Филиал
              <SelectDropDown
                name={
                  formik.values.branch
                    ? formik.values.branch
                    : "Выберите филиал"
                }
                selectList={filialName}
                change={handleChangeFilialName}
              />
            </label>
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

export default NewProductStockModal;
