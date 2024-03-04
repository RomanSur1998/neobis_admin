import { createSlice } from "@reduxjs/toolkit";
import {
  branchesSearch,
  deleteCategory,
  employersSearch,
  getAllEmployers,
  getBranch,
  getCategoryList,
  getMenuList,
  getOutStock,
  getStockList,
  menuSearch,
  setNewCategory,
  stockSearch,
} from "../actions/DataActions";

const initialState = {
  search: "",
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
  filterValue: "Готовая продукция",
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
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryList.fulfilled, (state, action) => {
      state.category = action.payload.data;
    });
    builder.addCase(getMenuList.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
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
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(getBranch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
    });
    builder.addCase(getOutStock.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
    });
    builder.addCase(menuSearch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
    });
    builder.addCase(stockSearch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
    });
    builder.addCase(branchesSearch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
    });
    builder.addCase(getAllEmployers.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
    });
    builder.addCase(employersSearch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
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
  setFilterValue,
  setSearch,
} = dataSlice.actions;
export default dataSlice.reducer;
