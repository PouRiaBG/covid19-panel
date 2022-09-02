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
import { Select } from "antd";
import { useState } from "react";
import { countries } from "../../../constant/countries";
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

const { Option } = Select;
export function Vaccine() {
  const [input, setInput] = useState("Turkey");
  const [days, setDays] = useState(15);
  const {
    data: dataSet,
    isSuccess,
    isFetching,
  } = useQuery(
    ["vaccine", input, days],
    async () => {
      return fetch(
        `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${input}?lastdays=${days}&fullData=false`
      )
        .then((res) => res.json())
        .then((data) => data);
    },
    {
      enabled: Boolean(input),
    }
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

  return (
    <div className={styles.container}>
      <h1>Vaccine stats</h1>
      <p>
        {input} in {days} days ago
      </p>
      <div className={styles.options}>
        <Select
          showSearch
          style={{ width: 200 }}
          value={input}
          defaultValue="turkey"
          placeholder="Search countries"
          onChange={(value) => setInput(value)}
        >
          {countries.map((country) => {
            return <Option value={country}>{country}</Option>;
          })}
        </Select>
        <Select
          showSearch
          style={{ width: 200 }}
          defaultValue={15}
          placeholder="Search countries"
          onChange={(value) => setDays(value)}
        >
          <Option value={5}>Last 5 days</Option>
          <Option value={10}>Lasy 10 days</Option>
          <Option value={15}>Last 15 days</Option>
          <Option value={30}>Last 30 days</Option>
        </Select>
      </div>
      <div className={styles.chartContainer}>
        {isFetching ? (
          <Spinner />
        ) : (
          //@ts-ignore
          <Line className={styles.chart} options={options} data={data} />
        )}
      </div>
    </div>
  );
}
