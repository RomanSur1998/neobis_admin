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
    header: "Состав блюда и граммовка",
    id: 4,
  },
  {
    header: "Стоимость",
    id: 5,
  },
  {
    header: "Филиал",
    id: 6,
  },
];
export const menuBody = [
  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],
  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],
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
  {
    header: "Филиал",
    id: 6,
  },
];
export const stockBody = [
  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],
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
    header: "Количество",
    id: 3,
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
export const branchBody = [
  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
  ],
  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
  ],
];
export const employerHeader = [
  {
    header: "№",
    id: 1,
  },
  {
    header: "Имя",
    id: 2,
  },
  {
    header: "Должность",
    id: 3,
  },
  {
    header: "Выберите филиал",
    id: 4,
  },
  {
    header: "Телефон",
    id: 5,
  },
  {
    header: "График работы",
    id: 6,
  },
];

export const employerBody = [
  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],

  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],
  [
    { tableCell: "1" },
    { tableCell: "Капучино" },
    { tableCell: "Кофе" },
    { tableCell: "Молоко (70мл), Кофе (15 зерен)" },
    { tableCell: "140 сом" },
    { tableCell: "NeoCafe Ala-Too Square" },
  ],
];
