import React from "react";
import { FundProjectionScreenOutlined } from "@ant-design/icons";
import { Button, Card, Row, Typography } from "antd";
import "./../../styles.less";

const { Title, Text } = Typography;

export const TrainingCard: React.FC = () => {
  return (
    <Card style={{ width: 400 }} id="training-card">
      <Row>
        <Title level={5}>Schedule Training</Title>
      </Row>
      <Row justify={"center"}>
        <FundProjectionScreenOutlined className="fund-icon" />
      </Row>
      <Row>
        <Text className="fund-text">
          Our specialist will assist with getting you setup and customizing the
          CRM based on your firm's unique needs.
        </Text>
      </Row>
      <Row justify={"center"}>
        <Button className="fund-btn">Book Training</Button>
      </Row>
    </Card>
  );
};
