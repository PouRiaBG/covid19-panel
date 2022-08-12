import { Avatar, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import styles from "./countries.module.css";
import { useGetCountries } from "../api/useGetCountries";
import { CountriesStats } from "../types";

const countries = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Cyprus",
  "Georgia",
  "Hong Kong",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Lebanon",
  "Macao",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "N. Korea",
  "Nepal",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "S. Korea",
  "Saudi Arabia",
  "Singapore",
  "Sri Lanka",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Turkey",
  "UAE",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
];
const columns: ColumnsType<CountriesStats> = [
  {
    title: "Flag",

    width: 100,
    dataIndex: "countryInfo",
    responsive: ["xxl", "xs"],
    render: (info) => {
      return (
        <span>
          <Avatar src={info.flag} shape="square" />
        </span>
      );
    },
  },
  {
    title: "Country",
    dataIndex: "country",
    width: 200,
  },
  {
    title: "Total cases",
    dataIndex: "cases",
    responsive: ["xs"],

    width: 200,
  },

  {
    title: "Total Deaths",
    dataIndex: "deaths",

    width: 200,
    responsive: ["xs"],
  },
  {
    title: "Today cases",
    dataIndex: "todayCases",

    width: 200,
    responsive: ["xxl", "xs", "xl"],
    render: (data) => {
      return (
        <span style={{ color: "#63B4A1 " }}>
          {data}

          <ArrowUpOutlined />
        </span>
      );
    },
  },

  {
    title: "Today Deaths",
    dataIndex: "todayDeaths",

    width: 200,
    responsive: ["xxl", "xs", "xl"],
    render: (data) => {
      return (
        <span style={{ color: "red" }}>
          {data}
          <ArrowDownOutlined />
        </span>
      );
    },
  },
  {
    width: 200,
    title: "Total Recovered",
    dataIndex: "recovered",
    responsive: ["xxl"],
  },
  {
    width: 200,
    title: "Active cases",
    dataIndex: "active",
    responsive: ["xxl"],
  },
];

export function Countries() {
  const { data: Countries, isLoading } = useGetCountries(countries);
  const tableHeight = window.innerHeight - 200;
  function isOdd(index: number) {
    return Boolean(index % 2);
  }
  return (
    <>
      <div className={styles.container}>
        <Table
          loading={isLoading}
          tableLayout="auto"
          scroll={{ y: tableHeight }}
          pagination={false}
          columns={columns}
          dataSource={Countries}
          rowClassName={(record, index) => {
            const isIndexOdd = isOdd(index);
            return isIndexOdd ? styles.oddRows : "";
          }}
        />
      </div>
    </>
  );
}
