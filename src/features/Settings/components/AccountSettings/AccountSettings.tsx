import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Divider, Input } from "antd";
import styles from "./account.module.css";

export function AccountSettings() {
  return (
    <div className={styles.container}>
      <Divider orientation="left">
        <h1>Account settings</h1>
      </Divider>

      <div className={styles.item}>
        <h2>Email Address</h2>
        <p>your email address is somthing</p>
      </div>
      <Divider />
      <div className={styles.item}>
        <h2>Change password</h2>

        <div className={styles.inputGroup}>
          <Input.Password
            className={styles.input}
            size="large"
            placeholder="Old password"
            iconRender={(visible) => {
              return visible ? <EyeOutlined /> : <EyeInvisibleOutlined />;
            }}
          />
          <Input.Password
            className={styles.input}
            type="password"
            placeholder="New password"
            iconRender={(visible) => {
              return visible ? <EyeOutlined /> : <EyeInvisibleOutlined />;
            }}
          />
        </div>
        <Button size="large" type="default">
          Change password
        </Button>
      </div>

      <Divider />
      <div className={styles.item}>
        <h2>Delete account</h2>
        <p>
          If you deactivate your account, your profile won't appear in its
          search results. However, your messages and comments will still be
          visible. So, if you deactivate account, what happens to messages?
          Well, all the messages you sent will still be visible to others.
        </p>
        <Button danger>Delete my account</Button>
      </div>
    </div>
  );
}
