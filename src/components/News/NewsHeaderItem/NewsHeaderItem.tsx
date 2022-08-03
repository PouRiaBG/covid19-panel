import styles from "./headerItem.module.css";

interface IProps {
  context: string;
  title: string;
  date: string;
  height?: number;
  width?: number;
}

export function NewsHeaderItem(props: IProps) {
  const { context, date, title, height, width } = props;

  return (
    <div className={styles.image}>
      <h4 className={styles.info}>{context.toUpperCase()}</h4>
      <h3 className={styles.info}>{title}</h3>
      <h4 className={styles.info}>{date}</h4>
    </div>
  );
}
