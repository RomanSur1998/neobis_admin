import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "../actions/UserActions";

const initialState = {
  email: "",
  password: "",
  statusbar: false,
  accessToken: null,
  error: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setEmail(actions, payload) {},
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state, actions) => {
      state.statusbar = true;
    });
    builder.addCase(authUser.fulfilled, (state, actions) => {
      state.statusbar = false;
      console.log(actions.payload, "payload");
      state.accessToken = actions.payload.data.accessToken;
    });
    builder.addCase(authUser.rejected, (state, actions) => {
      state.error = true;
      console.error("Ошибка авторизации:"); // Логируем данные ошибки
    });
  },
});
export const { setEmail, setAccessToken } = userSlice.actions;
export default userSlice.reducer;
