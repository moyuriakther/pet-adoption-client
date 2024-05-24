import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EE9209",
    },
    secondary: {
      main: "#0968EE",
      dark: "red",
    },
    background: {
      default: "#EEEEEE", // Light Grey
    },
    info: {
      light: "#ffffff",
      main: "#A9A9A9",
      dark: "#000000",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
});
theme.shadows[1] = "0px 5px 22px lightgray";

// error: {
//     main: "#F44336",
//   },
//   warning: {
//     main: "#EE5A09",
//   },
//   info: {
//     main: "#09EEEE",
//   },
//   success: {
//     main: "#09EE63",
//   },
//   background: {
//     default: "#F5F5F5",
//   },
//   text: {
//     primary: "#333333",
//     secondary: "#757575",
//   },
