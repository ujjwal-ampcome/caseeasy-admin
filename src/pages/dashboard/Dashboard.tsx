import React from "react";
import { Space, Typography } from "antd";
import { useGetIdentity } from "@refinedev/core";

const { Title } = Typography;

export const Dashboard: React.FC = () => {
  const { data } = useGetIdentity<any>();
  console.log("data", data);
  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <Title>Welcome, {data}</Title>
    </Space>
  );
};
