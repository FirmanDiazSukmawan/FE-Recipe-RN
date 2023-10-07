/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';

export const createLiked = createAsyncThunk(
  'liked/createLiked',
  async ({users_id, recipes_id}) => {
    try {
      const response = await axios.post(`${API_RECIPE}/liked/`, {
        users_id: users_id,
        recipes_id: recipes_id,
      });
    //   console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const createLikedSlice = createSlice({
  name: 'createLiked',
  initialState: {
    status: 'idle',
    loading: false,
    liked: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createLiked.pending, state => {
        state.loading = true;
      })
      .addCase(createLiked.fulfilled, (state, action) => {
        state.loading = false;
        state.liked = action?.payload;
      })
      .addCase(createLiked.rejected, (state, action) => {
        state.loading = false;
        state.liked = action?.payload;
      });
  },
});

export const createLikedSelector = state => state.createLiked.liked;
export const loadingLikedUsersIdSelector = state => state.createLiked.loading;

export default createLikedSlice.reducer;
