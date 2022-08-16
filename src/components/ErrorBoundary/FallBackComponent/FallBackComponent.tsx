import { FallbackProps } from "react-error-boundary";
import styles from "./fallback.module.css";

export function FallBackComponent(props: FallbackProps) {
  const { error } = props;
  return (
    <div className={styles.container}>
      <h1>Somthing went wrong ...</h1>
      <p>{error.message}</p>
    </div>
  );
}
