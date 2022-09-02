import {
  BarChartOutlined,
  AppstoreOutlined,
  UserSwitchOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useAuthStore } from "../store/authStore";

export const useSideRoutes = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const ROUTES = [
    {
      name: "Dashboard",
      path: "/",
      icon: <BarChartOutlined />,
      isDisabled: false,
      isAdmin: false,
    },

    {
      name: "Countries",
      path: "countries",
      icon: <AppstoreOutlined />,
      isDisabled: false,
      isAdmin: false,
    },
    {
      name: "News",
      path: "news",
      icon: <ExclamationCircleOutlined />,
      isDisabled: false,
      isAdmin: false,
    },
    {
      name: "Vaccine",
      path: "vaccine",
      icon: <UserSwitchOutlined />,
      isDisabled: false,

      isAdmin: !isAuthenticated,
    },
    {
      name: "Test Yourself",
      path: "testcovid",
      icon: <EditOutlined />,
      isDisabled: true,
      isAdmin: !isAuthenticated,
    },
  ];
  return ROUTES;
};
