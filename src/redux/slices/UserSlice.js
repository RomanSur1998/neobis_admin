import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "../actions/UserActions";

const initialState = {
  email: "",
  password: "",
  codeOTP: "",
  statusbar: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail(actions, payload) {},
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state, actions) => {
      state.statusbar = true;
    });
    builder.addCase(authUser.fulfilled, (state, actions) => {
      state.statusbar = false;
    });
  },
});
export const { setEmail } = userSlice.actions;
export default userSlice.reducer;
