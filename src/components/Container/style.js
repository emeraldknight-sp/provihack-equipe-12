import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.centered ? "space-around" : "space-between"};
  align-items: center;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  z-index: 1;
`