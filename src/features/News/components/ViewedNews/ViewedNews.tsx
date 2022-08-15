import { Spinner } from "../../../../components/Spinner/Spinner";
import { useGetViewedNews } from "../../api/useGetViewedNews";
import styles from "./news.module.css";
import { NewsCard } from "./NewsCard/NewsCard";

export function ViewedNews() {
  const { data, isLoading } = useGetViewedNews();

  return (
    <div className={styles.container}>
      <h2>Most Viewed</h2>
      {isLoading ? <Spinner /> : null}
      {data?.map((item) => {
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
