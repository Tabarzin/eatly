import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Reactions {
  likes: number;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  reactions: Reactions;
  user: User;
}

const initialState: CommentState = {
  comment: null,
  loading: false,
  error: null,
};

interface PostCommentResponse {
  id: number;
  body: string;
  postId: number;
  reactions: Reactions;
  user: User;
}

interface PostCommentParams {
  body: string;
  postId: number;
  userId: number;
}

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface CommentState {
  comment: Comment | null;
  loading: boolean;
  error: string | null;
}

export const postComment = createAsyncThunk<
  PostCommentResponse,
  PostCommentParams
>(
  "comments/postComment",
  async ({ body, postId, userId }, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body, postId, userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment: " + response.statusText);
      }

      const data: PostCommentResponse = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        postComment.fulfilled,
        (state, action: PayloadAction<PostCommentResponse>) => {
          state.loading = false;
          state.comment = action.payload;
        }
      )
      .addCase(postComment.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : action.error.message || "Something went wrong";
      });
  },
});

export default commentSlice.reducer;
