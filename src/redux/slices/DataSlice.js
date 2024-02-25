import { createSlice } from "@reduxjs/toolkit";
import {
  getCategoryList,
  getMenuList,
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
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryList.fulfilled, (state, action) => {
      state.category = action.payload.data;
    });
    builder.addCase(getMenuList.fulfilled, (state, action) => {
      state.tableDataList = changeTableData(action.payload.data.responses);
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(setNewCategory.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(setNewCategory.fulfilled, (state, action) => {
      state.status = false;
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
} = dataSlice.actions;
export default dataSlice.reducer;
