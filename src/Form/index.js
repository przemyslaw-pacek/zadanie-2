import { useState } from "react";
import { Content, Input, Message, StyledForm } from "./styled";
import isPeselValid from "./isPeselValid";

function Form() {
  const [pesel, setPesel] = useState("");
  const [info, setInfo] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    isPeselValid(pesel)
      ? setInfo(<Message>Numer PESEL jest poprawny</Message>)
      : setInfo(<Message $incorrect>Numer PESEL jest niepoprawny</Message>);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <h1>Walidator numeru PESEL</h1>
      <Content>
        <Input
          type="text"
          inputMode="numeric"
          maxLength={11}
          minLength={11}
          value={pesel}
          onChange={({ target }) => setPesel(target.value.replace(/\D/g, ""))}
          placeholder="Wpisz PESEL"
        />
        <button>Sprawdź</button>
        {info}
      </Content>
    </StyledForm>
  );
}

export default Form;
