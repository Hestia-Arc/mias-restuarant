import React from "react";
import { Box, Button, Divider, Stack, Typography, styled } from "@mui/material";
import hero from "../../assets/hero-large.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";
import { theme } from "../../theme/theme";
import Under2 from "../../UI/Under2";

const StyledCard = ({tag, text}) => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      // sx={{ border: "1px solid black" }}
    >
      <Box>
        {/* <img /> */}
        <h3>ICON</h3>
      </Box>
      <Typography sx={{ fontSize: "0.8rem", fontWeight: 700 }}>
        <em>{tag}</em>
      </Typography>
      <Typography sx={{ fontSize: "0.8rem", textAlign: "center" }}>
        {text}
      </Typography>

      <Under2 />

      {/* <Button variant="contained" size="small" sx={{textTransform: 'capitalize'}}>Buy now</Button> */}
    </Stack>
  );
};

function Hero() {
  return (
    <>
      <Header />

      {/* ------------hero */}
      <Box
        sx={{
          height: "620px",
          backgroundColor: "#ccc",
          backgroundImage: `url(${hero})`,
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
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "2rem",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>

          <Box
            sx={{
              // background: theme.palette.primary.light,
              opacity: 0.7,
              height: "400px",
              borderTopLeftRadius: "200px",
              borderBottomLeftRadius: "200px",
              width: "48%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              spacing={3}
              sx={{
                // background: "rgba(12, 11, 9, 0.6)",
                height: "400px",
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <Typography variant="h4">Real food, fast & Delicious</Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                We imagine a world where there’s no such thing as a bad cup of
                coffee and all coffee farmers live prosperously. We imagine a
                world where there’s no such thing as a bad cup of coffee and all
                coffee farmers live prosperously.
              </Typography>
              <Stack direction="row" spacing={3}>
                <Button variant="contained" color="secondary">
                  order
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  // sx={{ color: "#fff" }}
                >
                  contact us
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* ------------------below fold */}
      <Box
        sx={{
          height: "25rem",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          sx={{
            // border: "1px solid blue",
            // height: "10rem",
            // background: "#000",
            width: "80%",
            display: "flex",
          }}
        >
          <StyledCard tag='Tantalizing the taste bud' text="At Mia's kitchen, our passion lies in crafting dishes that not only
        tantalize the taste buds and leave a lasting impression." />
          <Divider />
          <StyledCard tag='Fresh Ingredients' text="At Mia's kitchen, our passion lies in crafting dishes that not only
        tantalize the taste buds and leave a lasting impression." />
          <Divider />
          <StyledCard tag='Happy Clients' text="At Mia's kitchen, our passion lies in crafting dishes that not only
        tantalize the taste buds and leave a lasting impression."/>
        </Stack>
      </Box>
    </>
  );
}

export default Hero;
