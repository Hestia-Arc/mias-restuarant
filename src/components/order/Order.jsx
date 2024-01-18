import {
  Box,
  Button,
  Input,
  InputBase,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Order() {
  return (
    <Box sx={{ height: "400px", background: "#ccc" }}>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          padding: "2rem 0rem 2rem 5rem",
          // border: "1px solid red",
        }}
      >
        <Stack sx={{ width: "100%", height: "100%" }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Ready to Eat?
          </Typography>
          <Typography>
            Get fresh and delicious meals at our doorstep in a jiffy!
          </Typography>

          <form>
            <Stack
              spacing={2}
              sx={{
                height: "150px",
                width: "70%",
                //  border: "1px solid red"
              }}
              mt={5}
            >
              <TextField sx={{ height: "50px" }} />
              <Button
                variant="contained"
                color="primary"
                sx={{ fontSize: "0.9rem" }}
              >
                see the menu
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Box>
  );
}

export default Order;
