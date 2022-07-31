import { Chart } from "../components/Chart/Chart";
import { Statistics } from "../components/Statistics/Statistics";
import styles from "./dashboard.module.css";

export function Dashboard() {
  return (
    <>
      <div className={styles.container}>
        <Statistics />
        <Chart />
      </div>
    </>
  );
}
