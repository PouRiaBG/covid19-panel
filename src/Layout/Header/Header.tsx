import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styles from "./header.module.css";
export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.searchBox}>
        <Input
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
          className={styles.input}
          bordered={false}
        />
      </div>
      <div className={styles.account}>Account</div>
    </header>
  );
}
