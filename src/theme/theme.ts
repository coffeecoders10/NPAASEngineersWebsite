// theme/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { light: "#4D8DAE", main: "#20648A", dark: "#13425C" },
    secondary: { main: "#4D8DAE" },
    background: {
      default: "#F0F5F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#13425C",
      secondary: "#5A7A8A",
    },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "var(--font-poppins), sans-serif",
    h1: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 },
    h2: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 },
    h3: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 },
    h4: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600 },
    h5: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600 },
    h6: { fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 50,
          transition: "all 0.5s",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: "#787878",
          backgroundColor: "#F8F8F9",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
});
