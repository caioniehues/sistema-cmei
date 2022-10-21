import createTheme from "@mui/material/styles/createTheme";

const colors = {
  primary: "#27607F",
  secondary: "#0185CC",
};

let theme = createTheme();
theme = createTheme(theme, {
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#0185CC",
          boxShadow: "0 2px 3px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s",
          overflow: "hidden",
          color: "#fff",
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginTop: "3.5rem",
          },
          [theme.breakpoints.up("sm")]: {
            justifyContent: "space-between",
            paddingTop: "1rem",
            whiteSpace: "nowrap",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          alignItems: "flex-end",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          margin: "0.5rem 0",
          borderRadius: "0.25rem",
          background: "#fff",
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
        },
        head: {
          height: "2rem",
          margin: "0rem 0 -0.5rem 0 !important",
          background: "#f5f5f5",
          boxShadow: "none !important",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          flex: 5,
          position: "relative",
          padding: "0.5rem",
          border: "none !important",
          zIndex: 1000,
        },
        paddingCheckbox: {
          flex: 1,
        },
        head: {
          fontWeight: "bold",
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;
