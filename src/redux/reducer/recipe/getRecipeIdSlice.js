/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';

export const getRecipeId = createAsyncThunk(
  'recipe/getRecipeId',
  async recipe_id => {
    try {
      const response = await axios.get(`${API_RECIPE}/recipe/${recipe_id}`);
    //   console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getRecipeIdSlice = createSlice({
  name: 'getRecipeId',
  initialState: {
    status: 'idle',
    loading: false,
    recipe: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRecipeId.pending, state => {
        state.loading = true;
      })
      .addCase(getRecipeId.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      })
      .addCase(getRecipeId.rejected, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      });
  },
});

export const getRecipeIdSelector = state => state.getRecipeId.recipe;

export default getRecipeIdSlice.reducer;
