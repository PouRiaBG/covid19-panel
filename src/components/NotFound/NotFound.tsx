import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./notFound.module.css";

export function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h3>
        <>
          The address {pathname} that you entered does not exist please choose
          correct path
        </>
      </h3>
      <Button type="link" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}
