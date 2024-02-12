import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: "/menu",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setRoute(state, action) {
      state.route = action.payload;
    },
  },
});

export const { setRoute } = dataSlice.actions;
export default dataSlice.reducer;
