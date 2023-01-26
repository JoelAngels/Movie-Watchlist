import React, { useState, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useGetMovieMutation } from "../../services/movieApi";
import MovieSearchResult from "../../components/MovieSearchResult";

const AddMovie = () => {
  const [query, setQuery] = useState("");

  const [getMovies, { data: movies }] = useGetMovieMutation();

  useEffect(() => {
    if (query) {
      //canot use async await in use effect
      fetchMovie();
    }
  }, [query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "570px",
          alignContent: "center",
          marginTop: "50px",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 540,
          }}
        >
          <InputBase
            sx={{
              m1: 1,
              flex: 1,
              marginLeft: "30px",
              // fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
            }}
            placeholder="Search Your Movie"
            value={query}
            onChange={handleSearch}
          />

          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <div className="results">
          {movies?.results?.length > 0 &&
            movies?.results?.map((movie) => (
              <MovieSearchResult key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
