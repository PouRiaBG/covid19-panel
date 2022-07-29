import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { table } from "console";
import React from "react";

interface DataType {
  key: React.Key;
  country: string;
  totalCase: number;
  newCase: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Country",
    dataIndex: "country",
    width: 150,
  },
  {
    title: "Total cases",
    dataIndex: "totalCase",
    width: 150,
  },
  {
    title: "New cases",
    dataIndex: "newCase",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    country: `Edward King ${i}`,
    totalCase: 32,
    newCase: `London, Park Lane no. ${i}`,
  });
}

export function Countries() {
  const tableHeight = window.innerHeight - 200;
  return (
    <>
      <Table
        scroll={{ y: tableHeight }}
        pagination={false}
        columns={columns}
        dataSource={data}
      />
      ;
    </>
  );
}
