import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchedMovies: [],
  watchListMovies: [],
};

const moviesSlice = createSlice({
  name: "movie",
  initialState,

  reducers: {
    addMovieToWatchList(state, action) {
      state.watchListMovies.push(action.payload);
    },
  },
});

export const selectAllWatchListMovies = (state) => state.movies.watchListMovies;

export const { addMovieToWatchList } = moviesSlice.actions;
export default moviesSlice.reducer;
