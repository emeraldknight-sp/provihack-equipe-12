import { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lifes from '../../components/Lifes';
import ErrorRadios from '../../components/FormRadioButton';
import { GameDiv, QuizDiv, InputDiv, LeftDiv, RightDiv, Title, WordDiv } from "./styles";
import { questions } from './questions/questions';

const Quiz = () => {
  const [pergunta, setPergunta] = useState("");
  const [tentativa, setTentativa] = useState("");
  const [lifes, setLifes] = useState(3);
  const [reiniciar, setReiniciar] = useState(false);

  function definirPalavra() {
    const posicao = Math.floor((Math.random() * questions.length));
    const perguntaSelecionada = questions[posicao];
    setPergunta(perguntaSelecionada);
    setLifes(3)
    setReiniciar(false)
  }

  async function submeterResposta(e) {
    e.preventDefault()
    if (tentativa === "") {
      return
    }
    const localLetras = pergunta;
    const temALetra = localLetras.letras.some((letra) => letra.letra === tentativa.toLowerCase());
    if (temALetra) {
      localLetras.letras.filter((letra) => {
        if (letra.letra === tentativa.toLowerCase()) {
          return letra.encontrada = true
        } else {
          return letra
        }
      })
      const finalizado = localLetras.letras.every((letra) => letra.encontrada === true);
      if (finalizado) {
        setReiniciar(true)
        alert("Parabens você venceu!!!")
      }
    } else {
      setLifes(lifes - 1)
    }

    setTentativa("")
  }


  useEffect(() => {
    if (lifes === 0) {
      alert(`Acabaram suas vidas! Por favor tente novamente.`)
      setReiniciar(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lifes])

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
          </LeftDiv>
          <RightDiv>
            <WordDiv>
              {(pergunta !== "" && !reiniciar) &&
                <ErrorRadios alternativas={pergunta.alternativas} />
              }
            </WordDiv>
            {pergunta === "" &&
              <button onClick={definirPalavra}>Iniciar</button>
            }
            {reiniciar &&
              <button onClick={definirPalavra}>Jogar Novamente</button>
            }
            {(pergunta !== "" && !reiniciar) && <InputDiv>

              <button onClick={submeterResposta}>Tentar</button>
            </InputDiv>
            }
          </RightDiv>
        </GameDiv>
      </QuizDiv>
      <Footer />
    </>
  );
};

export default Quiz;
