import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice";
import commentsReducer from "./commentsSlice";
import articlesReducer from "./articlesSlice";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    comments: commentsReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
