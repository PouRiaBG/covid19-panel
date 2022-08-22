import styles from "./vaccine.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { Input } from "antd";
import { useState } from "react";
import { Spinner } from "../../../components/Spinner/Spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export function Vaccine() {
  const [input, setInput] = useState("");
  const { data: dataSet, isSuccess } = useQuery(
    ["test"],
    async () => {
      return fetch(
        `https://disease.sh/v3/covid-19/vaccine/coverage/countries/turkey?lastdays=15&fullData=false`
      )
        .then((res) => res.json())
        .then((data) => data);
    },
    { enabled: Boolean(input) }
  );

  const labels = isSuccess && Object.keys(dataSet?.timeline);
  const datas = isSuccess && Object.values(dataSet?.timeline);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: datas,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Vaccine stats</h2>
      <Input
        placeholder="Enter country name.."
        value={input}
        type="text"
        onChange={onChangeHandler}
        className={styles.searchInput}
      />

      {input}
      <div className={styles.chartContainer}>
        {/* {!input ? <h2>There is no data yet</h2> : null} */}
        {isSuccess ? (
          //@ts-ignore
          <Line className={styles.chart} options={options} data={data} />
        ) : null}
      </div>
    </div>
  );
}
