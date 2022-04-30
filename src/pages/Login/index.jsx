import Input from "../../components/Input";
import Button from "../../components/Button";

import { useNavigate } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import { AnimationContainer, Container, Content } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import { toast } from "react-toastify";

import LoginImage from "../../assets/img/sidebar-img.svg";

const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line no-unused-vars
    formState,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { accessToken, user } = response.data;

        localStorage.setItem("@Doit:token", JSON.stringify(accessToken));
        localStorage.setItem("@Doit:user", JSON.stringify(user));

        setAuthenticated(true);
        navigate("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (authenticated) {
    navigate("/dashboard");
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input
              label="Email"
              icon={FiMail}
              placeholder="Seu melhor email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              icon={FiLock}
              placeholder="Uma senha bem segura"
              register={register}
              name="password"
              error={errors.password?.message}
              type="password"
            />
            <Button type="submit" >Entrar</Button>
            <span> Já tem cadastro? <a href="/signup"> Clique aqui </a></span>
          </form>
        </AnimationContainer>
      </Content>
      <figure>
        <img src={LoginImage} alt="login" />
      </figure>
    </Container>
  );
}

export default Login;
