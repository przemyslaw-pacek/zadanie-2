import { useState } from "react";
import isPeselValid from "./isPeselValid";
import { Content, Form, Input, Message } from "./styled";

function App() {
  const [pesel, setPesel] = useState("");
  const [info, setInfo] = useState<React.ReactNode>("");

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    isPeselValid(pesel)
      ? setInfo(<Message>Numer PESEL jest poprawny</Message>)
      : setInfo(<Message $incorrect>Numer PESEL jest niepoprawny</Message>);
  };

  return (
    <Form onSubmit={onFormSubmit}>
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
    </Form>
  );
}

export default App;
