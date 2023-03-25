import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipeAction = createAsyncThunk(
  "recipe/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/recipe");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addRecipeAction = createAsyncThunk(
  "recipe/addRecipeAction",
  async ({ name }, thunkApi) => {
    try {
      const response = await axios.post("/recipe", { name });
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
