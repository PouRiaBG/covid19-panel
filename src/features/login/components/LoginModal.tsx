import { Button, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./loginmodal.module.css";

export function LoginModal() {
  const navigate = useNavigate();
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
      <Input type="text" placeholder="username " />

      <Input.Password placeholder="password" />
      <Button>Login</Button>
    </Modal>
  );
}
