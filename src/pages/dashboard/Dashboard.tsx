import React from "react";
import { Col, Row, Space, Typography } from "antd";
import { useGetIdentity } from "@refinedev/core";
import { ScheduleTraining } from "./Dcomponents/layout1/ScheduleTraining";
import { LatestNews } from "./Dcomponents/layout2/LatestNews";
import { Partners } from "./Dcomponents/layout3/Partners";
import { ExpressEntry } from "./Dcomponents/layout3/ExpressEntry";
import "./styles.less";

const { Title } = Typography;

export const Dashboard: React.FC = () => {
  const data: any = useGetIdentity();

  return (
    <Space direction="vertical" style={{ display: "flex" }} id="dashboard">
      <Title>Welcome, {data?.data?.displayName}</Title>
      <ScheduleTraining />
      <LatestNews />
      <Row gutter={[16, 16]}>
        <Col span={15}>
          <Partners />
        </Col>
        <Col span={9}>
          <ExpressEntry />
        </Col>
      </Row>
    </Space>
  );
};
