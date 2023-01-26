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
  addMovieToWatchList,
  selectAllWatchListMovies,
} from "../features/addMovie/moviesSlice";

const MovieSearchResult = ({ movie }) => {
  const dispatch = useDispatch();

  const watchListMovies = useSelector(selectAllWatchListMovies);

  //find movie we are adding to the watchlist

  let storedMovies = watchListMovies.find((item) => item.id === movie.id);

  //disable the button

  const watchlistDisabled = storedMovies ? true : false;

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
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieSearchResult;
