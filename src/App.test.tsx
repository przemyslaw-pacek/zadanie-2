import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App/App";

describe("Walidacja numeru PESEL", () => {
  test("poprawny numer PESEL zwraca komunikat pozytywny", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Wpisz PESEL/i);
    const button = screen.getByRole("button", { name: /Sprawdź/i });

    fireEvent.change(input, { target: { value: "00222900009" } });
    fireEvent.click(button);

    expect(screen.getByText(/poprawny/i)).toBeInTheDocument();
  });

  test("błędny numer PESEL (zła cyfra kontrolna)", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Wpisz PESEL/i);
    const button = screen.getByRole("button", { name: /Sprawdź/i });

    fireEvent.change(input, { target: { value: "44051401358" } });
    fireEvent.click(button);

    expect(screen.getByText(/niepoprawny/i)).toBeInTheDocument();
  });

  test("za krótki numer PESEL", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Wpisz PESEL/i);
    const button = screen.getByRole("button", { name: /Sprawdź/i });

    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.click(button);

    expect(screen.getByText(/niepoprawny/i)).toBeInTheDocument();
  });

  test("wpisanie liter zamiast cyfr", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Wpisz PESEL/i);
    const button = screen.getByRole("button", { name: /Sprawdź/i });

    fireEvent.change(input, { target: { value: "abcdefghijk" } });
    fireEvent.click(button);

    expect(screen.getByText(/niepoprawny/i)).toBeInTheDocument();
  });
});
