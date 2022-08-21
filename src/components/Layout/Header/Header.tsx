import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";
import { UserDropdown } from "../../Dropdown/UserDropdown";
import styles from "./header.module.css";
export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const openLoginModal = () => {
    navigate("/login", { state: { backgroundLocation: location } });
  };
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
          {isAuthenticated ? (
            <UserDropdown />
          ) : (
            <Button
              onClick={openLoginModal}
              className={styles.btn}
              shape="round"
            >
              Login
            </Button>
          )}
        </div>
        <div className={styles.avatar}>
          <Avatar size={44} icon={<UserOutlined />} />
        </div>
      </div>
    </header>
  );
}
