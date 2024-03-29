import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comment {
  id?: number;
  user: {
    username: string;
  };
  body: string;
}

export interface CommentsState {
  comments: Comment[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  status: "idle",
  error: null,
};

export const fetchComments = createAsyncThunk<
  Comment[],
  void,
  { rejectValue: string }
>("comments/fetchComments", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://dummyjson.com/comments");
    const data = await response.json();

    return data.comments;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
  }
});

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchComments.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.status = "succeeded";
          state.comments = action.payload;
        }
      )
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default commentsSlice.reducer;
