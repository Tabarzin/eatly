import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Recipe {
  mealType: string;
  id: number;
  name: string;
  rating: number;
  prepTimeMinutes: string;
  image: string;
}

export interface RecipesState {
  recipes: Recipe[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: RecipesState = {
  recipes: [],
  status: "idle",
  error: null,
};

export const fetchRecipes = createAsyncThunk<
  Recipe[],
  void,
  { rejectValue: string }
>("recipes/fetchRecipes", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://dummyjson.com/recipes/meal-type/snack"
    );
    const data = await response.json();

    return data.recipes;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
  }
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchRecipes.fulfilled,
        (state, action: PayloadAction<Recipe[]>) => {
          state.status = "succeeded";
          state.recipes = action.payload;
        }
      )
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default recipesSlice.reducer;
