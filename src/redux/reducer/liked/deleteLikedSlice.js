/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';
import Alert from 'react-native';

export const deleteLiked = createAsyncThunk(
  'liked/deleteLiked',
  async liked_id => {
    try {
      const response = await axios.delete(`${API_RECIPE}/liked/${liked_id}`);
      // console.log(response.data);
      return response.data;
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  },
);

export const deleteLikedSlice = createSlice({
  name: 'deleteLiked',
  initialState: {
    status: 'idle',
    loading: false,
    liked: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteLiked.pending, state => {
        state.loading = true;
      })
      .addCase(deleteLiked.fulfilled, (state, action) => {
        state.loading = false;
        state.liked = state.liked.filter(item => item !== action.payload);
      })
      .addCase(deleteLiked.rejected, (state, action) => {
        state.loading = false;
        state.liked = action?.payload;
      });
  },
});

export const deleteLikedSelector = state => state.deleteLiked.liked;
export const loadingLikedUsersIdSelector = state => state.deleteLiked.loading;

export default deleteLikedSlice.reducer;
