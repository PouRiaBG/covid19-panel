import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthenticatedApp } from "../routes/AuthenticatedApp";
import { ReactNode } from "react";

test("test routes ", async () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: process.env.NODE_ENV === "test" ? () => {} : console.error,
    },
  });
  const user = userEvent.setup();
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <BrowserRouter>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </BrowserRouter>
  );

  render(<AuthenticatedApp />, { wrapper: Wrapper });
  //check default route wich is /
  expect(screen.getByText(/cases/i)).toBeInTheDocument();

  // //check for /countries route
  // await user.click(screen.getByTestId("Countries"));
  // expect(screen.getByText(/Vaccine stats/i)).toBeInTheDocument();

  //check for /vaccine route
  await user.click(screen.getByTestId(/Vaccine/i));
  expect(screen.getByText(/Vaccine stats/i)).toBeInTheDocument();

  //check for /news route
  await user.click(screen.getByTestId(/News/i));
  expect(screen.getByText(/Latest News/)).toBeInTheDocument();

  //check for /settings route
  await user.click(screen.getByTestId(/Settings/i)!);
  expect(screen.getByText(/Colors/i)).toBeInTheDocument();
  screen.debug();
});
