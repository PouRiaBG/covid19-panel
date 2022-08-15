import { Outlet } from "react-router";
import { SideBar } from "../SideBar/SideBar";
import styles from "./layout.module.css";
import { Header } from "../Header/Header";
import { useScreen } from "../../../hooks/useScreen";
import { SideBarMobile } from "../SideBarMobile/SideBarMobile";
function Layout() {
  const { isMobile } = useScreen();
  return (
    <div className={styles.container}>
      {isMobile ? <SideBarMobile /> : <SideBar />}
      <div className={styles.main}>
        {isMobile ? null : <Header />}
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
