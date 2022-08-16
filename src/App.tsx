import { Route, Routes } from "react-router";
import { DashboardScreen } from "./Pages/DashboardScreen";
import { VaccineScreen } from "./Pages/VaccineScreen/VaccineScreen";
import { NewsScreen } from "./Pages/NewsScreen";
import { SettingsScreen } from "./Pages/SetttingsScreen";
import { CountriesScreen } from "./Pages/CountriesScreen";

import { Layout } from "./components/Layout/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "antd/dist/antd.min.css";
import "./index.css";
import { NotFoundScreen } from "./Pages/NotFoundScreen/NotFoundScreen";

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
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
