import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

export interface Comment {
  id: number;
  body: string;
  user: User;
}

export interface Article {
  id: number;
  title: string;
  body: string;
  user: User;
  tags: string[];
  reactions: number;
  comments: Comment[];
}

export interface ArticleState {
  articleDetails: Article | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ArticleState = {
  articleDetails: null,
  status: "idle",
  error: null,
};

export const fetchSingleArticle = createAsyncThunk<
  Article,
  number,
  { rejectValue: string }
>("post/fetchSingleArticle", async (articleId, { rejectWithValue }) => {
  try {
    const [article, user, comments] = await Promise.all([
      fetch(`https://dummyjson.com/posts/${articleId}`),
      fetch(`https://dummyjson.com/users/1`),
      fetch(`https://dummyjson.com/comments/post/${articleId}`),
    ]);

    const [articleData, userData, commentsData] = await Promise.all([
      article.json(),
      user.json(),
      comments.json(),
    ]);

    const articleDetails: Article = {
      id: articleData.id,
      title: articleData.title,
      body: articleData.body,
      user: userData.firstName && userData.lastName ? userData : null,
      comments: commentsData.comments,
      tags: articleData.tags,
      reactions: articleData.reactions,
    };

    return articleDetails;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
  }
});

const singleArticleSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchSingleArticle.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.status = "succeeded";
          state.articleDetails = action.payload;
        }
      )
      .addCase(fetchSingleArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default singleArticleSlice.reducer;
