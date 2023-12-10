import { Box, Typography } from "@mui/material";
import React from "react";
import Imgs from "../../assets/story1.jpg";
import Imgss from "../../assets/story2.jpg";
import Underline from "../../UI/Underline";

function About() {
  return (
    <Box sx={{ height: "35.3rem" }}>
      <Box
        sx={{
          height: "600px",
          // border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            minHeight: "400px",
            maxHeight: "600px",
            minWidth: "300px",
            maxWidth: "320px",
            background: "grey",
            backgroundImage: `url(${Imgs})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>

        <Box
          sx={{
            minWidth: "350px",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 3rem",
          }}
        >
          <Box>
            <Typography variant="h3">Our Story</Typography>
            <Box sx={{ width: "140%" }} mt={1}>
              {" "}
              <Underline />
            </Box>
          </Box>
          <Typography mt={2}>
            At Mia's kitchen, our passion lies in crafting dishes that not only
            tantalize the taste buds but also evoke memories, inspire
            conversations, and leave a lasting impression.
          </Typography>
          <br />

          <Typography>
            We believe in usin the finest quality ingredients to ensure that
            every bite is a symphony of flavors
          </Typography>

          <br />

<Typography>
  
</Typography>
        </Box>

        <Box
          sx={{
            minHeight: "400px",
            maxHeight: "600px",
            minWidth: "300px",
            maxWidth: "320px",
            background: "grey",
            backgroundImage: `url(${Imgss})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default About;
