import {
  ViewedNews,
  NewsHeader,
  NewsList,
} from "../../features/News/components";
import styles from "./newsScreen.module.css";

export function NewsScreen() {
  return (
    <div className={styles.container}>
      <NewsHeader />
      <section className={styles.articles}>
        <NewsList />
        <ViewedNews />
      </section>
    </div>
  );
}
