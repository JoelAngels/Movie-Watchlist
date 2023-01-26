import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllWatchedMovies } from "../addMovie/moviesSlice";
import MovieGrid from "../../components/MovieGrid";

import React from "react";
import Message from "../../components/Message";

const WatchedMovies = () => {
  //dispatch an actions so that movies can be added to our watchlist

  const watchedMovies = useSelector(selectAllWatchedMovies);

  return (
    <Container fixed>
      <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
        Watched Movies
      </Typography>
      {watchedMovies.length > 0 ? (
        <>
          <MovieGrid movies={watchedMovies} type="watched" />
        </>
      ) : (
        <>
          <Message title={"Please Add Your Watched Movie Here"} />
        </>
      )}
    </Container>
  );
};

export default WatchedMovies;
