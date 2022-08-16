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
import { LoginModal } from "./features/login/components/LoginModal";
import { useLocation } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();

  let state = location.state as { backgroundLocation?: Location };
  console.log({ state });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="countries" element={<CountriesScreen />} />
            <Route path="vaccine" element={<VaccineScreen />} />
            <Route path="news" element={<NewsScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/login" element={<LoginModal />} />
          </Routes>
        )}
      </QueryClientProvider>
    </>
  );
}

export default App;
