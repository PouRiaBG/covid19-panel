import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";
import {
  ViewedNews,
  NewsHeader,
  NewsList,
} from "../../features/News/components";
import { useScreen } from "../../hooks/useScreen";
import styles from "./newsScreen.module.css";

export function NewsScreen() {
  const { isMobile } = useScreen();
  return (
    <ErrorBoundary>
      <div className={styles.container}>
        {isMobile ? null : <NewsHeader />}
        <section className={styles.articles}>
          <NewsList />
          {isMobile ? null : <ViewedNews />}
        </section>
      </div>
    </ErrorBoundary>
  );
}
