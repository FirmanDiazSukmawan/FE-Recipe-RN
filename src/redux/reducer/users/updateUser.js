/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';
import {Alert} from 'react-native';

export const updateUsers = createAsyncThunk(
  'users/updateUsers',
  async ({users_id, data, selectedImage}) => {
    // console.log(data);

    const formDataToSend = new FormData();
    formDataToSend.append('username', data?.username);
    formDataToSend.append('phone_number', data?.phone_number);
    formDataToSend.append('image', {
      name: selectedImage?.fileName,
      type: selectedImage?.type,
      uri: selectedImage?.uri,
    });
    // console.log(formDataToSend);

    try {
      const response = await axios.put(
        `${API_RECIPE}/users/${users_id}`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      // console.log(response);

      return response?.data;
    } catch (error) {
      Alert.alert('Error updating Profile');
      console.log(error);
    }
  },
);

export const updateUsersSlice = createSlice({
  name: 'updateUsers',
  initialState: {
    status: 'idle',
    loading: false,
    users: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateUsers.pending, state => {
        state.loading = true;
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action?.payload;
      })
      .addCase(updateUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = action?.payload;
      });
  },
});

export const updateUsersSelector = state => state.updateUsers.users;

export default updateUsersSlice.reducer;
