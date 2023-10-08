/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';
import {Alert} from 'react-native';

export const createRecipe = createAsyncThunk(
  'recipe/createRecipe',
  async ({users_id, data, selectedImage, selectedVideo}) => {
    console.log(users_id);
    const formdataTosend = new FormData();
    formdataTosend.append('name_recipes', data.name_recipes);
    formdataTosend.append('image', {
      name: selectedImage?.fileName,
      type: selectedImage?.type,
      uri: selectedImage?.uri,
    });
    formdataTosend.append('ingredients', data.ingredients);
    formdataTosend.append('video', {
      name: selectedVideo?.fileName,
      type: selectedVideo?.type,
      uri: selectedVideo?.uri,
    });
    formdataTosend.append('name_video', data.name_video);
    formdataTosend.append('users_id', users_id);
    try {
      const response = await axios.post(
        `${API_RECIPE}/recipe/`,
        formdataTosend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(response);
    } catch (err) {
      Alert.alert('Error create Recipe');
      console.log(err);
    }
  },
);

export const createRecipeSlice = createSlice({
  name: 'createRecipe',
  initialState: {
    status: 'idle',
    loading: false,
    recipe: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createRecipe.pending, state => {
        state.loading = true;
      })
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.loading = false;
        state.recipe = action?.payload;
      });
  },
});

export const createRecipeSelector = state => state.createRecipe.recipe;
export const loadingrecipeUsersIdSelector = state => state.createRecipe.loading;

export default createRecipeSlice.reducer;
