import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Article {
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
}

const initialState: ArticlesState = {
  articles: [],
  status: "idle",
  error: null,
};

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  { rejectValue: string }
>("articles/fetchArticles", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId,body,tags"
    );
    const data = await response.json();

    return data.articles;
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
  reducers: {},
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

export default articlesSlice.reducer;
