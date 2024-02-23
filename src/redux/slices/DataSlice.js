import { createSlice } from "@reduxjs/toolkit";
import { getCategoryList, getMenuList } from "../actions/DataActions";
import { changeTableData } from "../../helpers/table/changeTableData";

const initialState = {
  route: "/menu",
  currentModal: "",
  isShowPopUp: false,
  category: ["Загрузка..."],
  tableDataList: null,
  count: null,
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
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryList.fulfilled, (state, action) => {
      state.category = action.payload.data;
    });
    builder.addCase(getMenuList.fulfilled, (state, action) => {
      state.tableDataList = changeTableData(action.payload.data.responses);
    });
  },
});

export const { setRoute, setCurrentModal, setIsShowPopUp, setCategory } =
  dataSlice.actions;
export default dataSlice.reducer;
