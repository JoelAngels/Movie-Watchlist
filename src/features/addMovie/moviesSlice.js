import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    watchedMovies: [],
    watchListMovies: [],
  },

  reducers: {
    addMovieToWatchList(state, action) {
      state.watchListMovies.push(action.payload);
    },

    //First remove the movie from watchlist to watched section
    //watched the movie ?.. then move it to the watched section

    addMovieToWatched(state, action) {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchedMovies.push(action.payload);
    },

    removeMovieFromWatchList(state, action) {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },

    //if the move is in watched , the movie should go back to the watchlist
    moveToWatchList(state, action) {
      state.watchedMovies = state.watchedMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchListMovies.push(action.payload);
    },

    removeMovieFromWatched(state, action) {
      state.watchedMovies = state.watchedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const selectAllWatchListMovies = (state) => state.movies.watchListMovies;
export const selectAllWatchedMovies = (state) => state.movies.watchedMovies;

export const {
  addMovieToWatchList,
  addMovieToWatched,
  removeMovieFromWatchList,
  moveToWatchList,
  removeMovieFromWatched,
} = moviesSlice.actions;

export default moviesSlice.reducer;
