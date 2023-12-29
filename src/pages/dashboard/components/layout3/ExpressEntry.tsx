import React from "react";
import { Button, Card, Col, Divider, Row, Space, Typography } from "antd";
import "./../../styles.less";

const { Title, Text } = Typography;

export const ExpressEntry: React.FC = () => {
  return (
    <Card id="express-entry">
      <Space direction={"horizontal"}>
        <Title level={4}>Latest Express Entry Draws</Title>
      </Space>
      <Space direction="vertical" className="express-entry-scroll">
        <Row justify={"space-between"}>
          <Col span={20}>
            <Space direction="vertical">
              <Text>Agriculture and agri-food occupations (2023-1)</Text>
              <Text style={{ color: "#8c8989" }}>December 21, 2023</Text>
            </Space>
          </Col>
          <Col offset={1} span={3}>
            <Space direction="vertical">
              <Button className="express-entry-btn" size="middle">
                386
              </Button>
              <Text style={{ color: "#8c8989" }}>Issued: 400</Text>
            </Space>
          </Col>
        </Row>
        <Divider className="express-entry-divider" />
        <Row justify={"space-between"}>
          <Col span={20}>
            <Space direction="vertical">
              <Text>Agriculture and agri-food occupations (2023-1)</Text>
              <Text style={{ color: "#8c8989" }}>December 21, 2023</Text>
            </Space>
          </Col>
          <Col offset={1} span={3}>
            <Space direction="vertical">
              <Button className="express-entry-btn" size="middle">
                386
              </Button>
              <Text style={{ color: "#8c8989" }}>Issued: 400</Text>
            </Space>
          </Col>
        </Row>
      </Space>
    </Card>
  );
};
