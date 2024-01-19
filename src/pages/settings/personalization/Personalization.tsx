import { Col, Row, Tabs, TabsProps, Typography, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { FirmDetails } from "./firm-details/FirmDetails";
import { KeyBuilder } from "@refinedev/core";
import { RepresentativeDetails } from "./representative-details/RepresentativeDetails";

export const Personalization: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: TabsProps["items"] = [
    { key: "1", label: "FIRM DETAILS", children: <FirmDetails /> },
    {
      key: "2",
      label: "REPRESENTATIVE DETAILS",
      children: <RepresentativeDetails />,
    },
  ];

  const onChange = (key: String) => {
    console.log(KeyBuilder);
  };

  return (
    <>
      <Content
        className="content"
        style={{
          background: colorBgContainer,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Typography.Title level={3}>Personalization</Typography.Title>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange}></Tabs>
        </Row>
      </Content>
    </>
  );
};
