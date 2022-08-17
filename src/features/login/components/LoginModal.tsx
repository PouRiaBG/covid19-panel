import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./loginmodal.module.css";

export function LoginModal() {
  const navigate = useNavigate();
  const { mutate } = useMutation(async () => {
    return fetch("/login", { method: "POST" }).then((response) =>
      console.log({ response })
    );
  });

  const onFinish = (values: any) => {
    mutate(values);
  };
  return (
    <Modal
      title="Modal"
      visible={true}
      destroyOnClose={true}
      onCancel={() => navigate(-1)}
      footer={null}
      className={styles.testClass}
      wrapClassName={styles.testWrap}
    >
      <Form onFinish={onFinish}>
        <Form.Item name="username">
          <Input type="text" placeholder="username " />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
