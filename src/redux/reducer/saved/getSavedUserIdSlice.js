/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';

export const getSavedUserId = createAsyncThunk(
  'saved/getSavedUserId',
  async users_id => {
    try {
      const response = await axios.get(`${API_RECIPE}/saved/users/${users_id}`);
      //   console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getSavedUserIdSlice = createSlice({
  name: 'getSavedUserId',
  initialState: {
    status: 'idle',
    loading: false,
    saved: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSavedUserId.pending, state => {
        state.loading = true;
      })
      .addCase(getSavedUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.saved = action?.payload;
      })
      .addCase(getSavedUserId.rejected, (state, action) => {
        state.loading = false;
        state.saved = action?.payload;
      });
  },
});

export const getSavedUserIdSelector = state => state.getSavedUserId.saved;
export const loadingsavedUsersIdSelector = state =>
  state.getSavedUserId.loading;

export default getSavedUserIdSlice.reducer;
