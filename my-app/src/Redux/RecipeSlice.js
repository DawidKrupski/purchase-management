import { createSlice } from "@reduxjs/toolkit";
import { addRecipeAction, fetchRecipeAction } from "./Operations";

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRecipeAction.pending]: handlePending,
    [fetchRecipeAction.rejected]: handleRejected,
    [fetchRecipeAction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload;
    },
    [addRecipeAction.pending]: handlePending,
    [addRecipeAction.rejected]: handleRejected,
    [addRecipeAction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipes.push(action.payload);
    },
  },
});

export const recipeReducer = recipeSlice.reducer;
