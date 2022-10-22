import { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

import Hands from "../../assets/png/Hands.png";
import Logo from "../../assets/png/Logo.png";

import useStyles from "./styles";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const schema = yup.object({
  username: yup.string().required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const xsBreakPoint = useMediaQuery("(max-width: 600px)");
  const { container, hands, form, logo, link } = useStyles();

  const status = "";

  const navigate = useNavigate();

  const defaultValues = { ...initialValues };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { clearErrors, formState, handleSubmit } = methods;
  const { errors } = formState;

  const onSubmit = useCallback((values) => {}, []);

  return (
    <Box className={container}>
      {xsBreakPoint ? null : <img src={Hands} className={hands} />}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          <img src={Logo} className={logo} />

          {status === "error" && (
            <Box className="error">
              Desculpe, ocorreu um erro ao fazer o login
            </Box>
          )}

          <TextField name="username" type="text" label="E-mail" />

          <TextField name="password" type="password" label="Senha" />

          <Button
            type="submit"
            variant="contained"
            size="large"
            style={{ margin: "1.5rem 0" }}
            onClick={() => clearErrors()}
            isLoading={isProcessing}
          >
            Entrar
          </Button>

          <Link className={link}>Esqueceu a senha?</Link>
        </form>
      </FormProvider>
    </Box>
  );
};

export default Login;
