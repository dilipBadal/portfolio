import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

test("renders the redesigned home hero", () => {
	window.scrollTo = jest.fn();

	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>,
	);

expect(
		screen.getByText(/I build sharp, cinematic digital experiences\./i),
	).toBeInTheDocument();
});
