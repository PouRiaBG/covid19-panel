import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export function UserDropdown() {
  const username = useAuthStore((state) => state.username);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Button icon={<LogoutOutlined />}>logout</Button>,
          onClick: () => {
            logout();
            navigate("/");
          },
        },
      ]}
    />
  );
  return (
    <Dropdown trigger={["click"]} overlay={menu}>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
        }}
      >
        <h4>Hello, {username}</h4>
        <DownOutlined />
      </div>
    </Dropdown>
  );
}
