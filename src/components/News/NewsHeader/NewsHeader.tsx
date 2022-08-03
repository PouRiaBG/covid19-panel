import styles from "./newsHeader.module.css";
import { NewsHeaderItem } from "../NewsHeaderItem/NewsHeaderItem";

export function NewsHeader() {
  return (
    <div className={styles.container}>
      <section>
        <NewsHeaderItem
          context="world"
          title="Lorem ipsum dolor sit amet. Et quam consequatur At architecto
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu"
          date="08:05PM - 2 min read"
        />
      </section>
      <section>
        <div style={{}}>
          <NewsHeaderItem
            context="iran"
            title="Lorem ipsum dolor sit amet. Et quam consequatur At architecto
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu"
            date="08:05PM - 2 min read"
          />
        </div>

        <div>
          <NewsHeaderItem
            context="span"
            title="Lorem ipsum dolor sit amet. Et quam consequatur At architecto
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu"
            date="08:05PM - 2 min read"
          />
        </div>
      </section>
    </div>
  );
}
