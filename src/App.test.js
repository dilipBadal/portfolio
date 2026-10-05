import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
  window.scrollTo = jest.fn();
  window.matchMedia = jest.fn().mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() });
});
const renderPage = (path = "/") => render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);

test("uses system appearance, persists a choice, and keeps it across navigation", () => {
  window.matchMedia.mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });
  const view = renderPage();
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));
  expect(localStorage.getItem("portfolio-theme")).toBe("light");
  fireEvent.click(screen.getByRole("link", { name: "About" }));
  expect(screen.getByRole("heading", { name: /Engineering roots/ })).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
  view.unmount();
  renderPage();
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
});

test("shows ScoutLens with its documented description and app destination", () => {
  renderPage();
  expect(screen.getByRole("heading", { name: "ScoutLens" })).toBeInTheDocument();
  expect(screen.getByText(/Football scouting with role-based player rankings/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "ScoutLens — Visit app" })).toHaveAttribute("href", "https://scout-lense.vercel.app/");
  expect(screen.getByRole("img", { name: /Dilip Badal wearing/ })).toHaveAttribute("src", expect.stringContaining("Dilip Badal.png"));
});

test("copies the real contact address and reports success only after completion", async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
  renderPage("/contact");
  fireEvent.click(screen.getByRole("button", { name: "Copy address" }));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Email address copied."));
  expect(writeText).toHaveBeenCalledWith("workwithdilip1@gmail.com");
});

test("handles clipboard rejection without claiming success", async () => {
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: jest.fn().mockRejectedValue(new Error("Denied")) } });
  renderPage("/contact");
  fireEvent.click(screen.getByRole("button", { name: "Copy address" }));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Copy isn’t available"));
  expect(screen.getByRole("button", { name: "Copy address" })).toBeInTheDocument();
});
