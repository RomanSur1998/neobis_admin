import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: "/menu",
  currentModal: null,
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
  },
});

export const { setRoute, setCurrentModal } = dataSlice.actions;
export default dataSlice.reducer;
