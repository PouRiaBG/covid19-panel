import { Button, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";
import { useLoginUser } from "../api/useLoginUser";
import { Username } from "../types";
import styles from "./loginmodal.module.css";
import { notification } from "antd";

type NotificationType = "success" | "error";

export function LoginModal() {
  const navigate = useNavigate();
  const setCredential = useAuthStore((state) => state.setCredential);

  const { mutate } = useLoginUser();

  const openNotificationWithIcon = (type: NotificationType) => {
    const notifMessages = {
      error: {
        message: "Login faild",
        description: "Somthing went wrong",
      },

      success: {
        message: "Login successed",
        description: "You have successfully logged in",
      },
    };
    notification[type]({
      message: notifMessages[type].message,
      description: notifMessages[type].description,
    });
  };

  const onFinish = (values: Username) => {
    mutate(
      { username: values.username },
      {
        onSuccess: (data) => {
          console.log({ data });
          openNotificationWithIcon("success");
          setCredential({
            isUser: true,
            username: data.username,
          });
          navigate(-1);
        },
        onError: () => {
          openNotificationWithIcon("error");
        },
      }
    );
  };

  return (
    <Modal
      title="Login modal"
      visible={true}
      destroyOnClose={true}
      onCancel={() => navigate(-1)}
      footer={null}
      className={styles.testClass}
      wrapClassName={styles.testWrap}
    >
      <Form onFinish={onFinish}>
        <Form.Item name="username">
          <Input
            required
            type="text"
            placeholder="username"
            className={styles.input}
          />
        </Form.Item>

        <Form.Item>
          <Button className={styles.btn} htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
