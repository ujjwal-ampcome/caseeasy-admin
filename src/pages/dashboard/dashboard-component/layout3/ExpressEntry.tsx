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
      <Space
        direction="vertical"
        className="express-entry-scroll"
        style={{ display: "flex" }}
      >
        <Space direction="horizontal" className="express-entry-content">
          <Space direction="vertical">
            <Text>Agriculture and agri-food occupations (2023-1) </Text>
            <Text style={{ color: "#8c8989" }}>December 21, 2023</Text>
          </Space>
          <Space direction="vertical">
            <Button className="express-entry-btn" size="middle">
              386
            </Button>
            <Text style={{ color: "#8c8989" }}>Issued: 400</Text>
          </Space>
        </Space>
        <Divider className="express-entry-divider" />
        <Space direction="horizontal" className="express-entry-content">
          <Space direction="vertical">
            <Text>Agriculture and agri-food occupations (2023-1)</Text>
            <Text style={{ color: "#8c8989" }}>December 21, 2023</Text>
          </Space>
          <Space direction="vertical">
            <Button className="express-entry-btn" size="middle">
              386
            </Button>
            <Text style={{ color: "#8c8989" }}>Issued: 400</Text>
          </Space>
        </Space>
      </Space>
    </Card>
  );
};
