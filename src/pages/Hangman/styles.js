import styled from "styled-components";


export const HangmanDiv = styled.div`
  height:80vh;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`

export const Title = styled.div`
  font-size: 36px;
  margin-bottom:52px;
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

  h1{
    font-size:20px;
    margin-bottom:16px;
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
  height:20px;
  width:20px;
  border:1px solid black;
  border-radius:4px;
  margin:1px;
  display:flex;
  justify-content:center;
  `
export const InputDiv = styled.div`
  display:flex;
  margin-top:16px;
  
  input{
    width:16px;
    margin:0 8px;
    text-align:center;
  }
`