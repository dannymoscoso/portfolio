import { createTheme } from "@mui/material/styles"

export let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#14ad47",
      // secondary: "#fda303",
    },
    background: {
      // default: "#010401",
      // paper: "#96a079",
    },
    text: {
      primary: "#FFF",
      secondary: "#fda303",
    },
    secondary: {
      main: "#167c8a",
    },
  },
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontFamily: "Tektur",
      fontSize: "3.5rem",
    },
    h2: {
      fontFamily: "Tektur",
      fontSize: "3rem",
      color: "#14ad47",
    },
    h3: {
      fontFamily: "Tektur",
      fontSize: "2.5rem",
      color: "#fda303",
    },
    h4: {
      fontFamily: "Tektur",
      fontSize: "2rem",
    },
    h6: {
      fontFamily: "Tektur",
    },
    h5: {
      fontFamily: "Tektur",
    },
    subtitle1: {
      fontFamily: "Tektur",
    },
    subtitle2: {
      fontFamily: "Tektur",
    },
    button: {
      fontFamily: "Tektur",
    },
    overline: {
      fontFamily: "Tektur",
    },
  },
  spacing: 15,
})
