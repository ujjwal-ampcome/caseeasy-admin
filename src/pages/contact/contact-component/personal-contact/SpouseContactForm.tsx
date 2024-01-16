import React from "react";
import {
  AutoComplete,
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import { useList, useCreate } from "@refinedev/core";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useSelect } from "@refinedev/antd";
import { useStore } from "../../../../store";
import "./../../styles.less";

export const SpouseContactForm: React.FC = () => {
  const [jobtitle, setJobTitle] = React.useState<string | undefined>();
  const { mutateAsync: createspousecontact } = useCreate();
  const { clientID } = useStore();

  const { selectProps: maritalStatus } = useSelect({
    resource: "enum_marital_status",
    meta: {
      fields: ["label", "value"],
    },
    optionLabel: "label",
    optionValue: "value",
  });

  const { selectProps: residenceCountry } = useSelect({
    resource: "enum_country_codes",
    meta: {
      fields: ["name", "code"],
    },
    optionLabel: "name",
    optionValue: "code",
  });

  const { data } = useList({
    resource: "Job_title",
    meta: {
      fields: ["id", "title", "header", "noc", "skill"],
    },
    pagination: {
      pageSize: 25,
      mode: "off",
    },
    filters: jobtitle
      ? [
          {
            field: "title",
            operator: "startswith",
            value: jobtitle,
          },
        ]
      : undefined,
  });

  const DATA = data?.data ?? [];
  const TIER0 = DATA?.filter((item) => item["skill"] === "0");
  const TIER1 = DATA?.filter((item) => item["skill"] === "1");
  const TIER2 = DATA?.filter((item) => item["skill"] === "2");
  const TIER3 = DATA?.filter((item) => item["skill"] === "3");
  const TIER4 = DATA?.filter((item) => item["skill"] === "4");

  const renderTitle = (title: string) => (
    <Typography.Text strong style={{ color: "gray" }}>
      {title}
    </Typography.Text>
  );

  const renderItem = (title: string, count: string, skill: string) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography.Text>{title}</Typography.Text>
        <Typography.Text>
          TIER: {skill} / NOC: {count}
        </Typography.Text>
      </div>
    ),
  });

  const JobOptions = [
    {
      label: renderTitle("TIER 0 JOBS"),
      options: TIER0.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
    {
      label: renderTitle("TIER 1 JOBS"),
      options: TIER1.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
    {
      label: renderTitle("TIER 2 JOBS"),
      options: TIER2.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
    {
      label: renderTitle("TIER 3 JOBS"),
      options: TIER3.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
    {
      label: renderTitle("TIER 4 JOBS"),
      options: TIER4.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
  ];

  const handleSubmit = async (e: any) => {
    const spouseinfo = await createspousecontact({
      resource: "Contacts",
      values: {
        ...e,
        contact_id: clientID,
      },
    });
    console.log("spouse mutation successfull", spouseinfo);
  };
  return (
    <Flex vertical id="spouse-contact-form">
      <Typography.Title level={4}>Add Spouse Contact</Typography.Title>
      <Form
        layout="vertical"
        style={{ maxWidth: "100%" }}
        size="small"
        onFinish={handleSubmit}
      >
        <Row justify={"space-between"} gutter={[24, 24]} align={"middle"}>
          <Col span={8}>
            <Form.Item
              label="Unique Client Identifier (UCI)"
              name="unique_client_identifier"
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input your title" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Passport Number"
              name="passport_number"
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
              name="first_name"
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
              name="last_name"
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
              name="job_title"
              rules={[
                {
                  required: true,
                  message: "Please input your job title",
                },
              ]}
            >
              <AutoComplete
                popupClassName="certain-category-search-dropdown"
                popupMatchSelectWidth={800}
                options={JobOptions}
                size="large"
              >
                <Input
                  size="large"
                  placeholder="input here"
                  onChange={(e) => setJobTitle(e?.target?.value)}
                />
              </AutoComplete>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Marital Status"
              name="marital_status"
              rules={[
                {
                  required: true,
                  message: "Please select your marital status",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Status"
                {...maritalStatus}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Date Of Birth"
              name="date_of_birth"
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
              name="country_of_residence"
              rules={[
                {
                  required: true,
                  message: "Please select your country",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Country"
                {...residenceCountry}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Countries of Citizenship"
              name="countries_of_citizenship"
              rules={[
                {
                  required: true,
                  message: "Please select your country",
                },
              ]}
            >
              <Select
                size="large"
                mode="multiple"
                placeholder="Select Country"
                {...residenceCountry}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Login Email"
              name="login_email"
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
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number",
                },
              ]}
            >
              <PhoneInput
                placeholder="Phone Number"
                onChange={(v) => console.log(v)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"end"}>
          <Col>
            <Button type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
};
