import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

import { AiOutlineArrowLeft } from "react-icons/ai"

import { Form } from "./styles";

import toast from "react-hot-toast";
import { SmallButton } from "../../components/Button/styles";

const ReviewProduct = () => {

  const ProductVerified = () => {
    toast.success("Produto avaliado!")
  }

  return(
    <>
      <Header />
      <Main>
        <div>
          <SmallButton><AiOutlineArrowLeft size={40} onClick={() => console.log("Oi")} /></SmallButton> 
          <h1>Avaliar produto</h1>
        </div>
        <Form>
          <input type="text" placeholder="Nome do Produto"/>
          <input type="number" placeholder="Quantidade"/>
          <input type="text" placeholder="Número da NF"/>
          <Button onClick={() => ProductVerified()}>Avaliar produto!</Button>
        </Form>
      </Main>
      <Footer />
    </>
  )
}

export default ReviewProduct;