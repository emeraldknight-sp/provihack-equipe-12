import styled from "styled-components";


export const HangmanDiv = styled.div`

  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`

export const Title = styled.div`
  width:80%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  margin-bottom:52px;
  
  h1{
    font-size:2rem;
    margin-bottom:20px;
  }
  p{
    b{
      font-weight: bold;
      margin-right: 6px;
    }
  font-size:1rem;
  margin-bottom:24px;
  }
`

export const GameDiv = styled.div`
  display:flex;
  width:100%;
`

export const LeftDiv = styled.div`
  width:50%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  h1{
    text-align:center;
    width:80%;
    font-size:20px;
    margin-bottom:32px;
  }

  p{
    font-size:16px;
    margin-top:32px;
  }
`

export const RightDiv = styled.div`
  width:50%;
  display:flex;
  flex-direction: column;
  align-items:center;
  `

export const WordDiv = styled.div`
  display:flex;
`

export const AttemptsDiv = styled.div`
  display:flex;
  height:20px;
  margin-top:16px;


  span{
  margin-left:6px;
}
`

export const Letter = styled.div`
  cursor:text;

  border:1px solid black;
  border-radius:4px;
  margin:1px;
  padding:6px 12px;
  display:flex;
  justify-content:center;
  `
export const InputDiv = styled.div`
  display:flex;
  margin-top:16px;
  align-items:center;
  
  input{
    width:32px;
    height:32px;
    margin:0 8px;
    text-align:center;
  }
  `