import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice";
import commentsReducer from "./commentsSlice";
import articlesReducer from "./articlesSlice";
// import singlePostReducer from "./singleArticleSlice";
import singleArticleReducer from "./singleArticleSlice";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    comments: commentsReducer,
    articles: articlesReducer,
    // post: singlePostReducer,
    singleArticle: singleArticleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
