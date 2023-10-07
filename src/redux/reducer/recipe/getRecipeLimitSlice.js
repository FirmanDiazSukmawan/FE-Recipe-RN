/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';

export const getRecipeLimit = createAsyncThunk(
  'recipe/getRecipeLimit',
  async () => {
    try {
      const response = await axios.get(
        `${API_RECIPE}/recipe/?limit=5&sort=DESC`,
      );
    //   console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getRecipeLimitSlice = createSlice({
  name: 'getRecipeLimit',
  initialState: {
    status: 'idle',
    loading: false,
    recipe: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRecipeLimit.pending, state => {
        state.loading = true;
      })
      .addCase(getRecipeLimit.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      })
      .addCase(getRecipeLimit.rejected, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      });
  },
});

export const getRecipeLimitSelector = state => state.getRecipeLimit.recipe;
export const getLoadingLimitSelector = state => state.getRecipeLimit.loading;

export default getRecipeLimitSlice.reducer;
