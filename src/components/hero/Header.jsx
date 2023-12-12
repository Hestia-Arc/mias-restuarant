import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";

const StyledText = styled(Typography)({
  fontSize: "0.8rem",
  opacity: 0.8,
  

  "a": {
    textDecoration: 'none',
    color: 'inherit',

    "&:active": {
      color: theme.palette.primary.main
    },

    "&:hover": {
      color: theme.palette.primary.main
    }
  }
});
function Header() {
  return (
    <header
      style={{
        height: "5rem",
        position: "absolute",
        top: "40px",
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
          <StyledText><Link to='/'>Home</Link></StyledText>
          <StyledText>Menu</StyledText>
          <StyledText>About</StyledText>
          <StyledText>Order</StyledText>
          <StyledText><Link to='/reservation'>Reservations</Link></StyledText>
        </Stack>
      </nav>
    </header>
  );
}

export default Header;
