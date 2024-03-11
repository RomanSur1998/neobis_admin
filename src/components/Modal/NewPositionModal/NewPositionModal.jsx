import React, { useEffect } from "react";
import styles from "./NewPositionModal.module.css";
import classnames from "classnames";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";
import { icons } from "../../../assets";
import TextField from "../../../ui/TextField/TextField";
import SelectDropDown from "../../SelectDropDown/SelectDropDown";
import ModalButton from "../../../ui/ModalButton/ModalButton";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentModal,
  setTableDataList,
} from "../../../redux/slices/DataSlice";
import {
  getCategoryList,
  setPosition,
} from "../../../redux/actions/DataActions";
import { objectSample, units } from "../../../helpers/units";

const NewPositionModal = (props) => {
  const dispatch = useDispatch();
  const { category, tableDataList } = useSelector((state) => state.data);
  console.log(tableDataList, "tableDataList");

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  function handleClose() {
    dispatch(setCurrentModal(null));
  }

  console.log(props, "props");
  // function getString(params) {
  //   return Object.values(params).join(" ");
  // }

  // function changeDataForRedux() {
  //   objectSample.name = formik.values.name;
  //   objectSample.category = formik.values.category;
  //   objectSample.composition = formik.values.ingridients
  //     .map((item) => {
  //       return getString(item);
  //     })
  //     .join(",");
  //   objectSample.description = formik.values.description;
  //   objectSample.price = formik.values.price;
  //   objectSample.url = formik.values.file;
  //   return objectSample;
  // }

  const formik = useFormik({
    initialValues: {
      file: null,
      name: "" || props?.name,
      description: "" || props?.description,
      category: "" || props?.category,
      price: "" || props?.price,
      ingridients: props?.composition
        ? props?.composition
        : [{ name: "", quantity: "", mesure: "мл" }],
      image: null || props?.image,
    },
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        category: values.category,
        price: values.price,
        compositions: values.ingridients,
      };

      const fromData = {
        file: formik.values.file,
        file_json: JSON.stringify(data),
      };

      dispatch(setPosition(fromData));
    },
  });
  console.log(formik.values, "formik");

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

  function handleChangeCategory(categoryName) {
    formik.setFieldValue("category", categoryName);
  }

  function handleChahgeMesure(data, index) {
    const ingredients = [...formik.values.ingridients];
    ingredients[index].mesure = data;
    formik.setFieldValue("ingridients", ingredients);
  }
  function handleChahgeName(e, index) {
    const ingredients = [...formik.values.ingridients];
    ingredients[index].name = e.target.value;
    formik.setFieldValue("ingridients", ingredients);
  }
  function handleChahgeQuantity(e, index) {
    const ingredients = [...formik.values.ingridients];
    ingredients[index].quantity = e.target.value;
    formik.setFieldValue("ingridients", ingredients);
  }

  function addNextIngredient() {
    formik.setFieldValue("ingridients", [
      ...formik.values.ingridients,
      { name: "", quantity: "", mesure: "мл" },
    ]);
  }
  function removeLastIngridient() {
    const values = formik.values.ingridients;
    if (values.length !== 1) {
      formik.setFieldValue("ingridients", values.slice(0, -1));
    }
  }

  return (
    <BackgroundModal>
      <div className={classnames(styles.modal)}>
        <HeaderModals name={"Новая позиция"} />
        <form
          action=""
          className={classnames(styles.form)}
          onSubmit={formik.handleSubmit}
        >
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
          <h3 className={classnames(styles.label_bold)}>
            Наименования , категория и стоимость{" "}
          </h3>
          <label
            className={classnames(styles.flex, styles.label, styles.direction)}
          >
            Наименование
            <TextField
              name={"name"}
              change={formik.handleChange}
              blur={formik.handleBlur}
              value={formik.values.name}
              placeholder={"Введите название "}
            />
          </label>
          <label htmlFor="" className={classnames(styles.label)}>
            Описание
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              className={classnames(styles.textarea)}
              placeholder="Введите описание "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </label>
          <div className={classnames(styles.button_block, styles.flex)}>
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
                selectList={category}
                change={handleChangeCategory}
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
              Стоимость
              <TextField
                value={formik.values.price}
                name={"price"}
                placeholder={"Введите цену"}
                change={formik.handleChange}
                blur={formik.handleBlur}
              />
            </label>
          </div>
          <div>
            <h3>Состав блюда и граммовка</h3>
            <div
              className={classnames(styles.flex, styles.direction, styles.gaps)}
            >
              {formik.values.ingridients?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={classnames(styles.button_block, styles.flex)}
                  >
                    <label
                      htmlFor=""
                      className={classnames(
                        styles.flex,
                        styles.label,
                        styles.direction
                      )}
                    >
                      Наименование
                      <input
                        value={item.name}
                        type="text"
                        placeholder="Введите наименование"
                        className={classnames(
                          styles.background,
                          styles.width,
                          styles.input
                        )}
                        onChange={(e) => {
                          handleChahgeName(e, index);
                        }}
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
                      Кол-во (в гр, мл, л, кг)
                      <div className={classnames(styles.flex, styles.ex)}>
                        <input
                          type="text"
                          value={item.quantity}
                          placeholder="Введите кол-во"
                          className={classnames(
                            styles.background,
                            styles.width,
                            styles.input,
                            styles.with_17
                          )}
                          onChange={(e) => {
                            handleChahgeQuantity(e, index);
                          }}
                        />

                        <SelectDropDown
                          name={item.mesure ? item.mesure : "мл"}
                          inputType={"small"}
                          selectList={units}
                          change={handleChahgeMesure}
                          ingredientIndex={index}
                        />
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className={classnames(styles.button_block, styles.flex)}>
              <ModalButton buttonType={"color"} click={removeLastIngridient}>
                {" "}
                Удалить последний -
              </ModalButton>
              <ModalButton buttonType={"darker"} click={addNextIngredient}>
                {" "}
                Добавить еще +
              </ModalButton>
            </div>
          </div>
          <div className={classnames(styles.button_block, styles.flex)}>
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

export default NewPositionModal;
