import styles from "./newsItem.module.css";

interface IProps {
  content: string;
  title: string;
  imgSrc: string;
}

export function NewsItem(props: IProps) {
  const { content, title, imgSrc } = props;
  return (
    <div className={styles.container}>
      <img src={imgSrc} />
      <h3>{title}</h3>
      <h4>{content}</h4>
    </div>
  );
}
