import { Drawer } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IProps {
  visible: boolean;
  setVisible: any;
  children: any;
}
export function DrawerSide(props: IProps) {
  const { visible, children, setVisible } = props;
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Drawer
      title="Sibar Menu"
      placement="left"
      onClose={onClose}
      visible={visible}
      drawerStyle={{
        boxShadow: "none",
        width: "30rem",
      }}
      bodyStyle={{
        boxShadow: "none",
      }}
    >
      {children}
    </Drawer>
  );
}
