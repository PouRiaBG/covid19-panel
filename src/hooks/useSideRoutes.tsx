import {
  BarChartOutlined,
  AppstoreOutlined,
  UserSwitchOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";

export const useSideRoutes = () => {
  const ROUTES = [
    {
      name: "Dashboard",
      path: "/",
      icon: <BarChartOutlined />,
      isDisabled: false,
    },

    {
      name: "Countries",
      path: "countries",
      icon: <AppstoreOutlined />,
      isDisabled: false,
    },
    {
      name: "News",
      path: "news",
      icon: <ExclamationCircleOutlined />,
      isDisabled: false,
    },
    {
      name: "Vaccine",
      path: "vaccine",
      icon: <UserSwitchOutlined />,
      isDisabled: false,
    },
    {
      name: "Test Yourself",
      path: "testcovid",
      icon: <EditOutlined />,
      isDisabled: true,
    },
  ];
  return ROUTES;
};
