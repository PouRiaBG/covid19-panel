import { PlusOutlined } from "@ant-design/icons";
import { AllStats } from "@features/statistics/types";
import { Statistic } from "antd";
import styles from "./stats.module.css";

interface IProps {
  data: AllStats;
  isLoading: boolean;
}
export function Stats(props: IProps) {
  const { data, isLoading } = props;
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Statistic
            title="All Cases"
            value={data?.cases}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<PlusOutlined />}
            loading={isLoading}
          />
        </div>
        <div className={styles.card}>
          <Statistic
            title="Recovered"
            value={data?.recovered}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<PlusOutlined />}
            loading={isLoading}
          />
        </div>
        <div className={styles.card}>
          <Statistic
            title="Deaths"
            value={data?.deaths}
            precision={2}
            valueStyle={{ color: "red" }}
            prefix={<PlusOutlined />}
            loading={isLoading}
          />
        </div>
      </div>
    </>
  );
}
