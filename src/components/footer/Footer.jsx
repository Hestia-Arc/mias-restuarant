import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import React from "react";

const LinkBox = styled(Box)({
  width: '200px',
  // border: '1px solid #fff'
})

const LinkTitle = styled(Typography)({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  opacity: 0.5,
  fontSize: '0.8rem'
})

// .global-footer-sublist__item-title {
//   font-weight: bold;
//   height: 24px;
//   margin-bottom: 16px;
//   opacity: 0.5;
//   text-transform: uppercase;
// }
function Footer() {
  return (
    <Box
      sx={{
        height: "30rem",
        background: "#000",
        color: "#fff",
        padding: "3rem 5rem",
      }}
    >
      <Box sx={{ height: "300px",
      //  border: "1px solid #fff"
       }}>
        <Stack direction='row' justifyContent='space-between' sx={{height: '100%'}}>

          {/* link 1 */}
          <Box>
            <Stack justifyContent='space-between' sx={{height: '100%'}}>
              <Typography variant="h5">Mia's Kitchen</Typography>
              <Box>
              <Typography>Phone: +234 703 444 5550</Typography>
              <Typography>Email: info.mias@gmail.com</Typography>
              <Typography>9, opp White hall street, Ibadan, Oyo state.</Typography>

              </Box>
            </Stack>
          </Box>

          {/* link 2 */}
          <LinkBox>
            <Stack spacing={2}>
              <LinkTitle>quick links</LinkTitle>
              <Typography>Home</Typography>
              <Typography>About us</Typography>
              <Typography></Typography>

            </Stack>
          </LinkBox>


          {/* link 3 */}
          <LinkBox>
            <Stack>
              <LinkTitle>community</LinkTitle>
              <Box></Box>
            </Stack>
          </LinkBox>


          {/* link 4 */}
          <LinkBox>
            <Stack>
              <LinkTitle>Help</LinkTitle>
              <Box></Box>
            </Stack>
          </LinkBox>
        </Stack>
      </Box>

      {/* <Divider variant='horizontal' /> */}
      <hr style={{ margin: "2rem 0", background: '#ccc' }} />
      <Box>
        <Typography color='#555'>&copy; 2023 Mia's kitchen. All Rights Reserved</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
