import { useEffect, useState } from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer";
import Lifes from '../../components/Lifes';
import { AttemptsDiv, GameDiv, HangmanDiv, InputDiv, LeftDiv, Letter, RightDiv, Title, WordDiv } from "./styles";
import { palavras } from './words/palavras';

const Hangman = () => {
  const [letras, setLetras] = useState("");
  const [palavra, setPalavra] = useState("");
  const [tentativa, setTentativa] = useState("");
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  const [lifes, setLifes] = useState(5);
  const [reiniciar, setReiniciar] = useState(false);

  function definirPalavra() {
    const posicao = Math.floor((Math.random() * palavras.length));
    const palavraSelecionada = palavras[posicao];
    setPalavra(palavraSelecionada.palavra)
    const letrasPalavra = palavraSelecionada.palavra.split("");
    const objetoLetras = [];
    setLetrasTentadas([])
    setLifes(5)
    letrasPalavra.forEach(letra => {
      objetoLetras.push({
        id: objetoLetras.length,
        letra: letra,
        encontrada: false
      })
    });
    setLetras({
      id: palavraSelecionada.id,
      significado: palavraSelecionada.significa,
      letras: objetoLetras
    })
    setReiniciar(false)
  }

  function handleTentativa(e) {
    setTentativa(e.target.value)
  }

  async function submeterTentativa(e) {
    e.preventDefault()
    if (tentativa === "") {
      return
    }
    if (letrasTentadas.some((iten) => iten === tentativa.toLowerCase())) {
      alert('Essa letra já foi utilizada!')
      setTentativa("")
      return
    }
    const localLetraTentadas = letrasTentadas;
    localLetraTentadas.push(tentativa.toLowerCase());
    setLetrasTentadas(localLetraTentadas)
    const localLetras = letras;
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
      alert(`Acabaram suas vidas! Por favor tente novamente. A palavra era ${palavra}`)
      setReiniciar(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lifes])

  return (
    <>
      <Header />
      <HangmanDiv>
        <Title>
          <h1>
            Jogo da Forca
          </h1>
          <p>
            <b>
              Instruções:
            </b>
            Clique no botão iniciar para começar o jogo e utilize o espaço para digitar a letra desejada e aperte o botão para confirmar sua escolha. Aproveite a dica ao lado para aumentar seu conhecimento sobre assuntos ligados a preservação ambiental. Tome cuidado para não perder todas as suas vidas. Não é utilizado acentos ou "ç" e não tem diferença entra letras maiúsculas ou minúsculas.
          </p>

        </Title>
        <GameDiv>
          <LeftDiv>
            {letras !== "" &&
              <h1>{`Dica: ${letras.significado}`}</h1>
            }
            <Lifes
              lifes={lifes}
              defaultValue={5}
            />
            <AttemptsDiv>
              <p>Letras tentadas: </p>
              {
                letrasTentadas.map((letra) => <span key={letra}>{letra}</span>)
              }
            </AttemptsDiv>
          </LeftDiv>
          <RightDiv>
            <WordDiv>
              {(letras !== "" && !reiniciar) && letras.letras.map((letra) => (
                <Letter key={letra.id}>
                  <span >{letra.encontrada ?
                    letra.letra :
                    " _ "}
                  </span>
                </Letter>
              ))
              }
            </WordDiv>
            {letras === "" &&
              <button onClick={definirPalavra}>Iniciar</button>
            }
            {reiniciar &&
              <button onClick={definirPalavra}>Jogar Novamente</button>
            }
            {(letras !== "" && !reiniciar) && <InputDiv>
              <label>Digite aqui sua tentativa:</label>
              <input type="text" maxLength={1} value={tentativa} onChange={handleTentativa} />
              <button onClick={submeterTentativa}>Tentar</button>
            </InputDiv>
            }
          </RightDiv>
        </GameDiv>
      </HangmanDiv>
      <Footer />
    </>
  );
};

export default Hangman;
