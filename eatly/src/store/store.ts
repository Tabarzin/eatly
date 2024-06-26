import { AnyAction, configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice";
import commentsReducer from "./commentsSlice";
import articlesReducer from "./articlesSlice";
import userReducer from "./userSlice";
import singleArticleReducer from "./singleArticleSlice";
import commentReducer from "./commentSlice";
import { ThunkDispatch } from "redux-thunk";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    comments: commentsReducer,
    articles: articlesReducer,
    user: userReducer,
    singleArticle: singleArticleReducer,
    comment: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export default store;
