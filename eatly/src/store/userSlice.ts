import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

export interface UserState {
  usersData: { [userId: number]: User };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  usersData: {},
  status: "idle",
  error: null,
};

export const fetchUsersByIds = createAsyncThunk<
  { [userId: number]: User },
  number[],
  { rejectValue: string }
>("user/fetchUsersByIds", async (userIds, { rejectWithValue }) => {
  try {
    const userPromises = userIds.map((userId) =>
      fetch(`https://dummyjson.com/users/${userId}`).then((res) => res.json())
    );

    const usersData = await Promise.all(userPromises);

    const usersDataByIds: { [userId: number]: User } = usersData.reduce(
      (acc, user) => {
        acc[user.id] = user;
        return acc;
      },
      {}
    );

    return usersDataByIds;
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
      .addCase(fetchUsersByIds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUsersByIds.fulfilled,
        (state, action: PayloadAction<{ [userId: number]: User }>) => {
          state.status = "succeeded";
          state.usersData = action.payload;
        }
      )
      .addCase(fetchUsersByIds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default userSlice.reducer;
