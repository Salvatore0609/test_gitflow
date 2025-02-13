import { fireEvent, render, screen } from "@testing-library/react";
import ToggleSection from "../components/ToggleSection";

describe("Toggle section functionality", () => {
  it("mounts the button correctly", () => {
    render(<ToggleSection />);
    const button = screen.getByText(/mostra sezione/i);

    expect(button).toBeInTheDocument();
  });

  //   it("has card hidden by default", () => {
  //     render(<ToggleSection />);
  //     const image = screen.queryByRole("img");

  //     expect(image).not.toBeInTheDocument();
  //   });
  it("has card hidden by default", () => {
    render(<ToggleSection />);
    const card = screen.queryByTestId("card-example");

    expect(card).not.toBeInTheDocument();
  });

  it("reveals the card after button click", () => {
    render(<ToggleSection />);

    const button = screen.getByText(/mostra sezione/i);

    fireEvent.click(button);

    const card = screen.queryByTestId("card-example");
    expect(card).toBeInTheDocument();
  });

  it("checks if button changes text after click", () => {
    render(<ToggleSection />);

    const button = screen.getByText(/mostra sezione/i);

    fireEvent.click(button);

    const buttonAfterClick = screen.getByText(/nascondi sezione/i);
    expect(buttonAfterClick).toBeInTheDocument();
  });
});
