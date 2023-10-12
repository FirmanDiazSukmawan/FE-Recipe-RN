/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_RECIPE} from '@env';
import axios from 'axios';


export const createSaved = createAsyncThunk(
  'saved/createSaved',
  async ({users_id, recipes_id}) => {
    try {
      const response = await axios.post(`${API_RECIPE}/saved/`, {
        users_id: users_id,
        recipes_id: recipes_id,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const createSavedSlice = createSlice({
  name: 'createSaved',
  initialState: {
    status: 'idle',
    loading: false,
    saved: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createSaved.pending, state => {
        state.loading = true;
      })
      .addCase(createSaved.fulfilled, (state, action) => {
        state.loading = false;
        state.saved = action?.payload;
      })
      .addCase(createSaved.rejected, (state, action) => {
        state.loading = false;
        state.saved = action?.payload;
      });
  },
});

export const createSavedSelector = state => state.createSaved.saved;
export const loadingSavedUsersIdSelector = state => state.createSaved.loading;

export default createSavedSlice.reducer;
