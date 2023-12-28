import React from "react";
import { Space, Typography } from "antd";
import { useGetIdentity } from "@refinedev/core";
import { ScheduleTraining } from "./components/Layout1/ScheduleTraining";
import { LatestNews } from "./components/Layout2/LatestNews";
import "./styles.less";

const { Title } = Typography;

export const Dashboard: React.FC = () => {
  const data: any = useGetIdentity();

  return (
    <Space direction="vertical" style={{ display: "flex" }} id="dashboard">
      <Title>Welcome, {data?.data?.displayName}</Title>
      <ScheduleTraining />
      <LatestNews />
    </Space>
  );
};
