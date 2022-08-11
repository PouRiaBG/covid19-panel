import { useGetNews } from "../../api/useGetNews";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./newsList.module.css";

export function NewsList() {
  const { data } = useGetNews();
  return (
    <div className={styles.container}>
      <h2> Latest News</h2>
      <article>
        {data?.map((item: any) => {
          return (
            <NewsItem
              title={item.title}
              content={item.content}
              imgSrc={item.src}
            />
          );
        })}
      </article>
    </div>
  );
}
