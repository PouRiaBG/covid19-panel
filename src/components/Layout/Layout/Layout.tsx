import { SideBar } from "../SideBar/SideBar";
import styles from "./layout.module.css";
import { Header } from "../Header/Header";
import { useScreen } from "@hooks/useScreen";
import { ReactNode } from "react";
import { SideBarMobile } from "../SideBarMobile/SideBarMobile";
interface IProps {
  children: ReactNode;
}
export function Layout(props: IProps) {
  const { isMobile } = useScreen();
  const { children } = props;
  return (
    <div className={styles.container}>
      {/* {isMobile ? <SideBarMobile /> : <SideBar />} */}
      <SideBar />
      <div className={styles.main}>
        {isMobile ? null : <Header />}
        {children}
      </div>
    </div>
  );
}
