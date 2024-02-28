import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCategory,
  getCategoryList,
  getMenuList,
  getStockList,
  setNewCategory,
} from "../actions/DataActions";
import { changeTableData } from "../../helpers/table/changeTableData";

const initialState = {
  status: false,
  route: "/menu",
  currentModal: null,
  modalProps: null,
  isShowPopUp: false,
  category: ["Загрузка..."],
  tableDataList: null,
  count: null,
  totalPageCount: null,
  pageNumber: 1,
  filter: [
    { name: "Готовая продукция", active: true },
    { name: "Сырье", active: false },
    { name: "Заканчивающиеся продукты", end: true, active: false },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setRoute(state, action) {
      state.route = action.payload;
    },
    setCurrentModal(state, action) {
      state.currentModal = action.payload;
    },
    setIsShowPopUp(state, action) {
      state.isShowPopUp = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setProps(state, action) {
      state.modalProps = action.payload;
    },
    setFilter(state, action) {
      state.filter = state.filter.map((elem) => {
        if (elem.name === action.payload) {
          return { ...elem, active: !elem.active };
        } else {
          return { ...elem, active: false };
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryList.fulfilled, (state, action) => {
      state.category = action.payload.data;
    });
    builder.addCase(getMenuList.fulfilled, (state, action) => {
      console.log(action.payload);
      state.tableDataList = changeTableData(action.payload.data.responses);
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(setNewCategory.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(setNewCategory.fulfilled, (state, action) => {
      state.status = false;
      state.currentModal = null;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(getStockList.fulfilled, (state, action) => {
      console.log(action.payload);
      state.tableDataList = changeTableData(action.payload.data.responses);
      state.totalPageCount = action.payload.data.allCount;
    });
  },
});

export const {
  setRoute,
  setCurrentModal,
  setIsShowPopUp,
  setCategory,
  setPageNumber,
  setProps,
  setFilter,
} = dataSlice.actions;
export default dataSlice.reducer;
