import { Route, Routes } from "react-router";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
