import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorBottom: {
        height: "50vh",
        backgroundColor: "#1b1f22",
      },
    },
    MuiButtonBase: {
      root: {
        backgroundColor: "orange",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "7px",
        },
        "*::-webkit-scrollbar-track": {
          background: "#040d21",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "orange",
          borderRadius: "20px",
          border: "3px solid orange",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#040d21",
    },
  },
});

export default theme;
