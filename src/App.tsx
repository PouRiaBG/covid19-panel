import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "antd/dist/antd.min.css";
import "./index.css";
import { AuthenticatedApp } from "./routes/AuthenticatedApp";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthenticatedApp />
      </QueryClientProvider>
    </>
  );
}

export default App;
