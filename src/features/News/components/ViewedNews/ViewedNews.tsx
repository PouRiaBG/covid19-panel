import styles from "./news.module.css";
import { NewsCard } from "./NewsCard/NewsCard";
import { v4 as uuidv4 } from "uuid";
import { ViewedNewsListType } from "@features/news/types";
interface IProps {
  data: ViewedNewsListType;
}
export function ViewedNews(props: IProps) {
  const { data } = props;
  return (
    <div className={styles.container}>
      <h2>Most Viewed</h2>
      {data?.map((item) => {
        return (
          <NewsCard
            key={uuidv4()}
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
