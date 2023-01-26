import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToWatched,
  addMovieToWatchList,
  selectAllWatchedMovies,
  selectAllWatchListMovies,
} from "../features/addMovie/moviesSlice";

const MovieSearchResult = ({ movie }) => {
  const dispatch = useDispatch();

  const watchListMovies = useSelector(selectAllWatchListMovies);
  const watchedMovies = useSelector(selectAllWatchedMovies);

  //find movie we are adding to the watchlist

  let storedMovies = watchListMovies.find((item) => item.id === movie.id);

  //if we add movie into watched, the watchlist button should still be disabled
  let storedMoviesWatched = watchedMovies.find((item) => item.id === movie.id);

  //disable the button

  const watchlistDisabled = storedMovies
    ? true
    : storedMoviesWatched
    ? true
    : false;

  //if you click on add to watched, both buttons with be disabled to avoid duplication

  const watchedDisabled = storedMoviesWatched ? true : false;

  return (
    <Card sx={{ display: "flex", height: 170, m: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title.substring(0, 25)}
          </Typography>

          <Typography color="text.secondary" component="div">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </Typography>

          <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
            <Button
              variant="contained"
              disabled={watchlistDisabled}
              onClick={() => dispatch(addMovieToWatchList(movie))}
            >
              Add To WatchList
            </Button>

            <Button
              variant="contained"
              disabled={watchedDisabled}
              onClick={() => dispatch(addMovieToWatched(movie))}
            >
              Add To Watched
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieSearchResult;

/*both movies cannot be in watched and watchlist at the same time, they all need to be at one places or the other, 
 
  //if you click on add to watched, both buttons with be disabled to avoid duplication
*/
