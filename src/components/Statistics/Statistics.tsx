import { PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Statistic } from "antd";
import styles from "./statistics.module.css";

export function Statistics() {
  const { data, isLoading } = useQuery(["countri"], async () => {
    return fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((finalData) => finalData);
  });
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
