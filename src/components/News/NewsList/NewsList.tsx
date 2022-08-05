import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./newsList.module.css";
import covidImage from "../../../assets/images/covid-image1.webp";

export function NewsList() {
  return (
    <div className={styles.container}>
      <h2> Latest News</h2>
      <article>
        <NewsItem
          title="WORLD"
          content="
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu
        "
          imgSrc={covidImage}
        />

        <NewsItem
          title="WORLD"
          content="
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu
        "
          imgSrc={covidImage}
        />

        <NewsItem
          title="WORLD"
          content="
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu
        "
          imgSrc={covidImage}
        />

        <NewsItem
          title="WORLD"
          content="
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu
        "
          imgSrc={covidImage}
        />

        <NewsItem
          title="WORLD"
          content="
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu
        "
          imgSrc={covidImage}
        />

        <NewsItem
          title="WORLD"
          content="
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu
        "
          imgSrc={covidImage}
        />
      </article>
    </div>
  );
}
