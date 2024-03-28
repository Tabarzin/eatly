import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Article {
  userData: User;
  user: any;
  id: number;
  title: string;
  reactions: number;
  userId: number;
  body: string;
  tags: string[];
}

export interface ArticlesState {
  articles: Article[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
}

const initialState: ArticlesState = {
  articles: [],
  status: "idle",
  error: null,
  currentPage: 1,
};

export const fetchArticles = createAsyncThunk<
  Article[],
  { page: number },
  { rejectValue: string }
>("articles/fetchArticles", async ({ page }, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/posts?limit=12&skip=${
        (page - 1) * 12
      }&select=title,reactions,userId,body,tags`
    );
    const data = await response.json();
    return data.posts;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
  }
});

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.status = "succeeded";
          state.articles = action.payload;
        }
      )
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export const { setCurrentPage } = articlesSlice.actions;
export default articlesSlice.reducer;
