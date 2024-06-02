import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  lastName: string;
  firstName: string;
  image: string;
  id: number;
  username: string;
  fullName: string;
}

interface Reactions {
  likes: number;
}

interface Comment {
  id: string;
  body: string;
  postId: number;
  reactions: Reactions;
  user: User;
}

export interface Article {
  id: number;
  title: string;
  body: string;
  user: User;
  tags: string[];
  reactions: Reactions;
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
    const [article, comments] = await Promise.all([
      fetch(`https://dummyjson.com/posts/${articleId}`),
      fetch(`https://dummyjson.com/comments/post/${articleId}`),
    ]);

    const [articleData, commentsData] = await Promise.all([
      article.json(),
      comments.json(),
    ]);

    const user = await fetch(
      `https://dummyjson.com/users/${articleData.userId}`
    ).then((res) => res.json());

    const articleDetails: Article = {
      id: articleData.id,
      title: articleData.title,
      body: articleData.body,
      user: user,
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
