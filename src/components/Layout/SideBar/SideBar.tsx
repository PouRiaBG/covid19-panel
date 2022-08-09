import styles from "./sideBar.module.css";
import { Button } from "antd";
import { SettingOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useScreen } from "../../../hooks/useScreen";
import classnames from "classnames";
import { useSideRoutes } from "../../../hooks/useSideRoutes";
export function SideBar() {
  const { isDesktop, isTablet } = useScreen();
  const ROUTES = useSideRoutes();
  return (
    <aside
      className={classnames({
        [styles.container]: true,
        [styles.containerTablet]: isTablet,
      })}
    >
      <div className={styles.list}>
        <div
          className={classnames({
            [styles.header]: true,
            [styles.headerTablet]: isTablet,
          })}
        >
          <h1>.Stats</h1>
        </div>
        <div
          className={classnames({
            [styles.items]: true,
            [styles.itemsTablet]: isTablet,
          })}
        >
          {ROUTES.map((item) => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? styles.activeItem : undefined
                }
              >
                {isDesktop && (
                  <Button icon={item.icon} type="text" size="large">
                    {item.name}
                  </Button>
                )}

                {isTablet && (
                  <Button icon={item.icon} type="text" size="large" />
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div
        className={classnames({
          [styles.items]: true,
          [styles.itemsTablet]: isTablet,
        })}
      >
        {isDesktop && (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeItem : undefined
              }
              to="F&Q"
            >
              <Button icon={<UserSwitchOutlined />} type="text" size="large">
                F&Q
              </Button>
            </NavLink>
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
          </>
        )}

        {isTablet && (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeItem : undefined
              }
              to="F&Q"
            >
              <Button icon={<UserSwitchOutlined />} type="text" size="large" />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeItem : styles.test
              }
              to="settings"
            >
              <Button icon={<SettingOutlined />} type="text" size="large" />
            </NavLink>
          </>
        )}
      </div>
    </aside>
  );
}
