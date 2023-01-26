import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import MovieControl from "./MovieControl";

//what is supposed to be in the card, which is image, title
const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <Card sx={{ display: "flex", m: 1 }}>
        <CardMedia
          component="img"
          sx={{ width: 220 }}
          image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        {/* Movie  */}
        <MovieControl type={type} display />
      </Card>
    </div>
  );
};

export default MovieCard;
