import styles from "./newsHeader.module.css";
import { NewsHeaderItem } from "../NewsHeaderItem/NewsHeaderItem";

export function NewsHeader() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.itemContainer}>
          <div style={{ width: "50%" }}>
            <h4 className={styles.info}>IRAN</h4>
            <h3 className={styles.info}>
              Lorem ipsum dolor sit amet. Et quam consequatur At architecto
              corporis ea itaque distinctio vel nobis architecto ut nostrum
              ipsum commod i repellendu
            </h3>
            <h4 className={styles.info}>08:05PM - 2 min read"</h4>j
          </div>
        </div>
      </section>
      <section>
        <NewsHeaderItem
          context="iran"
          title="Lorem ipsum dolor sit amet. Et quam consequatur At architecto
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu"
          date="08:05PM - 2 min read"
        />

        <NewsHeaderItem
          context="span"
          title="Lorem ipsum dolor sit amet. Et quam consequatur At architecto
            corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum
            commod  i repellendu"
          date="08:05PM - 2 min read"
        />
      </section>
    </div>
  );
}