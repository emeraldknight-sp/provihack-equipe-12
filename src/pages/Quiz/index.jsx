import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lifes from "../../components/Lifes";
import ErrorRadios from "../../components/FormRadioButton";
import { GameDiv, QuizDiv, LeftDiv, RightDiv, Title, WordDiv } from "./styles";
import { questions } from "./questions/questions";
import Button from "@mui/material/Button";

const Quiz = () => {
  const [pergunta, setPergunta] = useState("");
  const [lifes, setLifes] = useState(3);
  const [acertos, setAcertos] = useState(0);
  const [reiniciar, setReiniciar] = useState(false);
  const navigate = useNavigate();

  function definirPergunta() {
    const posicao = Math.floor((Math.random() * questions.length));
    const perguntaSelecionada = questions[posicao];
    setPergunta(perguntaSelecionada);
    setLifes(3);
    setAcertos(0);
    setReiniciar(false);
  }

  function definirProximaPergunta() {
    const posicao = Math.floor((Math.random() * questions.length));
    const perguntaSelecionada = questions[posicao];
    setPergunta(perguntaSelecionada);
  }

  useEffect(() => {
    if (lifes === 0) {
      alert(`Acabaram suas vidas! Por favor tente novamente.`)
      setReiniciar(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lifes]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pergunta])

  return (
    <>
      <Header />
      <QuizDiv>
        <Title>
          <h1>
            Quiz
          </h1>
          <p>
            <b>
              Instruções:
            </b>
            Clique no botão iniciar para começar o jogo e teste seus conhecimentos sobre reciclagem e energia renovavel. Tome cuidado, só é permitido errar 2 vezes.
          </p>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" onClick={() => navigate('/games')} variant="outlined">
            Escolher outro jogo
          </Button>
        </Title>
        <GameDiv>
          <LeftDiv>
            {pergunta !== "" &&
              <h1>{pergunta.pergunta}</h1>
            }
            <Lifes
              lifes={lifes}
              defaultValue={3}
            />
            <p>{`Acertos consecutivos: ${acertos}`}</p>
          </LeftDiv>
          <RightDiv>
            <WordDiv>
              {(pergunta !== "" && !reiniciar) &&
                <ErrorRadios alternativas={pergunta.alternativas}
                  lifes={lifes}
                  setLifes={setLifes}
                  definirProximaPergunta={definirProximaPergunta}
                  acertos={acertos}
                  setAcertos={setAcertos}
                />
              }
            </WordDiv>
            {pergunta === "" &&
              // <button onClick={definirPergunta
              // }>Iniciar</button>
              <Button sx={{ mt: 1, mr: 1 }} type="submit" onClick={definirPergunta} variant="outlined">
                Iniciar
              </Button>
            }
            {reiniciar &&
              <Button sx={{ mt: 1, mr: 1 }} type="submit" onClick={definirPergunta} variant="outlined">
                Jogar Novamente
              </Button>
              // <button onClick={definirPergunta
              // }>Jogar Novamente</button>
            }
          </RightDiv>
        </GameDiv>
      </QuizDiv>
      <Footer />
    </>
  );
};

export default Quiz;
