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
  const { children } = props;
  return (
    <div className={styles.container}>
      <SideBarMobile />
      <SideBar />
      <div className={styles.main}>
        <Header />
        {children}
      </div>
    </div>
  );
}
