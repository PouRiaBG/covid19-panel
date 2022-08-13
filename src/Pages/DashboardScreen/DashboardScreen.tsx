import { Chart, Stats } from "../../features/Statistics/components";
import { useScreen } from "../../hooks/useScreen";
import styles from "./dashboard.module.css";

export function DashboardScreen() {
  const { isMobile } = useScreen();
  return (
    <>
      <div className={styles.container}>
        <Stats />
        {isMobile ? null : <Chart />}
      </div>
    </>
  );
}
