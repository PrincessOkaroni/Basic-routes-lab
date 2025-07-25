import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

// Utility to create a fresh router for each test
const renderWithRouter = (initialEntries = ["/"]) => {
  const router = createMemoryRouter(routes, { initialEntries });
  return render(<RouterProvider router={router} />);
};

test("renders 'Home Page' inside of an <h1>", () => {
  renderWithRouter();
  const h1 = screen.getByRole("heading", { level: 1 });
  expect(h1).toBeInTheDocument();
  expect(h1.textContent).toMatch(/Home Page/i);
});

test("Displays a list of movie titles", async () => {
  renderWithRouter();
  const titleList = await screen.findAllByRole("heading", { level: 2 });
  expect(titleList.length).toBeGreaterThan(2);
  expect(titleList[0].tagName).toBe("H2");
  expect(titleList[0].textContent).toBe("Doctor Strange");
});

test("Displays links for each associated movie", async () => {
  renderWithRouter();
  const linkList = await screen.findAllByText(/View Info/i);
  expect(linkList.length).toBeGreaterThan(2);

  const url = new URL(linkList[0].href);
  expect(url.pathname).toMatch(/^\/movie\/\d+$/);
});

test("renders the <NavBar /> component", () => {
  renderWithRouter();
  const navbar = document.querySelector(".navbar");
  expect(navbar).toBeInTheDocument();
});
