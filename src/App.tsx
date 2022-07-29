import { Route, Routes } from "react-router";
import { Dashboard } from "./Pages/Dashboard";
import { Layout } from "./components/Layout/Layout/Layout";

import { Countries } from "./Pages/Countries";
import "antd/dist/antd.css";

import "./index.css";
import { Vaccine } from "./Pages/Vaccine";
import { News } from "./Pages/News";
import { Settings } from "./Pages/Settings";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="countries" element={<Countries />} />
          <Route path="vaccine" element={<Vaccine />} />
          <Route path="news" element={<News />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
