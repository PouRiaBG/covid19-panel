import { Route, Routes } from "react-router";
import { DashboardScreen } from "./Pages/DashboardScreen";

import { VaccineScreen } from "./Pages/VaccineScreen";
import { NewsScreen } from "./Pages/NewsScreen";
import { SettingsScreen } from "./Pages/SettingsScreen";
import { CountriesScreen } from "./Pages/CountriesScreen";

import { Layout } from "./components/Layout/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "antd/dist/antd.css";

import "./index.css";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="countries" element={<CountriesScreen />} />
            <Route path="vaccine" element={<VaccineScreen />} />
            <Route path="news" element={<NewsScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
