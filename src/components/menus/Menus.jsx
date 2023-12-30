import { Box, Stack, Typography, keyframes, styled } from "@mui/material";
import React, { useState } from "react";
// import Underline from "../../UI/Underline";
// import ab from "../../assets/about-2.jpg";
import aa from "../../assets/story2.jpg";
import { Outlet } from "react-router-dom";

// const specials = [aa, ab];
// const rice = [ab, aa];
// const swallows = [aa, ab];
// const soups = [aa, ab];
// const stews = [aa, ab];
// const drinks = [aa, ab];

// const fadeIn = keyframes`
// 0% {
//   opacity: 0;
// }
// 100% {
//   opacity: 1;
// }
// `;

const StyledMenu = styled(Typography)({
  fontSize: "6rem",
  color: '#fff',
  lineHeight: 1
});
// -------------------------
function Menus() {
  // const [menus, setMenu] = useState(specials);

  return (
    <Box sx={{ background: "rgba(0,0,0,.95)" }}>
      <Box sx={{ height: "150px" }}>
        {/* <Box>
          <Typography variant="h3" color="#fff">
            Menu
          </Typography>

          <Box sx={{ width: "18%" }}>
              {" "}
              <Underline />
            </Box>
        </Box> */}
      </Box>

      <Box sx={{ height: "34rem", display: "flex" }}>
        {/* ------------ */}

        {/* left */}
        <Box
          sx={{
            background: "rgba(35,34,35,1)",
            // backgroundImage: `linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.5)), url(${aa})`,
            // backgroundPosition: "50% 54%",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            width: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 15px 15px 0px",
          }}
        >
          {/* <Typography
            sx={{
              // translate(-197px, 10px)
              fontSize: '7rem',
              color: "#fff",
              transform: "rotate(-90deg)",
            }}
          >
            MENUS
          </Typography> */}
          <Stack alignItems="center">
            <StyledMenu>M</StyledMenu>
            <StyledMenu>E</StyledMenu>
            <StyledMenu>N</StyledMenu>
            <StyledMenu>U</StyledMenu>

          </Stack>
        </Box>

        {/* right */}
        <Box
          sx={{
            backgroundColour: "rgba(0,0,0,0.8)",
            flex: 2,
            padding: "0.8rem 2rem",
          }}
        >
          {/* menus */}
          <Outlet />
        </Box>
      </Box>

      <Box sx={{ height: "150px" }}></Box>
    </Box>
  );
}

export default Menus;

{
  /* <Box
sx={{
  position: "relative",
  height: "200px",
  width: "220px",
  // animation: `${fadeIn} 3000ms ease-in`
  // border: "1px solid blue",
  // marginLeft: '10px'
}}
>
<Box
  sx={{
    position: "absolute",
    bottom: 0,
    height: "120px",
    width: "250px",
    background: theme.palette.secondary.main,
    opacity: 0.88,
    borderRadius: "0 0 10rem 10rem",
    boxShadow: "1px 1px 20px 5px #777",
    // clipPath: "ellipse(67% 100%  at 8% 50%)",
  }}
></Box>
<img
  src={menu}
  alt="icon"
  style={{
    height: "220px",
    width: "220px",
    borderRadius: "50%",
    position: "absolute",
    top: "-38px",
    left: "15px",
  }}
/>
</Box> */
}
