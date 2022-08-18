import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { ViewedNews, NewsHeader, NewsList } from "@features/news/components";
import { useScreen } from "@hooks/useScreen";
import { useGetNews, useGetViewedNews } from "@features/news/api";
import styles from "./newsScreen.module.css";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { request } from "@utils/request";
import { Spinner } from "@components/Spinner/Spinner";

export default function NewsPage() {
  const { isMobile } = useScreen();
  const { data: newsData, isSuccess: isNewsSuccess } = useGetNews("news");
  const { data: viewedNews, isSuccess: isViewedSuccess } =
    useGetViewedNews("viewedNews");
  return (
    <ErrorBoundary>
      <div className={styles.container}>
        {isMobile ? null : <NewsHeader />}
        <section className={styles.articles}>
          {isNewsSuccess ? <NewsList data={newsData} /> : <Spinner />}
          {!isMobile && isViewedSuccess ? (
            <ViewedNews data={viewedNews} />
          ) : (
            <Spinner />
          )}
        </section>
      </div>
    </ErrorBoundary>
  );
}
export async function getStaticProps() {
  const queryClient = new QueryClient();
  const fetchNews = async () => {
    return await request("/news");
  };
  const fetchViewedNews = async () => {
    return await request("/mostViewed");
  };

  await queryClient.prefetchQuery(["news"], fetchNews);
  await queryClient.prefetchQuery(["viewedNews"], fetchViewedNews);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
