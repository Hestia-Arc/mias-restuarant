import React from "react";
import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Reservation from "./pages/Reservation";

function App() {
  // Cuisine D’Amour
  // Mia's kitchen

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <CssBaseline />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </Box>
  );
}

export default App;
