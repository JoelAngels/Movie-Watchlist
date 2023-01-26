import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import MovieControl from "./MovieControl";

//what is supposed to be in the card, which is image, title
const MovieCard = ({ movie, type }) => {
  //toggle icon to show up when hover in the card
  const [display, setDisplay] = useState("notdisplayed");

  const showIcon = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideIcon = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };
  return (
    <div className="movie-card">
      <Card sx={{ display: "flex", m: 1 }}>
        <div
          onMouseEnter={(e) => showIcon(e)}
          onMouseLeave={(e) => hideIcon(e)}
        >
          <CardMedia
            component="img"
            sx={{ width: 220 }}
            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          {/* Movie  */}
          <MovieControl type={type} display={display} />
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
