import styles from "./sideBar.module.css";
import { Button } from "antd";
import { SettingOutlined, UserSwitchOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { useSideRoutes } from "@hooks/useSideRoutes";
import { NavLink } from "@components/NavLink/NavLink";

export function SideBar() {
  const ROUTES = useSideRoutes();
  return (
    <aside
      className={classnames({
        [styles.container]: true,
      })}
    >
      <div className={styles.list}>
        <div
          className={classnames({
            [styles.header]: true,
          })}
        >
          <h1>.Stats</h1>
        </div>
        <div
          className={classnames({
            [styles.items]: true,
          })}
        >
          {ROUTES.map((item) => {
            return (
              <NavLink
                className=""
                activeClass={styles.activeItem}
                key={item.path}
                pathname={item.path}
              >
                <div className={styles.desktopButtons}>
                  <Button icon={item.icon} type="text" size="large">
                    {item.name}
                  </Button>
                </div>

                <div className={styles.tabletButtons}>
                  <Button icon={item.icon} type="text" size="large" />
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div
        className={classnames({
          [styles.items]: true,
          [styles.desktopButtons]: true,
          [styles.footerItems]: true,
        })}
      >
        <NavLink activeClass={styles.activeItem} pathname="/F&Q">
          <Button icon={<UserSwitchOutlined />} type="text" size="large">
            F&Q
          </Button>
        </NavLink>
        <NavLink activeClass={styles.activeItem} pathname="/settings">
          <Button icon={<SettingOutlined />} type="text" size="large">
            Settings
          </Button>
        </NavLink>
      </div>
      <div
        className={classnames({
          [styles.items]: true,
          [styles.tabletButtons]: true,
          [styles.footerItems]: true,
        })}
      >
        <NavLink activeClass={styles.activeItem} pathname="/F&Q">
          <Button icon={<UserSwitchOutlined />} type="text" size="large" />
        </NavLink>
        <NavLink activeClass={styles.activeItem} pathname="/settings">
          <Button icon={<SettingOutlined />} type="text" size="large" />
        </NavLink>
      </div>
    </aside>
  );
}
