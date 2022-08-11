import { useGetViewedNews } from "../../api/useGetViewedNews";
import styles from "./news.module.css";
import { NewsCard } from "./NewsCard/NewsCard";

export function ViewedNews() {
  const { data } = useGetViewedNews();

  return (
    <div className={styles.container}>
      <h2>Most Viewed</h2>
      {data?.map((item: any) => {
        return (
          <NewsCard
            title={item.title}
            content={item.content}
            time={item.date}
            number={1}
          />
        );
      })}
    </div>
  );
}
