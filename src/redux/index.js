import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import DataSlice from "./slices/DataSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    data: DataSlice,
  },
});
