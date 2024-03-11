import { icons } from "../../assets";
import { setIsShowPopUp } from "../../redux/slices/DataSlice";

export const menuHeader = [
  {
    header: "№",
    id: 1,
  },
  {
    header: "Наименование",
    id: 2,
  },
  {
    header: "Категория",
    id: 3,
    image: icons.arrow_dowm,
    onClick: (dispatch) => {
      dispatch(setIsShowPopUp(true));
    },
  },
  {
    header: "Стоимость",
    id: 5,
  },
  {
    header: "Состав блюда и граммовка",
    id: 4,
  },
];

export const stockHeader = [
  {
    header: "№",
    id: 1,
  },
  {
    header: "Наименование",
    id: 2,
  },
  {
    header: "Количество",
    id: 3,
  },
  {
    header: "Лимит",
    id: 4,
  },
  {
    header: "Дата прихода",
    id: 5,
  },
];

export const branchHeader = [
  {
    header: "№",
    id: 1,
  },
  {
    header: "Название кофейни",
    id: 2,
  },

  {
    header: "Адрес",
    id: 4,
  },
  {
    header: "Время работы",
    id: 5,
  },
];

export const employerHeader = [
  {
    header: "№",
    id: 1,
  },
  {
    header: "Название кофейни",
    id: 2,
  },

  {
    header: "Адрес",
    id: 4,
  },
  {
    header: "Время работы",
    id: 5,
  },
];
