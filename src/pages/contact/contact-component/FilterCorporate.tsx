import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Typography,
} from "antd";

const { Text } = Typography;

export const FilterCorporate: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Name">
        <Input size="middle" placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Organization Type">
        <Select size="middle" placeholder="Select" />
      </Form.Item>
      <Form.Item label="Job Title/NOC">
        <Select size="middle" placeholder="Search" />
      </Form.Item>
      <Text>Company size</Text>
      <Space wrap direction="horizontal" style={{ display: "flex" }}>
        <Form.Item label="Min">
          <InputNumber size="middle" min={1} max={100000} defaultValue={3} />
        </Form.Item>
        <Text>-</Text>
        <Form.Item label="Max">
          <InputNumber size="middle" min={1} max={100000} defaultValue={5} />
        </Form.Item>
      </Space>
      <Space direction="horizontal" style={{ display: "flex" }}>
        <Button type="primary" size="middle">
          Apply
        </Button>
        <Button size="middle">Clear</Button>
      </Space>
    </Form>
  );
};
