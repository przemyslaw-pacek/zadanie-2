import { useState } from "react";
import { Content, Input, Message, StyledForm } from "./styled";

function Form() {
  const [pesel, setPesel] = useState("");
  const [info, setInfo] = useState("");

  const validatePesel = (pesel) => {
    if (!/^\d{11}$/.test(pesel)) return false;

    const digits = pesel.split("").map(Number);
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const sum = weights.reduce((acc, v, i) => acc + v * digits[i], 0);
    const checksum = (10 - (sum % 10)) % 10;

    return checksum === digits[10];
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    validatePesel(pesel)
      ? setInfo(<Message>Numer PESEL jest poprawny</Message>)
      : setInfo(<Message $incorrect>Numer PESEL jest niepoprawny</Message>);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <h1>Walidator numeru PESEL</h1>
      <Content>
        <Input
          type="string"
          minLength={11}
          maxLength={11}
          value={pesel}
          onChange={({ target }) => setPesel(target.value)}
          placeholder="Wpisz PESEL"
        />
        <button>Sprawdź</button>
        {info}
      </Content>
    </StyledForm>
  );
}

export default Form;
