import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

export interface UserState {
  userData: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  userData: null,
  status: "idle",
  error: null,
};

export const fetchUserData = createAsyncThunk<
  User,
  number,
  { rejectValue: string }
>("user/fetchUserData", async (userId, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const userData = await response.json();

    console.log(userData, "USER");

    return userData;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "succeeded";
          state.userData = action.payload;
        }
      )
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default userSlice.reducer;
