import React from "react";
import { Col, Row, Select, Slider, Typography } from "antd";
import "./styles.less";

const { Text, Link } = Typography;

export const CustomFooter = () => {
  return (
    <Row justify={"space-between"} align={"middle"} id="parent-footer">
      <Col xs={24} sm={24} md={12} lg={12} xl={8} className="footer-col">
        <Row>
          <Col>
            <Text strong>Email Support :</Text>
          </Col>
          <Col>
            <Link>&nbsp; support@wincase.co</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text strong>Support Hours :</Text>
          </Col>
          <Col>
            <Text>&nbsp; Mon - Fri 10:00 AM - 6:00 PM EST</Text>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={8} className="footer-col">
        &copy; 2023 Ampcome Technologies (OPC) Ltd. All Rights Reserved.
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={4} className="footer-col">
        <Select placeholder="Select Languages" size="small" />
        <Text strong style={{ display: "block" }}>
          Powered by Google Translate
        </Text>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={4} className="footer-col">
        <Slider style={{ width: "10em" }} disabled />
        <Text style={{ display: "block" }}>0 GB of 0 GB (0% used)</Text>
      </Col>
    </Row>
  );
};
