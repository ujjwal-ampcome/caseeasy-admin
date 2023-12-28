import React from "react";
import { Space, Typography } from "antd";
import { useGetIdentity } from "@refinedev/core";

const { Title } = Typography;

export const Dashboard: React.FC = () => {
  const data = useGetIdentity<any>();
  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <Title>Welcome, {data?.data?.displayName}</Title>
    </Space>
  );
};
