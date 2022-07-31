import { Avatar, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import styles from "./countries.module.css";

interface DataType {
  key: React.Key;
  country: string;
  totalCase: number;
  newCase: string;
}
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
const columns: ColumnsType<DataType> = [
  {
    title: "Flag",
    dataIndex: "countryInfo",
    width: 100,
    render: (info) => {
      return (
        <span>
          {/* <img src={info.flag} /> */}
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
    width: 200,
  },

  {
    title: "Total Deaths",
    dataIndex: "deaths",
    width: 200,
  },
  {
    title: "Today cases",
    dataIndex: "todayCases",
    width: 200,
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
    title: "Total Recovered",
    dataIndex: "recovered",
    width: 200,
  },
  {
    title: "Active cases",
    dataIndex: "active",
  },
];

export function Countries() {
  const { data: Countries, isLoading } = useQuery(["countries"], async () => {
    return fetch(
      `https://disease.sh/v3/covid-19/countries/${encodeURI(String(countries))}`
    )
      .then((res) => res.json())
      .then((finalData) => finalData);
  });
  const tableHeight = window.innerHeight - 200;
  function isOdd(index: number) {
    return Boolean(index % 2);
  }
  return (
    <>
      {!isLoading && (
        <Table
          scroll={{ y: tableHeight }}
          pagination={false}
          columns={columns}
          dataSource={Countries}
          rowClassName={(record, index) => {
            const isIndexOdd = isOdd(index);
            return isIndexOdd ? styles.oddRows : "";
          }}
        />
      )}
    </>
  );
}
