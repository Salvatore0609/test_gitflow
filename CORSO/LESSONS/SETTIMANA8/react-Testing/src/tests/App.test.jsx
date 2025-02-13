// import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import App from "../App";

describe("looks for the h1 in the page", () => {
  it("mounts the h1 correctly", () => {
    // 1) monta il componente da testare
    render(<App />);
    // screen.debug();
    // 2) andiamo a cercare l'elemento tramite il suo contenuto testuale

    const heading = screen.getByText(/a simple react-test example/i);

    // 3) interazione non c'è --> SKIP
    // 4) verifica delle aspettative: verificare la presenza dell'elemento nel documento
    expect(heading).toBeInTheDocument();
  });

  it("checks for a gray border on the h1", () => {
    // 1) monta il componente da testare
    render(<App />);
    // screen.debug();
    // 2) andiamo a cercare l'elemento tramite il suo contenuto testuale

    const heading = screen.getByText(/a simple react-test example/i);

    // 3) interazione non c'è --> SKIP
    // 4) verifica delle aspettative: verificare la presenza dell'elemento nel documento
    expect(heading).toHaveStyle("border: 1px solid gray");
  });

  it("checks for a border-danger class on the h1", () => {
    render(<App />);
    const heading = screen.getByText(/a simple react-test example/i);

    expect(heading).toHaveClass("border-danger");
  });
});
