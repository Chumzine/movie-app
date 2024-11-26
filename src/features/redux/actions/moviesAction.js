import { options } from '../../api/moviesAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (_, { rejectWithValue }) => {
  try {
    const data = await axios.request(options);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
 