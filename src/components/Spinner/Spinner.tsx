import styles from "./spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
}
