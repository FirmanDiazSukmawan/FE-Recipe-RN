/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';

import {Alert} from 'react-native';

export const createComment = createAsyncThunk(
  'comment/createComment',
  async ({commen, users_id, recipes_id}) => {
    try {
      const response = await axios.post(`${API_RECIPE}/comment/`, {
        commen: commen,
        users_id: users_id,
        recipes_id: recipes_id,
      });
      // console.log(response);
      return response.data;
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  },
);

export const createCommentSlice = createSlice({
  name: 'createComment',
  initialState: {
    status: 'idle',
    loading: false,
    comment: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createComment.pending, state => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comment = action?.payload;
      })
      .addCase(createComment.rejected, (state, action) => {
        state.loading = false;
        state.comment = action?.payload;
      });
  },
});

export const createCommentSelector = state => state.createComment.comment;
export const loadingcommentUsersIdSelector = state =>
  state.createComment.loading;

export default createCommentSlice.reducer;
