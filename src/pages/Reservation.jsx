import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/hero/Header";
import img from '../assets/tables-rest.jpg'

function Reservation() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          height: "400px",
          backgroundColor: "#ccc",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {/* -------------overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2rem",
            color: '#fff'
          }}
        >
          <Typography variant="h2">Book a Table</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Reservation;
