import { Chart, Stats } from "../../features/Statistics/components";
import styles from "./dashboard.module.css";

export function DashboardScreen() {
  return (
    <>
      <div className={styles.container}>
        <Stats />
        <Chart />
      </div>
    </>
  );
}
