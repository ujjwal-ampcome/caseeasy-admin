import { Button, Form, Input, Select, Space } from "antd";
import React from "react";

export const FilterPersonal: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Name">
        <Input size="middle" placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Age Range">
        <Select size="middle" placeholder="Select placeholder" />
      </Form.Item>
      <Form.Item label="Job Title/NOC">
        <Select size="middle" placeholder="Select placeholder" />
      </Form.Item>
      <Form.Item label="Marital Status">
        <Select size="middle" placeholder="Select placeholder" />
      </Form.Item>
      <Form.Item label="Contact Type">
        <Select size="middle" placeholder="Select placeholder" />
      </Form.Item>
      <Form.Item label="Country of Residence">
        <Select size="middle" placeholder="Select placeholder" />
      </Form.Item>
      <Space direction="horizontal" style={{ display: "flex" }}>
        <Button type="primary" size="middle">
          Apply
        </Button>
        <Button size="middle">Clear</Button>
      </Space>
    </Form>
  );
};
