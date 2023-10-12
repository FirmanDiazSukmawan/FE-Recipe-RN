/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';

export const getUsersId = createAsyncThunk(
  'users/getUsersId',
  async users_id => {
    try {
      const response = await axios.get(`${API_RECIPE}/users/${users_id}`);
      //   console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getUsersIdSlice = createSlice({
  name: 'getUsersId',
  initialState: {
    status: 'idle',
    loading: false,
    users: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsersId.pending, state => {
        state.loading = true;
      })
      .addCase(getUsersId.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action?.payload;
      })
      .addCase(getUsersId.rejected, (state, action) => {
        state.loading = false;
        state.users = action?.payload;
      });
  },
});

export const getUsersIdSelector = state => state.getUsersId.users;

export default getUsersIdSlice.reducer;
