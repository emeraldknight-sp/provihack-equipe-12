import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1{
    font-size:var(--fontsize-h1);
  }
`

export const BlockContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const StyledImage = styled.img`
  width: 400px;
  height: 200px;
  border: none;
  border-radius: 5px;
`

export const StyledGames = styled.section`
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    transition: transform 0.2s;
    height: 420px;

    h3 {
      width: 100%;
      text-align: center;
      font-size: var(--fontsize-h4);
      padding: 20px;
      border: 2px solid;
      border-radius: 35px;
    }

    div{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`

export const StyledInfos = styled.section`
    width:50%;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    transition: transform 0.2s;
    height: 420px;

    h3 {
      width: 100%;
      font-size: var(--fontsize-h5);
      padding: 20px;
      border: 2px solid;
      border-radius: 35px;
    }

    div{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`