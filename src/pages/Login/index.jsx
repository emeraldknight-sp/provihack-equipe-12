import Input from "../../components/Input";
import Button from "../../components/Button";

import { useNavigate } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import { AnimationContainer, Container, Content } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import toast from "react-hot-toast";

import LoginImage from "../../assets/img/sidebar-img.svg";

const Login = ({authenticated, setAuthenticated}) => {

  const navigate = useNavigate();  

  const handleClick = (link) => {
    toast.success("Seja bem-vindo!")
    navigate(link)
  }

  // SCHEMA YUP
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório"),
  });

  // REGISTER + YUP-RESOLVER
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    resolver: yupResolver(schema) 
  });

  // FUNCTION ON -SUBMIT
  const onSubmit = (data) => {
    console.log("DATA ", data)

    api.post("/login", data)
      .then((response) => {
        const { accessToken, user } = response.data;
        console.log("RESPONSE ", response)

        localStorage.setItem("@Doit:token", JSON.stringify(accessToken));
        localStorage.setItem("@Doit:user", JSON.stringify(user));

        setAuthenticated(true);
        navigate("/profile");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (authenticated) {
    navigate("/profile");
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
            <Button type="submit" onClick={() => handleClick("/profile")}>Entrar</Button>
            <span> Já tem cadastro? <a href="/signup"> Clique aqui </a> </span>
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
