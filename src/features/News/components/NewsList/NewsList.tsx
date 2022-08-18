import { Spinner } from "@components/Spinner/Spinner";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./newsList.module.css";
import { v4 as uuidv4 } from "uuid";
import { NewsListType } from "@features/news/types";

interface IProps {
  data: NewsListType;
}
export function NewsList(props: IProps) {
  const { data } = props;
  return (
    <div className={styles.container}>
      <h2> Latest News</h2>
      <article>
        {/* {isLoading ? <Spinner /> : null} */}
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
