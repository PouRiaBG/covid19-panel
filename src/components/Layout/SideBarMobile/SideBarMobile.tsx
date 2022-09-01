import {
  MenuOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useEffect, useState } from "react";
import { useSideRoutes } from "../../../hooks/useSideRoutes";
import styles from "./sidebarmobile.module.css";
import { NavLink, useLocation } from "react-router-dom";

export function SideBarMobile() {
  const [visible, setVisible] = useState(false);
  const ROUTES = useSideRoutes();
  const location = useLocation();

  useEffect(() => {
    setVisible(false);
  }, [location]);

  const onClose = () => {
    setVisible(false);
  };
  const onClickHandler = () => {
    setVisible(true);
  };
  return (
    <div className={styles.container}>
      <Button
        onClick={onClickHandler}
        className={styles.icon}
        size="large"
        icon={<MenuOutlined />}
      />
      <Drawer
        title="Sibar Menu"
        placement="left"
        onClose={onClose}
        visible={visible}
        drawerStyle={{
          width: "30rem",
        }}
      >
        <div className={styles.itemsContainer}>
          <div className={styles.items}>
            {ROUTES.map((item) => {
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? styles.activeItem : undefined
                  }
                >
                  <Button
                    disabled={item.isDisabled}
                    icon={item.icon}
                    type="text"
                    size="large"
                  >
                    {item.name}
                  </Button>
                </NavLink>
              );
            })}
          </div>

          <div className={styles.items}>
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeItem : undefined
              }
              to="F&Q"
            >
              <Button icon={<UserSwitchOutlined />} type="text" size="large">
                F&Q
              </Button>
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeItem : styles.test
              }
              to="settings"
            >
              <Button icon={<SettingOutlined />} type="text" size="large">
                Settings
              </Button>
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
