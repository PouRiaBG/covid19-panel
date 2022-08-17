import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "../components";
import { LoginModal } from "../features/login/components/LoginModal";
import { CountriesScreen } from "../Pages/CountriesScreen";
import { DashboardScreen } from "../Pages/DashboardScreen";
import { NewsScreen } from "../Pages/NewsScreen";
import { NotFoundScreen } from "../Pages/NotFoundScreen/NotFoundScreen";
import { SettingsScreen } from "../Pages/SetttingsScreen";
import { VaccineScreen } from "../Pages/VaccineScreen";

export function AuthenticatedApp() {
  const location = useLocation();

  let state = location.state as { backgroundLocation?: Location };
  return (
    <>
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
    </>
  );
}
