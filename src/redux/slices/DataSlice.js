import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: "/menu",
  currentModal: null,
  isShowPopUp: false,
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
      // state.isShowPopUp = !state.isShowPopUp;
      state.isShowPopUp = action.payload;
    },
  },
});

export const { setRoute, setCurrentModal, setIsShowPopUp } = dataSlice.actions;
export default dataSlice.reducer;
