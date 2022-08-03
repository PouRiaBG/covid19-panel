import { News } from "../components/News/News/News";
import { NewsHeader } from "../components/News/NewsHeader/NewsHeader";
import { NewsList } from "../components/News/NewsList/NewsList";
import styles from "./newsScreen.module.css";

export function NewsScreen() {
  return (
    <div className={styles.container}>
      <NewsHeader />
      <section className={styles.articles}>
        <NewsList />
        <News />
      </section>
    </div>
  );
}
