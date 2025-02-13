import { fireEvent, render, screen } from "@testing-library/react";
import FetchComponent from "../components/FetchComponent";
import userEvent from "@testing-library/user-event";

describe("FetchComponent list functionality", () => {
  it("creates the empty list initially", () => {
    render(<FetchComponent />);

    const listItems = screen.queryAllByRole("listitem");

    expect(listItems).toHaveLength(0);
  });

  it("populates the list after the fetch is done, with 10 elements", async () => {
    render(<FetchComponent />);

    const listItemsAfterFetch = await screen.findAllByRole("listitem");

    expect(listItemsAfterFetch).toHaveLength(10);
  });

  it("returns 5 elements after searching 'le' ", async () => {
    render(<FetchComponent />);

    const inputField = screen.getByPlaceholderText(/cerca nome utente/i);

    fireEvent.change(inputField, { target: { value: "le" } });

    const listItemsAfterFetch = await screen.findAllByRole("listitem");

    expect(listItemsAfterFetch).toHaveLength(5);
  });

  it("returns 4 elements after searching 'en' ", async () => {
    render(<FetchComponent />);
    const user = userEvent.setup();

    const inputField = screen.getByPlaceholderText(/cerca nome utente/i);

    user.type(inputField, "en");

    const listItemsAfterFetch = await screen.findAllByRole("listitem");

    expect(listItemsAfterFetch).toHaveLength(4);
  });
});
