import React from "react";
import { Col, Row, Space, Typography } from "antd";
import { DownSquareOutlined, UpSquareOutlined } from "@ant-design/icons";
import "./../styles.less";

export const Sorter: React.FC = () => {
  return (
    <div id="sorter">
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Typography.Text className="typo-text">Client Name</Typography.Text>
        </Col>
        <Col>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <UpSquareOutlined className="upward" />
            <DownSquareOutlined className="down" />
          </Space>
        </Col>
      </Row>
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Typography.Text className="typo-text">Creation Date</Typography.Text>
        </Col>
        <Col>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <UpSquareOutlined className="upward" />
            <DownSquareOutlined className="down" />
          </Space>
        </Col>
      </Row>
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Typography.Text className="typo-text">Modified Date</Typography.Text>
        </Col>
        <Col>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <UpSquareOutlined className="upward" />
            <DownSquareOutlined className="down" />
          </Space>
        </Col>
      </Row>
    </div>
  );
};
