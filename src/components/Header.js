import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              style={{ fontWeight: "700", marginLeft: "40px" }}
              sx={{ flexGrow: 1 }}
            >
              <Link to="/" style={{ fontSize: "32px" }}>
                Movie WatchList
              </Link>
            </Typography>

            {/* First Link */}
            <Link to="/">
              <Button
                color="inherit"
                font-family
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                WatchList
              </Button>
            </Link>

            {/* Second Link */}

            <Link to="/watched">
              <Button
                color="inherit"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Watched
              </Button>
            </Link>

            {/* Third Link */}
            <Link to="/addMovie">
              <Button
                color="inherit"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Add
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
