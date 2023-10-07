/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';

export const getRecipe = createAsyncThunk('recipe/getRecipe', async () => {
  try {
    const response = await axios.get(`${API_RECIPE}/recipe`);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const getRecipeSlice = createSlice({
  name: 'getRecipe',
  initialState: {
    status: 'idle',
    loading: false,
    recipe: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRecipe.pending, state => {
        state.loading = true;
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      })
      .addCase(getRecipe.rejected, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      });
  },
});

export const getRecipeSelector = state => state.getRecipe.recipe;
export const getLoadingSelector = state => state.getRecipe.loading;

export default getRecipeSlice.reducer;
