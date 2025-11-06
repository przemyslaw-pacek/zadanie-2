import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  border: 2px solid darkgrey;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
`;

export const Content = styled.div`
  font-size: 20px;
`;

export const Input = styled.input`
  max-width: 120px;
  font-weight: bold;
`;

export const Message = styled.p`
  font-size: 28px;
  color: lightgreen;

  ${({ $incorrect }) =>
    $incorrect &&
    css`
      color: red;
    `}
`;
