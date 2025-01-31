import axios from 'axios';
import { options } from '../../api/moviesAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchMovies = createAsyncThunk('movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.request(options);
      return data?.data?.Search;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });


export default fetchMovies;