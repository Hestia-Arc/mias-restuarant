import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#664228",
      light: '#9f7e67',
      contrastText: '#fff'
    },
    secondary: {
      main: '#666128',
      // main: '#284c66',
      contrastText: '#fff'
    },
    text: {
      main: 'rgba(35,34,35,1)',
      // main: '#284c66',
      contrastText: '#fff'
    }
  },
});
