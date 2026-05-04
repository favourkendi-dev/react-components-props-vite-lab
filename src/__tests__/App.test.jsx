import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders blog name in header", () => {
  render(<App />);
  // The default data name in this lab is "Underreacted", not "Simpson's Blog"
  expect(screen.getByText("Underreacted")).toBeInTheDocument();
});

test("renders about section", () => {
  render(<App />);
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
});

test("renders articles", () => {
  render(<App />);
  // The first article's title is "Components 101", not "Getting Started with React"
  expect(screen.getByText("Components 101")).toBeInTheDocument();
});