import styles from "./news.module.css";
import { NewsCard } from "./NewsCard/NewsCard";
export function ViewedNews() {
  return (
    <div className={styles.container}>
      <h2>Most Viewed</h2>
      <NewsCard
        title="CORONAVIRUS"
        content="
        Lorem ipsum dolor sit amet. Et quam consequatur At architecto corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum commod i repellendu
      "
        time="May 20 - 8 min read"
        number={1}
      />

      <NewsCard
        title="CORONAVIRUS"
        content="
        Lorem ipsum dolor sit amet. Et quam consequatur At architecto corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum commod i repellendu
      "
        time="May 20 - 8 min read"
        number={1}
      />

      <NewsCard
        title="CORONAVIRUS"
        content="
        Lorem ipsum dolor sit amet. Et quam consequatur At architecto corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum commod i repellendu
      "
        time="May 20 - 8 min read"
        number={2}
      />

      <NewsCard
        title="CORONAVIRUS"
        content="
        Lorem ipsum dolor sit amet. Et quam consequatur At architecto corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum commod i repellendu
      "
        time="May 20 - 8 min read"
        number={3}
      />
    </div>
  );
}
