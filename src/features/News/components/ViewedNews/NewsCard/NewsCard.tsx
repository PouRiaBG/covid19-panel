import styles from "./newsCard.module.css";
interface IProps {
  number: number;
  title: string;
  content: string;
  time: string;
}
export function NewsCard(props: IProps) {
  const { number, title, content, time } = props;
  return (
    <div className={styles.container}>
      <h3>#{number}</h3>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{content}</p>
        <h4>{time}</h4>
      </div>
    </div>
  );
}
