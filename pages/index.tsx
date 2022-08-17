import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { Chart, Stats } from "@features/statistics/components";
import { useScreen } from "@hooks/useScreen";
import styles from "@styles/dashboard.module.css";

export default function DashboardScreen() {
  const { isMobile } = useScreen();
  return (
    <>
      <ErrorBoundary>
        <div className={styles.container}>
          <Stats />
          {isMobile ? null : <Chart />}
        </div>
      </ErrorBoundary>
    </>
  );
}
