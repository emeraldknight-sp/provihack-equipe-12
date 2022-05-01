import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    background-color: var(--gray-3);
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
  }

  textarea {
    width: 400px;
    padding: 15px 20px;
  }
`