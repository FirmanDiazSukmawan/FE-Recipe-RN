/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';
import {Alert} from 'react-native';

export const deleteComment = createAsyncThunk(
  'comment/deleteComment',
  async comment_id => {
    try {
      const response = await axios.delete(
        `${API_RECIPE}/comment/${comment_id}`,
      );
      // console.log(response.data);
      return response.data;
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  },
);

export const deleteCommentSlice = createSlice({
  name: 'deleteComment',
  initialState: {
    status: 'idle',
    loading: false,
    comment: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteComment.pending, state => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comment = state.comment.filter(item => item !== action.payload);
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.comment = action?.payload;
      });
  },
});

export const deleteCommentSelector = state => state.deleteComment.comment;
export const loadingDeleteCommentSelector = state =>
  state.deleteComment.loading;

export default deleteCommentSlice.reducer;
