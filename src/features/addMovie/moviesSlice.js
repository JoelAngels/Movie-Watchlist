import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchedMovies: [],
  watchListMovies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,

  reducers: {
    addMovieToWatchList(state, action) {
      state.watchListMovies.push(action.payload);
    },
  },
});

export const { addMovieToWatchList } = movieSlice.action;
export default movieSlice.reducer;
