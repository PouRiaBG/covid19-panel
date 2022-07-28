import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      this is layout
      <Outlet />
    </div>
  );
}

export { Layout };
