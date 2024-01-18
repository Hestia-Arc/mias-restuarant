import {
  Box,
  Chip,
  Stack,
  Tab,
  Tabs,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
// import ab from "../../assets/about-2.jpg";
import aa from "../../assets/story2.jpg";
import MenuItem from "./MenuItem";

// const fadeIn = keyframes`
// 0% {
//   opacity: 0;
// }
// 100% {
//   opacity: 1;
// }
// `;

const StyledMenu = styled(Typography)({
  fontSize: "6rem",
  color: "#fff",
  lineHeight: 1,
});
// -------------------------
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabStyle = {
  color: "#777",
  textTransform: "capitalize",
};

// --------------------
function Menus() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background: "rgba(0,0,0,.95)", padding: "4rem 0" }}>
      <Box sx={{ height: "180px", padding: "0rem 5rem" }}>
        <Stack sx={{ width: "70%" }}>
          <Typography variant="h7" color="secondary" sx={{ fontWeight: 600 }}>
            OUR MENU
          </Typography>

          <Typography
            variant="h3"
            color="#fff"
            sx={{ fontWeight: 500, textTransform: "capitalize" }}
          >
            Menu to always tantalize <br /> your taste buds
          </Typography>
        </Stack>
      </Box>

      {/* -------------------TABS-------------- */}
      <Box sx={{ width: "100%", color: "#fff", padding: "0 5rem" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "rgba(35,34,35,1)",
            background: "rgba(35,34,35,1)",
            borderRadius: '30px'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="rice-dishes" {...a11yProps(0)} sx={tabStyle} />
            <Tab label="stews" {...a11yProps(1)} sx={tabStyle} />
            <Tab label="soups" {...a11yProps(2)} sx={tabStyle} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <MenuItem />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>

      {/* -------------------- */}
      {/* background: "rgba(35,34,35,1)", */}

      <Box sx={{ height: "150px" }}></Box>
    </Box>
  );
}

export default Menus;
