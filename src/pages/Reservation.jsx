import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "../components/hero/Header";
import img from "../assets/tables-rest.jpg";

function Reservation() {
  return (
    <Box sx={{ minHeight: "600px", backgroundColor: "#333", color: "#ccc" }}>
      <Header />
      <Box
        sx={{
          height: "400px",
          backgroundColor: "#ccc",
          backgroundImage: `url(${img})`,
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
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2rem",
            color: "#fff",
          }}
        >
          <Stack alignItems="center">
            <Typography
              sx={{ fontSize: "0.65rem", textTransform: "uppercase" }}
            >
              Book your Table
            </Typography>
            <Typography variant="h2">Reservation</Typography>
          </Stack>
        </Box>
      </Box>

      {/* FORM */}
      <Stack alignItems="center" mt={10} mb={10} sx={{ padding: "0px 10rem" }}>
        <Box
          sx={{
            borderTop: "1px solid #444",
            borderBottom: "1px solid #444",
            height: "80px",
            width: "100%",
          }}
        ></Box>

        <Stack direction="row" alignItems='center' spacing={6} mt={10} sx={{ height: "460px" }}>
          {/* --------- */}
          <Stack
            spacing={2}
            sx={{
              //  border: "1px solid #222",
              height: "100%",
              width: "550px",
            }}
          >
            {/* NAME */}
            <Stack>
              <label>Name</label>
              <TextField variant="outlined" />
            </Stack>

            {/*  */}
            <Stack>
              <label>Email</label>
              <TextField variant="outlined" />
            </Stack>

            {/*  */}
            <Stack direction="row" spacing={3} sx={{width: '100%'}}>

            <Stack>
              <label>Number of Guests</label>
              <TextField variant="outlined" />
            </Stack>

            <Stack>
              <label>Phone</label>
              <TextField variant="outlined" />
            </Stack>
            </Stack>

            {/* DATE */}
            <Stack direction="row" justifyContent="space-between">
              <Stack>
                <label>Date</label>
                <TextField variant="outlined" />
              </Stack>

              <Stack>
                <label>Time</label>
                <TextField variant="outlined" />
              </Stack>
            </Stack>

            {/* BUTTON */}
            <Button variant="contained" size="large"  sx={{marginTop: '2rem !important', fontWeight: 600}}>book now</Button>
          </Stack>
          <Box
            sx={{
              border: "1px solid #444",
              height: "100%",
              width: "350px",
              backgroundColor: "#222",
            }}
          ></Box>
        </Stack>
      </Stack>

      {/* INFOS */}
      <Stack alignItems="center" mb={10} sx={{ padding: "0px 10rem" }}>
        <Box
          sx={{ border: "1px solid #222", height: "300px", width: "100%" }}
        ></Box>
      </Stack>

      {/* FOOTER */}
      <Box
        sx={{ height: "90px", backgroundColor: "#222", padding: "0px 10rem" }}
      >
        <Typography>Copyrights</Typography>
      </Box>
    </Box>
  );
}

export default Reservation;
