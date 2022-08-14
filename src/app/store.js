import { configureStore } from "@reduxjs/toolkit";
import catFactReducer from "../features/catFact/catFactSlice";

export const store = configureStore({
  reducer: {
    catFact: catFactReducer,
  },
});
