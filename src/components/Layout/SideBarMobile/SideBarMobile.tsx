import {
  MenuOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { NavLink } from "@components/NavLink/NavLink";
import { Button } from "antd";
import { useState } from "react";
import { useSideRoutes } from "@hooks/useSideRoutes";
import styles from "./sidebarmobile.module.css";
import { DrawerSide } from "@components/Drawer";

export function SideBarMobile() {
  const ROUTES = useSideRoutes();

  const [visible, setVisible] = useState(false);

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
      <DrawerSide setVisible={setVisible} visible={visible}>
        <div className={styles.itemsContainer}>
          <div className={styles.items}>
            {ROUTES.map((item) => {
              return (
                <NavLink
                  key={item.path}
                  pathname={item.path}
                  activeClass={styles.activeItem}
                >
                  <Button icon={item.icon} type="text" size="large">
                    {item.name}
                  </Button>
                </NavLink>
              );
            })}
          </div>
          <div className={styles.items}>
            <NavLink pathname="/F&Q" activeClass={styles.activeItem}>
              <Button icon={<UserSwitchOutlined />} type="text" size="large">
                F&Q
              </Button>
            </NavLink>
            <NavLink pathname="/settings" activeClass={styles.activeItem}>
              <Button icon={<SettingOutlined />} type="text" size="large">
                Settings
              </Button>
            </NavLink>
          </div>
        </div>
      </DrawerSide>
    </div>
  );
}
