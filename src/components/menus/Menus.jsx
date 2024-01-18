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
        <Stack
          direction="row"
          justifyContent="center"
          spacing={3}
          mt={2}
          sx={{
            p: " 1rem",
            minHeight: "380px",
            // border: "1px solid cyan"
          }}
        >
          {children}
        </Stack>
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
  const [active, setActive] = useState(1);
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
      <Box
        sx={{
          width: "100%",
          height: "460px",
          color: "#fff",
          padding: "0 5rem",
          // border: "1px solid green",
        }}
      >
        <Box
          sx={{
            borderTop: 1,
            borderBottom: 1,
            borderColor: "rgba(35,34,35,1)",
            // background: "rgba(35,34,35,1)",
            // borderRadius: "30px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            // variant="scrollable"
            // scrollButtons
            // allowScrollButtonsMobile
            textColor="secondary"
            indicatorColor="text"
            centered
          >
            <Tab
              label={
                <Chip
                  label="rice-dishes"
                  color={active === 1 ? "secondary" : "text"}
                  onClick={() => {
                    setActive(1);
                  }}
                />
              }
              {...a11yProps(0)}
              sx={tabStyle}
            />
            <Tab
              label={
                <Chip
                  label="stews"
                  color={active === 2 ? "secondary" : "text"}
                  onClick={() => {
                    setActive(2);
                  }}
                />
              }
              {...a11yProps(1)}
              sx={tabStyle}
            />
            <Tab
              label={
                <Chip
                  label="soups"
                  color={active === 3 ? "secondary" : "text"}
                  // sx={{ color: active === 3 ? "" : "#fff" }}
                  onClick={() => {
                    setActive(3);
                  }}
                />
              }
              {...a11yProps(2)}
              sx={tabStyle}
            />
            <Tab
              label={
                <Chip
                  label="swallow"
                  color={active === 4 ? "secondary" : "text"}
                  onClick={() => {
                    setActive(4);
                  }}
                />
              }
              {...a11yProps(3)}
              sx={tabStyle}
            />
            <Tab
              label={
                <Chip
                  label="drinks"
                  color={active === 5 ? "secondary" : "text"}
                  // sx={{ color: active === 3 ? "" : "#fff" }}
                  onClick={() => {
                    setActive(5);
                  }}
                />
              }
              {...a11yProps(4)}
              sx={tabStyle}
            />
            <Tab
              label={
                <Chip
                  label="specials"
                  color={active === 6 ? "secondary" : "text"}
                  onClick={() => {
                    setActive(6);
                  }}
                />
              }
              {...a11yProps(5)}
              sx={tabStyle}
            />

            <Tab
              label={
                <Chip
                  label="best-delivered"
                  color={active === 7 ? "secondary" : "text"}
                  onClick={() => {
                    setActive(7);
                  }}
                />
              }
              {...a11yProps(6)}
              sx={tabStyle}
            />
            <Tab
              label={
                <Chip
                  label="lunch-box"
                  color={active === 8 ? "secondary" : "text"}
                  onClick={() => {
                    setActive(8);
                  }}
                />
              }
              {...a11yProps(7)}
              sx={tabStyle}
            />
          </Tabs>
        </Box>

        {/* --1 */}
        <CustomTabPanel value={value} index={0}>
          <MenuItem tag='White Rice' />
          <MenuItem tag='Fried Rice'/>
          <MenuItem tag=''/>
        </CustomTabPanel>

        {/* --2 */}
        <CustomTabPanel value={value} index={1}>
        <MenuItem tag='Beef stew' />
          <MenuItem tag='Fish stew' />
          <MenuItem tag='Garden-Egg stew'/>
        </CustomTabPanel>

        {/* --3 */}
        <CustomTabPanel value={value} index={2}>
        <MenuItem />
          <MenuItem />
          <MenuItem />
        </CustomTabPanel>

        {/* --4 */}
        <CustomTabPanel value={value} index={3}>
        <MenuItem />
          <MenuItem />
          <MenuItem />
        </CustomTabPanel>

         {/* --5 */}
         <CustomTabPanel value={value} index={4}>
        <MenuItem />
          <MenuItem />
          <MenuItem />
        </CustomTabPanel>

         {/* --6 */}
         <CustomTabPanel value={value} index={5}>
        <MenuItem />
          <MenuItem />
          <MenuItem />
        </CustomTabPanel>

         {/* --7 */}
         <CustomTabPanel value={value} index={6}>
        <MenuItem />
          <MenuItem />
          <MenuItem />
        </CustomTabPanel>

         {/* --8 */}
         <CustomTabPanel value={value} index={7}>
        <MenuItem />
          <MenuItem />
          <MenuItem />
        </CustomTabPanel>
      </Box>

      {/* -------------------- */}
      {/* background: "rgba(35,34,35,1)", */}

      <Box
        sx={{ height: "40px", borderTop: 1, borderColor: "rgba(35,34,35,1)" }}
      ></Box>
    </Box>
  );
}

export default Menus;
