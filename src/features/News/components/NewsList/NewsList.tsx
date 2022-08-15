import { Spinner } from "../../../../components/Spinner/Spinner";
import { useGetNews } from "../../api/useGetNews";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./newsList.module.css";
import { v4 as uuidv4 } from "uuid";

export function NewsList() {
  const { data, isLoading } = useGetNews();
  return (
    <div className={styles.container}>
      <h2> Latest News</h2>
      <article>
        {isLoading ? <Spinner /> : null}
        {data?.map((item) => {
          return (
            <NewsItem
              key={uuidv4()}
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
