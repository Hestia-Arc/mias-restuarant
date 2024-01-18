import React from 'react'
import aa from "../../assets/story2.jpg";
import { Box, Stack, Typography, keyframes, styled } from "@mui/material";
import { Link } from "react-router-dom";



const StyledText = styled(Typography)({
  fontSize: "1.8rem",
  background: "none",
  color: "#fff",
});

const MenuItem = () => {
  return (
    <Box
      sx={{
        borderBottom: "0.5px solid",
        borderColor: "rgba(35,34,35,1)",
        // borderColor: theme.palette.secondary.main,
        height: "130px",
        width: "340px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={aa} style={{ height: "120px", width: "130px",borderRadius: '3px' }} />

        <Stack
        spacing={0.5}
          sx={{
            height: "90px",
            width: "230px",
            background: "rgba(35,34,35,1)",
            marginLeft: "-10px",
            color: "#fff",
            padding: "5px 13px"
          }}
        >
          <Typography sx={{fontSize: '0.9rem'}}> Rice dishes</Typography>

          <Typography sx={{fontSize: '0.62rem'}}>Rice dishes packed with healthy vegetables and spices</Typography>

          <Link to='./moremenu' style={{textDecoration: 'none'}}>
            <Typography color='secondary' sx={{fontSize: '0.62rem'}}> see more</Typography>
           </Link>
        </Stack>
      </Box>
    </Box>
  );
};


export default MenuItem