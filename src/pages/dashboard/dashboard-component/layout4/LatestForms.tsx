import React from "react";
import { Card, Divider, Space, Typography } from "antd";
import "./../../styles.less";

const { Text, Title } = Typography;

export const LatestForms = () => {
  return (
    <Card id="express-entry">
      <Space direction="horizontal">
        <Title level={4}>Latest Forms</Title>
      </Space>
      <Space
        direction="vertical"
        className="express-entry-scroll"
        style={{ display: "flex" }}
      >
        <Space direction="vertical" className="express-entry-text">
          <Text>IMM1294E:Application For Study Made Outside Canada</Text>
          <Text style={{ color: "#8c8989" }}>2023-11</Text>
        </Space>

        <Divider className="express-entry-divider" />

        <Space direction="vertical" className="express-entry-text">
          <Text>IMM5556E:Document Checklist Worker</Text>
          <Text style={{ color: "#8c8989" }}>2023-10</Text>
        </Space>

        <Divider className="express-entry-divider" />

        <Space direction="vertical" className="express-entry-text">
          <Text>IMM5771E:Document Checklist</Text>
          <Text style={{ color: "#8c8989" }}>2023-11</Text>
        </Space>

        <Divider className="express-entry-divider" />

        <Space direction="vertical" className="express-entry-text">
          <Text>
            IMM5373E:Sponsorship Undertaking - Sponsorship Agreement Holders
            (Sah)
          </Text>
          <Text style={{ color: "#8c8989" }}>2023-10</Text>
        </Space>
      </Space>
    </Card>
  );
};
