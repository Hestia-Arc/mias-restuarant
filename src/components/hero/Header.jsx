import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { theme } from "../../theme/theme";

const StyledText = styled(Typography)({
  fontSize: "0.8rem",
});
function Header() {
  return (
    <header
      style={{
        height: "5rem",
        position: "fixed",
        top: "20px",
        left: "0px",
        right: "0px",
        zIndex: "999",
        color: "#fff",
        padding: "0.5rem 5rem",
        background: "rgba(12, 11, 9, 0.6)",
        borderBottom: "1px solid rgba(12, 11, 9, 0.6)",
        transition: "all 0.5s",
      }}
    >
      <nav
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "120px",
            border: "1px solid ",
            borderColor: theme.palette.secondary.main,
            borderRadius: "30px",
            padding: "5px 1rem",
          }}
        >
          <Typography
            color="secondary"
            sx={{ fontSize: "20px", fontWeight: 700 }}
          >
            Mia's
          </Typography>
          <span style={{ fontSize: "12px" }}>Kitchen</span>
        </Stack>

        <Stack direction="row" justifyContent="center" spacing={8}>
          <StyledText>Home</StyledText>
          <StyledText>Menu</StyledText>
          <StyledText>About</StyledText>
          <StyledText>Order</StyledText>
          <StyledText>Reservations</StyledText>
        </Stack>
      </nav>
    </header>
  );
}

export default Header;
