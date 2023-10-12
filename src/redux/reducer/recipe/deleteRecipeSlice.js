/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';
import { Alert } from 'native-base';

export const deleteRecipe = createAsyncThunk(
  'recipe/deleteRecipe',
  async recipes_id => {
    try {
      const response = await axios.delete(`${API_RECIPE}/recipe/${recipes_id}`);
      return response.data;
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  },
);

export const deleteRecipeSlice = createSlice({
  name: 'deleteRecipe',
  initialState: {
    status: 'idle',
    loading: false,
    recipe: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteRecipe.pending, state => {
        state.loading = true;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = state.recipe.filter(item => item !== action.payload);
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      });
  },
});

export const deleteRecipeSelector = state => state.deleteRecipe.recipe;
export const loadingDeleteRecipeSelector = state => state.deleteRecipe.loading;

export default deleteRecipeSlice.reducer;
