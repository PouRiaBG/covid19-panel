import { Divider, Radio } from "antd";
import classNames from "classnames";
import styles from "./preferences.module.css";

export function Preferences() {
  return (
    <div className={styles.container}>
      <Divider orientation="left">
        <h1> Preferences</h1>
      </Divider>
      <div className={styles.item}>
        <h2> Colors</h2>
        <Radio.Group
          className={styles.colorGroup}
          name="radiogroup"
          defaultValue={1}
        >
          <Radio.Button className={classNames(styles.btn, styles.blue)} />
          <Radio.Button className={classNames(styles.btn, styles.yellow)} />
          <Radio.Button className={classNames(styles.btn, styles.orange)} />
        </Radio.Group>
      </div>
      <Divider />

      <div className={styles.item}>
        <h2> Themes</h2>
      </div>
    </div>
  );
}
