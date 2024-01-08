import React from "react";
import {
  Typography,
  Flex,
  Form,
  Row,
  Col,
  Input,
  Select,
  Button,
  DatePicker,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const PrimaryContactForm = () => {
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
        <Row>
          <Typography.Title level={5}>Address</Typography.Title>
          <Row justify={"space-between"} gutter={[24, 24]} align={"middle"}>
            <Col span={8}>
              <Form.Item
                label="Apt/Unit"
                name="apartment"
                rules={[
                  {
                    required: true,
                    message: "Please input your apartment",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Street Number"
                name="street"
                rules={[
                  {
                    required: true,
                    message: "Please input your street number",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Street Name"
                name="street"
                rules={[
                  {
                    required: true,
                    message: "Please input your street name",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                    message: "Please input your city",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  {
                    required: true,
                    message: "Please select your country",
                  },
                ]}
              >
                <Select size="large" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Postal Code"
                name="postalcode"
                rules={[
                  {
                    required: true,
                    message: "Please input your postal code",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Address Type"
                name="addresstype"
                rules={[
                  {
                    required: true,
                    message: "Please input your address type",
                  },
                ]}
              >
                <Select size="large" />
              </Form.Item>
            </Col>
          </Row>
        </Row>
        <Row>
          <Form.List name="items">
            {(fields, { add, remove }) => (
              <div>
                {fields.map((field) => (
                  <Row
                    key={field.key}
                    justify={"space-between"}
                    gutter={[24, 24]}
                    align={"middle"}
                  >
                    <Col span={8}>
                      <Form.Item
                        label="Apt/Unit"
                        name="apartment"
                        rules={[
                          {
                            required: true,
                            message: "Please input your apartment",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Street Number"
                        name="street"
                        rules={[
                          {
                            required: true,
                            message: "Please input your street number",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Street Name"
                        name="street"
                        rules={[
                          {
                            required: true,
                            message: "Please input your street name",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="City"
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: "Please input your city",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Country"
                        name="country"
                        rules={[
                          {
                            required: true,
                            message: "Please select your country",
                          },
                        ]}
                      >
                        <Select size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Postal Code"
                        name="postalcode"
                        rules={[
                          {
                            required: true,
                            message: "Please input your postal code",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Address Type"
                        name="addresstype"
                        rules={[
                          {
                            required: true,
                            message: "Please input your address type",
                          },
                        ]}
                      >
                        <Select size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8} pull={8}>
                      <Button
                        danger
                        size="large"
                        type="text"
                        onClick={() => {
                          remove(field.name);
                        }}
                      >
                        <DeleteOutlined /> Remove{" "}
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Row>
                  <Col>
                    <Button onClick={() => add()} block>
                      + Add Another Address
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          </Form.List>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Typography.Title level={5}>Add other contacts</Typography.Title>
            <Typography.Text strong>Contact Email </Typography.Text>
          </Col>
          <Col span={8}>
            <Form.Item label="Email Address" name="gmail">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Form.List name="email">
            {(fields, { add, remove }) => (
              <div>
                {fields.map((field) => (
                  <Row
                    key={field.key}
                    align={"middle"}
                    gutter={[24, 24]}
                    justify={"space-between"}
                  >
                    <Col span={24}>
                      <Typography.Text strong>Contact Email</Typography.Text>
                    </Col>

                    <Col span={20}>
                      <Form.Item label="Email Address" name="email">
                        <Input size="large" />
                      </Form.Item>
                    </Col>

                    <Col span={4}>
                      <Button
                        danger
                        size="large"
                        type="text"
                        onClick={() => {
                          remove(field.name);
                        }}
                      >
                        <DeleteOutlined /> Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Row>
                  <Col>
                    <Button
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      + Add Another Email
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          </Form.List>
        </Row>

        <Row gutter={[24, 24]} align={"middle"}>
          <Col span={24}>
            <Typography.Text strong>Phone</Typography.Text>
          </Col>
          <Col span={8}>
            <Form.Item label="Phone Number" name="phonenumber">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Select Type" name={"type"}>
              <Select size="large" placeholder="select" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Form.List name="contactnumber">
            {(fields, { add, remove }) => (
              <div>
                {fields.map((field) => (
                  <Row
                    key={field.key}
                    align={"middle"}
                    gutter={[24, 24]}
                    justify={"space-between"}
                  >
                    <Col span={24}>
                      <Typography.Text strong>Phone number</Typography.Text>
                    </Col>

                    <Col span={20}>
                      <Form.Item label="Phone" name="phonenumber">
                        <Input size="large" />
                      </Form.Item>
                    </Col>

                    <Col span={4}>
                      <Button
                        danger
                        size="large"
                        type="text"
                        onClick={() => {
                          remove(field.name);
                        }}
                      >
                        <DeleteOutlined /> Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Row>
                  <Col>
                    <Button
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      + Add Another Phone
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          </Form.List>
        </Row>
      </Form>
    </Flex>
  );
};
