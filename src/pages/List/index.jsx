import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyHeadTable from "../../components/List";
import { Content, ListContent } from "./styles";
import { useNavigate } from "react-router-dom";


const List = () => {
  const navigate = useNavigate()

  function navegacao(link) {
    navigate(link)
  }

  return (
    <>
      <Header />
      <Content>
        <h1>Ranking ESG</h1>
        <span>Abaixo se encontra as companhias abertas com as melhores notas de ESG (sigla em inglês para Ambiental, Social e Governança) segundo a B3.</span>
        <ListContent>
          <StickyHeadTable />
        </ListContent>
      </Content>
      <Footer />
    </>
  );
};

export default List;
