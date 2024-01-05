import React from "react";
import { Col, Row, Space, Typography } from "antd";
import { DownSquareOutlined, UpSquareOutlined } from "@ant-design/icons";
import "./../styles.less";

const { Text } = Typography;

export const Sorter: React.FC = () => {
  return (
    <div id="sorter">
      <Row justify={"space-between"} align={"middle"} className="row">
        <Col>
          <Text>Client Name</Text>
        </Col>
        <Col>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <DownSquareOutlined className="icon" />
            <UpSquareOutlined className="icon" />
          </Space>
        </Col>
      </Row>
      <Row justify={"space-between"} align={"middle"} className="row">
        <Col>
          <Text>Creation Date</Text>
        </Col>
        <Col>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <DownSquareOutlined className="icon" />
            <UpSquareOutlined className="icon" />
          </Space>
        </Col>
      </Row>
      <Row justify={"space-between"} align={"middle"} className="row">
        <Col>
          <Text>Modified Date</Text>
        </Col>
        <Col>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <DownSquareOutlined className="icon" />
            <UpSquareOutlined className="icon" />
          </Space>
        </Col>
      </Row>
    </div>
  );
};
