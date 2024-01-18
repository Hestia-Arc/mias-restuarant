import React from "react";
import aa from "../../assets/story2.jpg";
import { Box, Stack, Typography, keyframes, styled } from "@mui/material";

const StyledText = styled(Typography)({
  fontSize: "1.8rem",
  background: "none",
  color: "#fff",
});

const MenuItem = ({ tag }) => {
  return (
    <Box
      sx={{
        // border: "0.5px solid",
        // borderColor: "rgba(35,34,35,1)",
        // borderColor: theme.palette.secondary.main,
        height: "362px",
        width: "340px",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src={aa}
          style={{ height: "280px", width: "330px", borderRadius: "10px" }}
        />

        <Stack
          spacing={0.5}
          sx={{
            height: "65px",
            width: "98%",
            background: "rgba(35,34,35,1)",
            marginTop: "10px",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "28px",
          }}
        >
          <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
            {" "}
            {tag }
          </Typography>

          <Typography sx={{ fontSize: "0.62rem" }}>
            Rice dishes packed with healthy vegetables and spices
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default MenuItem;
