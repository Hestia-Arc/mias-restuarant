import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import hero from "../../assets/hero-large.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";
import { theme } from "../../theme/theme";

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
              // background: "brown",
              // height: "400px",
              width: "45%",
              // borderTopRightRadius: "200px",
              // borderBottomRightRadius: "200px",
              // position: "absolute",
              // top: '25%',
              // left: -20,
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
              width: "43%",
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
              <Typography sx={{fontSize: '0.8rem'}}>
                We imagine a world where there’s no such thing as a bad cup of
                coffee and all coffee farmers live prosperously.
                We imagine a world where there’s no such thing as a bad cup of coffee and all coffee farmers live prosperously.
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
          height: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          sx={{
            height: "10rem",
            // background: "#000",
            width: "80%",
            display: "flex",
          }}
        >
          <Box
            sx={{
              height: "100%",
              background: theme.palette.primary.main,
              width: "20%",
            }}
          ></Box>
          <Box
            sx={{
              height: "100%",
              width: "20%",
              border: "1px solid",
              borderColor: theme.palette.primary.main,
            }}
          ></Box>
          <Box
            sx={{
              height: "100%",
              width: "20%",
              border: "1px solid",
              borderColor: theme.palette.primary.main,
            }}
          ></Box>
          <Box
            sx={{
              height: "100%",
              width: "20%",
              border: "1px solid",
              borderColor: theme.palette.primary.main,
            }}
          ></Box>
        </Stack>
      </Box>
    </>
  );
}

export default Hero;
