import { Route, Routes } from "react-router";
import { Dashboard } from "./Pages/DashboardScreen";
import { Layout } from "./components/Layout/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Countries } from "./Pages/CountriesScreen";
import "antd/dist/antd.css";

import "./index.css";
import { Vaccine } from "./Pages/VaccineScreen";
import { News } from "./Pages/NewsScreen";
import { Settings } from "./Pages/SettingsScreen";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="countries" element={<Countries />} />
            <Route path="vaccine" element={<Vaccine />} />
            <Route path="news" element={<News />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
