import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import Underline from "../../UI/Underline";

const StyledText = styled(Typography)({
  fontSize: "1.8rem",
  background: "none",
  color: "#fff",
});

function Menus() {
  return (
    <Box sx={{ height: "40rem", background: "#555" }} pt={8} pl={10} pb={8}>
      <Box>
        <Typography variant="h3" color="#fff">
          Menu
        </Typography>

        <Box sx={{ width: "18%" }}>
          {" "}
          <Underline />
        </Box>
      </Box>

      <Stack direction="row" sx={{ height: "95%" }} mt={4}>
        <Box sx={{ flex: 3 }}>
          <Stack spacing={3}>
            <StyledText>Specials</StyledText>
            <StyledText>Rice Dishes</StyledText>
            <StyledText>Swallows</StyledText>
            <StyledText>Soups</StyledText>
            <StyledText>Stews</StyledText>
            <StyledText>Drinks</StyledText>
          </Stack>
        </Box>
        <Box sx={{ flex: 8, background: "#fff" }}></Box>
      </Stack>
    </Box>
  );
}

export default Menus;
