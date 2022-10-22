import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#0185CC",
    },
    hands: {
      zIndex: 100,
      width: "100%",
      position: "absolute",
      bottom: 0,
    },

    form: {
      zIndex: 200,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: "25rem",
      margin: "1rem",
      padding: "2rem",
      borderRadius: "0.5rem",
      background: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.3)",
    },
    logo: {
      width: "10rem",
      alignSelf: "center",
      paddingBottom: "0.5rem",
    },
    link: {
      cursor: "pointer",
      textAlign: "center",
      textDecoration: "underline",
      color: "#444",
    },
  };
});

export default useStyles;
