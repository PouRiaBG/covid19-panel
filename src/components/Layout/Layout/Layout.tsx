import { Outlet } from "react-router";
import { SideBar } from "../SideBar/SideBar";
import styles from "./layout.module.css";
import { Header } from "../Header/Header";
function Layout() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.main}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
