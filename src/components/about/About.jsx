import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React from "react";
// import Imgs from "../../assets/story1.jpg";
import Imgss from "../../assets/about-2.jpg";
import Underline from "../../UI/Underline";
import { theme } from "../../theme/theme";


const StyledText = styled(Typography)({
  fontSize: "0.8rem",
  opacity: 0.8,
})


function About() {
  return (
    <Box
      sx={{
        height: "580px",
        background: "grey",
        backgroundImage: `url(${Imgss})`,
        backgroundPosition: "100% 74%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "end",
        position: "relative",
      }}
      // mb={5}
    >

      {/* --------------STRIPE */}
      <Box
        sx={{
          position: "absolute",
          top: "25rem",
          left: 0,
          background: '#ccc',
          height: "70px",
          width: '45rem',
          borderRadius: "0px 10px 10px 0",
          zIndex: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-around',
        }}
      >
<StyledText>Innovative</StyledText>
<StyledText> Unique style</StyledText>
<StyledText>Convenient</StyledText>

      </Box>

      {/* --------------BUTTON */}
      <Box
        sx={{
          position: "absolute",
          top: "31rem",
          left: '7rem',
          height: "70px",
          width: '30rem',
          zIndex: 800,
        }}
      >
        <Button variant="contained" sx={{textTransform: 'capitalize'}}>Explore</Button>
      </Box>

      {/* -----------TEXTS */}
      <Stack
        // alignItems="center"
        sx={{
          minWidth: "350px",
          maxWidth: "450px",
          height: "90%",
          background: theme.palette.secondary.main,
          margin: "0 0 0 5rem",
          borderRadius: "10px 10px 0 0",
          color: "#fff",
          opacity: 0.8,
        }}
        p={3}
      >
        <Box sx={{}}>
          <Typography variant="h4">Mia's Kitchen</Typography>
          <StyledText sx={{color: '#ccc'}}>Your cuisine haven</StyledText>
          {/* <Box sx={{ width: "50%" }} mt={1}>
            {" "}
            <Underline />
          </Box> */}
        </Box>
        <StyledText mt={5} >
          At Mia's kitchen, our passion lies in crafting dishes that not only
          tantalize the taste buds but also evoke memories, inspire
          conversations, and leave a lasting impression.
        </StyledText>
        

        <StyledText mt={2} >
          We believe in usin the finest quality ingredients to ensure that every
          bite is a symphony of flavors
        </StyledText>
      </Stack>
    </Box>
  );
}

export default About;
