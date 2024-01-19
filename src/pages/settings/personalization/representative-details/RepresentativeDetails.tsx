import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Card, Form, Row, Select, Typography } from "antd";
import React from "react";

export const RepresentativeDetails: React.FC = () => {
  const handleChange = (value: string[]) => {
    console.log(`sel`);
  };
  return (
    <div>
      <Card>
        <Row>
          <Typography.Title level={5}>Contact Details</Typography.Title>
        </Row>
        <Row>
          <p>
            <ExclamationCircleOutlined
              style={{ color: "rgb(43, 112, 214);" }}
            />{" "}
            <span>
              Enter your company details below which is used in Use of a
              Representative form.
            </span>
          </p>
        </Row>
        <Row>
          <Form style={{ width: "100%" }}>
            <Form.Item>
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Select a Team Member"
                onChange={handleChange}
              ></Select>
            </Form.Item>

            <Row>
              <Form.Item>
                <Button type="primary">Save</Button>
              </Form.Item>
            </Row>
          </Form>
        </Row>
      </Card>
    </div>
  );
};
