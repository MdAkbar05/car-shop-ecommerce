// store all slice by react redux

import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./features/carSlice";
import userSlice from "./features/userSlice";
import reviewSlice from "./features/reviewSlice";

export const store = configureStore({
  reducer: {
    carReducer: carSlice,
    userReducer: userSlice,
    reviewReducer: reviewSlice,
  },
});
