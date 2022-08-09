import {
  BarChartOutlined,
  AppstoreOutlined,
  UserSwitchOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

export const useSideRoutes = () => {
  const ROUTES = [
    {
      name: "Dashboard",
      path: "/",
      icon: <BarChartOutlined />,
    },

    {
      name: "Countries",
      path: "countries",
      icon: <AppstoreOutlined />,
    },

    {
      name: "Vaccine",
      path: "vaccine",
      icon: <UserSwitchOutlined />,
    },

    {
      name: "News",
      path: "news",
      icon: <ExclamationCircleOutlined />,
    },
  ];
  return ROUTES;
};
