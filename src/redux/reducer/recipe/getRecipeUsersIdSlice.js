/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';

export const getRecipeByUsersId = createAsyncThunk(
  'recipe/getRecipeByUsersId',
  async users_id => {
    try {
      const response = await axios.get(`${API_RECIPE}/recipe/user/${users_id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getRecipeByUsersIdSlice = createSlice({
  name: 'getRecipeByUsersId',
  initialState: {
    status: 'idle',
    loading: false,
    recipe: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRecipeByUsersId.pending, state => {
        state.loading = true;
      })
      .addCase(getRecipeByUsersId.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      })
      .addCase(getRecipeByUsersId.rejected, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      });
  },
});

export const getRecipeByUsersIdSelector = state =>
  state.getRecipeByUsersId?.recipe;

export default getRecipeByUsersIdSlice.reducer;
