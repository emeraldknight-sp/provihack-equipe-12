import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  padding:20px 50px;
  display: flex;
  gap:20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1{
    font-size:var(--fontsize-h1);
  }

  span{
    font-size:20px;
  }
`

export const ListContent = styled.div`
  width: 50%;
  min-height: 80vh;
  padding:20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`