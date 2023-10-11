/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';
import {Alert} from 'react-native';

export const updateRecipe = createAsyncThunk(
  'recipe/updateRecipe',
  async ({recipes_id, data, selectedImage, selectedVideo}) => {
    // console.log(recipes_id);
    const formdataTosend = new FormData();
    formdataTosend.append('name_recipes', data?.name_recipes);
    formdataTosend.append('image', {
      name: selectedImage?.fileName,
      type: selectedImage?.type,
      uri: selectedImage?.uri,
    });
    formdataTosend.append('ingredients', data?.ingredients);
    formdataTosend.append('video', {
      name: selectedVideo?.fileName,
      type: selectedVideo?.type,
      uri: selectedVideo?.uri,
    });
    formdataTosend.append('name_video', data?.name_video);
    try {
      const response = await axios.put(
        `${API_RECIPE}/recipe/${recipes_id}`,
        formdataTosend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response?.data;
    } catch (err) {
      Alert.alert('Error create Recipe');
      console.log(err);
    }
  },
);

export const updateRecipeSlice = createSlice({
  name: 'updateRecipe',
  initialState: {
    status: 'idle',
    loading: false,
    recipe: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateRecipe.pending, state => {
        state.loading = true;
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      });
  },
});

export const updateRecipeSelector = state => state.updateRecipe.recipe;
export const loadingrecipeUsersIdSelector = state => state.updateRecipe.loading;

export default updateRecipeSlice.reducer;
