import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllWatchListMovies } from "../addMovie/moviesSlice";
import MovieGrid from "../../components/MovieGrid";
import Message from "../../components/Message";

const WatchListMovies = () => {
  //use selector reads data from the store
  const watchListMovies = useSelector(selectAllWatchListMovies);

  return (
    <Container fixed>
      <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
        My watchlist
      </Typography>
      {watchListMovies.length > 0 ? (
        <>
          <MovieGrid movies={watchListMovies} type="watchList" />
        </>
      ) : (
        <>
          <Message title={"Please Add Your Favourite Movies into WatchList"} />
        </>
      )}
    </Container>
  );
};

export default WatchListMovies;
