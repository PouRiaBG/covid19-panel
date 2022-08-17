import styles from "./sideBar.module.css";
import { Button } from "antd";
import { SettingOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { useScreen } from "@hooks/useScreen";
import classnames from "classnames";
import { useSideRoutes } from "@hooks/useSideRoutes";
import Link from "next/link";
import { NavLink } from "@components/NavLink/NavLink";
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
                className=""
                activeClass={styles.activeItem}
                key={item.path}
                pathname={item.path}
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
        suppressHydrationWarning={true}
        className={classnames({
          [styles.items]: true,
          [styles.itemsTablet]: isTablet,
          [styles.footerItems]: true,
        })}
      >
        {isDesktop && (
          <>
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
          </>
        )}

        {isTablet && (
          <>
            <NavLink activeClass={styles.activeItem} pathname="/F&Q">
              <Button icon={<UserSwitchOutlined />} type="text" size="large" />
            </NavLink>
            <NavLink activeClass={styles.activeItem} pathname="/settings">
              <Button icon={<SettingOutlined />} type="text" size="large" />
            </NavLink>
          </>
        )}
      </div>
    </aside>
  );
}
