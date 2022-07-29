import styles from "./sideBar.module.css";
import { Button } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  ExclamationCircleOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export function SideBar() {
  return (
    <aside className={styles.container}>
      <div className={styles.list}>
        <div className={styles.header}>
          <h1>.Stats</h1>
        </div>
        <ul>
          <li>
            <Link to="/">
              <Button
                icon={<BarChartOutlined />}
                type="text"
                size="large"
                style={{ fontSize: "1.2rem" }}
              >
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/countries">
              <Button
                style={{ fontSize: "1.2rem" }}
                icon={<AppstoreOutlined />}
                type="text"
                size="large"
                className={styles.button}
              >
                Countries
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/vaccine">
              <Button
                style={{ fontSize: "1.2rem" }}
                icon={<UserSwitchOutlined />}
                type="text"
                size="large"
              >
                Vaccine
              </Button>
            </Link>
          </li>
          <li>
            <Link to="news">
              <Button
                style={{ fontSize: "1.2rem" }}
                icon={<ExclamationCircleOutlined />}
                type="text"
                size="large"
                shape="round"
              >
                News
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.list}>
        <ul>
          <li>
            <Link to="F&Q">
              <Button
                style={{ fontSize: "1.3rem" }}
                icon={<UserSwitchOutlined />}
                type="text"
                size="large"
              >
                F&Q
              </Button>
            </Link>
          </li>
          <li>
            <Link to="settings">
              <Button
                style={{ fontSize: "1.3rem" }}
                icon={<SettingOutlined />}
                type="text"
                size="large"
              >
                Settings
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
