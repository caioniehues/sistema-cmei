import { Snackbar as SnackbarMaterialUI, Alert } from "@mui/material";

const Snackbar = ({ isSuccess, isError, onClose, ...props }) => {
  return (
    <SnackbarMaterialUI
      open={isSuccess || isError}
      onClose={onClose}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <Alert
        severity={isSuccess ? "success" : "error"}
        elevation={2}
        style={{
          background: isSuccess ? "#388e3c" : "#d32f2f",
          color: "#fff",
        }}
      >
        {isSuccess
          ? "Informações salvas com sucesso"
          : "Ocorreu um erro ao salvar as informações"}
      </Alert>
    </SnackbarMaterialUI>
  );
};

export default Snackbar;
