import { Box, Stack, styled } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";



const StyledBox = styled(Box)({
  height: "5px",
  background: theme.palette.secondary.main,
  borderRadius: "10px",
});
function Underline() {
  return (
    <Stack direction="row" spacing={1} sx={{width: '80%'}}>
      <StyledBox sx={{width: '50%'}} />
      <StyledBox sx={{width: '30%'}}  />
      <StyledBox sx={{width: '5%'}} />
    </Stack>
  );
}

export default Underline;
