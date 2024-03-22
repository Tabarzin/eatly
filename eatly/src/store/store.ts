import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice";
import commentsReducer from "./commentsSlice";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
