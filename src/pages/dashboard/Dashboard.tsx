import React from "react";
import { Col, Row, Space, Typography } from "antd";
import { useGetIdentity } from "@refinedev/core";
import { ScheduleTraining } from "./dashboard-component/layout1/ScheduleTraining";
import { LatestNews } from "./dashboard-component/layout2/LatestNews";
import { Partners } from "./dashboard-component/layout3/Partners";
import { ExpressEntry } from "./dashboard-component/layout3/ExpressEntry";
import { LatestForms, ProfessionalDev } from "./dashboard-component/layout4";
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
        <Col xs={24} sm={24} md={15} lg={15} xl={15}>
          <Partners />
        </Col>
        <Col xs={24} sm={24} md={9} lg={9} xl={9}>
          <ExpressEntry />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={15} lg={15} xl={15}>
          <ProfessionalDev />
        </Col>
        <Col xs={24} sm={24} md={9} lg={9} xl={9}>
          <LatestForms />
        </Col>
      </Row>
    </Space>
  );
};
