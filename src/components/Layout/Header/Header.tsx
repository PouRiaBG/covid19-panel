import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
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
      <div className={styles.account}>
        <div className={styles.info}>
          <Button className={styles.btn} shape="round">
            Login
          </Button>
        </div>
        <div className={styles.avatar}>
          <Avatar size={44} icon={<UserOutlined />} />
        </div>
      </div>
    </header>
  );
}
