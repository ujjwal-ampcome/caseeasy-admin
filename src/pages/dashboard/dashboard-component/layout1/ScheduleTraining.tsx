import React from "react";
import { Col, Row, Space } from "antd";
import { TrainingCard } from "./TrainingCard";

export const ScheduleTraining: React.FC = () => {
  return (
    <Space style={{ display: "flex" }} direction="horizontal">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <TrainingCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <TrainingCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <TrainingCard />
        </Col>
      </Row>
    </Space>
  );
};
