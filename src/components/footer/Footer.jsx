import {
  Box,
  Button,
  Divider,
  Input,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const LinkBox = styled(Box)({
  width: "200px",
  // border: '1px solid #fff'
});

const LinkTitle = styled(Typography)({
  fontWeight: "bold",
  textTransform: "uppercase",
  opacity: 0.5,
  fontSize: "0.8rem",
});

const StyledText = styled(Typography)({
  fontSize: "0.7rem",
});

const StyledHour = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid rgba(35,35,35,1)",
  paddingBottom: '3px'
});

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
      <Box
        sx={{
          height: "300px",
          //  border: "1px solid #fff"
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          {/* link 1 */}
          <Box>
            <Stack justifyContent="space-between" sx={{ height: "100%" }}>
              <Typography variant="h5">Mia's Kitchen</Typography>
              <Box>
                <StyledText>Phone: +234 703 444 5550</StyledText>
                <StyledText>Email: info.mias@gmail.com</StyledText>
                <StyledText>
                  9, opp White hall street, Ibadan, Oyo state.
                </StyledText>
              </Box>
            </Stack>
          </Box>

          {/* link 2 */}
          <LinkBox>
            <Stack spacing={2}>
              <LinkTitle>quick links</LinkTitle>
              <StyledText>Home</StyledText>
              <StyledText>About</StyledText>
              <StyledText>Menu</StyledText>
              <StyledText>Reservation</StyledText>
              <StyledText>Blog</StyledText>

            </Stack>
          </LinkBox>

          {/* link 3 */}
          <LinkBox>
            <Stack>
              <LinkTitle>opening hours</LinkTitle>
              <Stack spacing={2} mt={2}>
                {/* 1 */}
                <StyledHour>
                  <StyledText>Monday</StyledText>
                  <StyledText>9am - 11pm </StyledText>
                </StyledHour>

                {/* 2 */}
                <StyledHour>
                  <StyledText>Tuesday</StyledText>
                  <StyledText>9am - 11pm </StyledText>
                </StyledHour>

                {/* 3 */}
                <StyledHour>
                  <StyledText>Wednesday</StyledText>
                  <StyledText>9am - 11pm </StyledText>
                </StyledHour>

                {/* 4 */}
                <StyledHour>
                  <StyledText>Thursday</StyledText>
                  <StyledText>9am - 11pm </StyledText>
                </StyledHour>

                {/* 5 */}
                <StyledHour>
                  <StyledText>Friday</StyledText>
                  <StyledText>9am - 11pm </StyledText>
                </StyledHour>

                {/* 6 */}
                <StyledHour>
                  <StyledText>Saturday</StyledText>
                  <StyledText>9am - 11pm </StyledText>
                </StyledHour>

                {/* 7 */}
                <StyledHour>
                  <StyledText>Sunday</StyledText>
                  <StyledText>closed</StyledText>
                </StyledHour>
              </Stack>
            </Stack>
          </LinkBox>

          {/* link 4 */}
          <LinkBox>
            <Stack sx={{ height: "100%" }}>
              <LinkTitle>Newsletter</LinkTitle>
              <Stack justifyContent="space-between" sx={{ height: "100%" }}>
                {/* newsletter */}
                <Box mt={2}>
                  <StyledText>
                    Subscribe to our newsletter & get all promos{" "}
                  </StyledText>

                  <form>
                    <Stack spacing={2} mt={2}>
                      <input type="text" />
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
                      >
                        Subscribe
                      </Button>
                    </Stack>
                  </form>
                </Box>

                {/* socials */}
                <Box>
                  <StyledText>Follow us</StyledText>
                  <Stack direction="row" spacing={2}>
                    <Typography>F</Typography>
                    <Typography>I</Typography>
                    <Typography>T</Typography>
                    <Typography>Y</Typography>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </LinkBox>
        </Stack>
      </Box>

      {/* <Divider variant='horizontal' /> */}
      <hr style={{ margin: "2rem 0 1rem 0", background: "#ccc" }} />
      <Box>
        <StyledText color="#555">
          &copy; 2023 Mia's kitchen. All Rights Reserved
        </StyledText>
      </Box>
    </Box>
  );
}

export default Footer;
