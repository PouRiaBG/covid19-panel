import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "../App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthenticatedApp } from "../routes/AuthenticatedApp";

test("full app rendering", async () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      // ✅ no more errors on the console for tests
      error: process.env.NODE_ENV === "test" ? () => {} : console.error,
    },
  });
  //@ts-ignore
  const Wrapper = ({ children }) => (
    <BrowserRouter>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
  render(<AuthenticatedApp />, { wrapper: Wrapper });
  expect(screen.getByText(/casesyy/i)).toBeInTheDocument();
  screen.debug();
});
