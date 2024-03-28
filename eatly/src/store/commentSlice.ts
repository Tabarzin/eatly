import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

interface CommentState {
  comment: Comment | null;
  loading: boolean;
  error: string | null;
}

const initialState: CommentState = {
  comment: null,
  loading: false,
  error: null,
};

export const postComment = createAsyncThunk<
  Comment,
  { body: string; postId: number; userId: number }
>("comments/postComment", async ({ body, postId, userId }) => {
  const response = await fetch("https://dummyjson.com/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body, postId, userId }),
  });

  return await response.json();
});

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
      .addCase(postComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comment = action.payload;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default commentSlice.reducer;
