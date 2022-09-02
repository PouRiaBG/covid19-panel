import styles from "./sideBar.module.css";
import { Button } from "antd";
import { SettingOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useScreen } from "../../../hooks/useScreen";
import classnames from "classnames";
import { useSideRoutes } from "../../../hooks/useSideRoutes";
import { useAuthStore } from "../../../store/authStore";
export function SideBar() {
  const { isDesktop, isTablet } = useScreen();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
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
            if (item.isAdmin) return;
            return (
              <NavLink
                data-testid={item.name}
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? styles.activeItem : undefined
                }
              >
                {isDesktop && (
                  <Button
                    disabled={item.isDisabled}
                    icon={item.icon}
                    type="text"
                    size="large"
                  >
                    {item.name}
                  </Button>
                )}

                {isTablet && (
                  <Button
                    disabled={item.isDisabled}
                    icon={item.icon}
                    type="text"
                    size="large"
                  />
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
          [styles.footerItems]: true,
        })}
      >
        {isAuthenticated ? (
          <NavLink
            data-testid="Settings"
            className={({ isActive }) =>
              isActive ? styles.activeItem : styles.test
            }
            to="settings"
          >
            {isDesktop && (
              <Button icon={<SettingOutlined />} type="text" size="large">
                Settings
              </Button>
            )}

            {isTablet && (
              <Button icon={<SettingOutlined />} type="text" size="large" />
            )}
          </NavLink>
        ) : null}
      </div>
    </aside>
  );
}
