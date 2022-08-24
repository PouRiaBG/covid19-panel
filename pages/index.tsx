import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { useGetStats } from "@features/statistics/api/useGetStats";
import { Chart, Stats } from "@features/statistics/components";
import { useScreen } from "@hooks/useScreen";
import styles from "@styles/dashboard.module.css";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { request } from "@utils/request";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  const fetchStats = async () => {
    await request(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/all`);
  };
  await queryClient.prefetchQuery(["stats"], fetchStats);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function DashboardScreen() {
  const { data, isLoading, isSuccess } = useGetStats("stats");
  return (
    <>
      <ErrorBoundary>
        <div className={styles.container}>
          {isSuccess && <Stats data={data} isLoading={isLoading} />}
          {/* {isMobile ? null : <Chart />} */}
        </div>
      </ErrorBoundary>
    </>
  );
}
