import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Learn text", () => {
    render(<Home />); // ARANGE

    const myElem = screen.getByText("Learn"); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });

  it("should contain the text 'Examples'", () => {
    render(<Home />); // ARANGE

    const myElem = screen.getByText(/Examples/i); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });

  it("should have a heading", () => {
    render(<Home />); // ARANGE

    const myElem = screen.getByText("app/page.tsx"); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });
});
