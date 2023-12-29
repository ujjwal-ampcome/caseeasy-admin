import React from "react";
import { Col, Row, Space } from "antd";
import { TrainingCard } from "./TrainingCard";

export const ScheduleTraining: React.FC = () => {
  return (
    <Space style={{ display: "flex" }} direction="horizontal">
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <TrainingCard />
        </Col>
        <Col span={8}>
          <TrainingCard />
        </Col>
        <Col span={8}>
          <TrainingCard />
        </Col>
      </Row>
    </Space>
  );
};
