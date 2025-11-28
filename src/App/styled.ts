import styled, { css } from "styled-components";

export const Form = styled.form`
  border: 2px solid darkgrey;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
`;

export const Content = styled.div`
  font-size: 20px;
`;

export const Input = styled.input`
  max-width: 118px;
  font-weight: bold;
`;

export const Message = styled.p<{
  $incorrect?: Boolean;
}>`
  font-size: 28px;
  color: lightgreen;

  ${({ $incorrect }) =>
    $incorrect &&
    css`
      color: red;
    `}
`;
