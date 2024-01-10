import React from "react";
import {
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";

export const SpouseContactForm = () => {
  return (
    <Flex vertical>
      <Typography.Title level={4}>Add Personal Contact</Typography.Title>
      <Form layout="vertical" style={{ maxWidth: "100%" }} size="small">
        <Row justify={"space-between"} gutter={[24, 24]} align={"middle"}>
          <Col span={8}>
            <Form.Item
              label="Unique Client Identifier (UCI)"
              name="uci"
              rules={[{ required: true, message: "Please input your UCI" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Title"
              name="Title"
              rules={[{ required: true, message: "Please input your title" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Passport Number"
              name="passport"
              rules={[
                {
                  required: true,
                  message: "Please input your passport number",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Job Title/ NOC"
              name="jobtitle"
              rules={[
                {
                  required: true,
                  message: "Please input your job title",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Marital Status"
              name="maritalstatus"
              rules={[
                {
                  required: true,
                  message: "Please select your marital status",
                },
              ]}
            >
              <Select size="large" placeholder="Select Status" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Date Of Birth"
              name="dob"
              rules={[
                {
                  required: true,
                  message: "Please select your dob",
                },
              ]}
            >
              <DatePicker size="large" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Country of Residence"
              name="residence"
              rules={[
                {
                  required: true,
                  message: "Please select your country",
                },
              ]}
            >
              <Select size="large" placeholder="Select Country" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Countries of Citizenship"
              name="citizenship"
              rules={[
                {
                  required: true,
                  message: "Please select your country",
                },
              ]}
            >
              <Select size="large" placeholder="Select Country" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Login Email"
              name="loginemail"
              rules={[
                {
                  required: true,
                  message: "Please input your login email",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Phone Number"
              name="phonenumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
};
