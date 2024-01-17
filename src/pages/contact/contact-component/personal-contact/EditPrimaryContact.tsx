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
  AutoComplete,
  Breadcrumb,
  Tabs,
} from "antd";
import { useNavigation, useParsed } from "@refinedev/core";
import { DeleteOutlined } from "@ant-design/icons";
import { useList, useCreate } from "@refinedev/core";
import { useSelect } from "@refinedev/antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import type { TabsProps } from "antd";
import { IPrimaryContactForm } from "../../../../components/interfaces";
import { useStore } from "./../../../../store";
import { EditSpouseContact } from "./EditSpouseContact";
import "./../../styles.less";

export const EditPrimaryContact: React.FC<IPrimaryContactForm> = ({
  activeTabKey,
  setActiveTabKey,
}) => {
  const [jobtitle, setJobTitle] = React.useState<string | undefined>();
  const { mutateAsync: createContact } = useCreate();
  const { addClientID } = useStore();
  const { push } = useNavigation();
  const { id } = useParsed();

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

  const { selectProps: addressType } = useSelect({
    resource: "enum_address_type",
    meta: {
      fields: ["label", "value"],
    },
    optionLabel: "label",
    optionValue: "value",
  });

  const { selectProps: contactType } = useSelect({
    resource: "enum_contact_type",
    meta: {
      fields: ["label", "value"],
    },
    optionLabel: "label",
    optionValue: "value",
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
    const contact = await createContact({
      resource: "Contacts",
      values: {
        ...e,
        alternative_address: { address: e?.alternative_address },
        alternative_email: { email: e?.alternative_email },
        alternative_phone_number: { contact: e?.alternative_phone_number },
      },
    });
    if (contact?.data?.marital_status === "married") {
      addClientID(contact?.data?.id);
      setActiveTabKey("2");
    }
    console.log("contact mutation successfull", contact);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "PRIMARY",
    },
    {
      key: "2",
      label: "SPOUSE",
      children: <EditSpouseContact />,
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Contacts",
            onClick: () => push("/contacts"),
          },
          {
            title: "Edit Contacts",
          },
        ]}
      />
      <Row>
        <Col>
          <Tabs defaultActiveKey={activeTabKey} items={items} />
        </Col>
      </Row>
      <Flex vertical id="personal-contact-form">
        <Typography.Title level={4}>Edit Personal Contact</Typography.Title>
        <Form
          layout="vertical"
          style={{ maxWidth: "100%" }}
          size="small"
          onFinish={(e) => handleSubmit(e)}
        >
          <Row justify={"space-between"} gutter={[24, 24]} align={"middle"}>
            <Col span={8}>
              <Form.Item
                label="Unique Client Identifier (UCI)"
                name="unique_client_identifier"
              >
                <Input size="middle" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input your title" }]}
              >
                <Select
                  size="middle"
                  options={[
                    { label: "Mr", value: "mr" },
                    { label: "Mrs", value: "mrs" },
                    { label: "They", value: "they" },
                  ]}
                />
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
                <Input size="middle" />
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
                <Input size="middle" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Last Name" name="last_name">
                <Input size="middle" />
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
                  size="middle"
                >
                  <Input
                    size="middle"
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
                  size="middle"
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
                <DatePicker size="middle" style={{ width: "100%" }} />
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
                  size="middle"
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
                  size="middle"
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
                <Input size="middle" />
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
                  <Input size="middle" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Street Number" name="street_number">
                  <Input size="middle" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Street Name" name="street_name">
                  <Input size="middle" />
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
                  <Input size="middle" />
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
                  <Select size="middle" {...residenceCountry} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Postal Code"
                  name="postal_code"
                  rules={[
                    {
                      required: true,
                      message: "Please input your postal code",
                    },
                  ]}
                >
                  <Input size="middle" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Address Type"
                  name="address_type"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address type",
                    },
                  ]}
                >
                  <Select size="middle" {...addressType} />
                </Form.Item>
              </Col>
            </Row>
          </Row>
          <Row>
            <Form.List name="alternative_address">
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
                          name={[field.name, "apartment"]}
                          rules={[
                            {
                              required: true,
                              message: "Please input your apartment",
                            },
                          ]}
                        >
                          <Input size="middle" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Street Number"
                          name={[field.name, "street_number"]}
                        >
                          <Input size="middle" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Street Name"
                          name={[field.name, "street_name"]}
                        >
                          <Input size="middle" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="City"
                          name={[field.name, "city"]}
                          rules={[
                            {
                              required: true,
                              message: "Please input your city",
                            },
                          ]}
                        >
                          <Input size="middle" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Country"
                          name={[field.name, "country"]}
                          rules={[
                            {
                              required: true,
                              message: "Please select your country",
                            },
                          ]}
                        >
                          <Select size="middle" {...residenceCountry} />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Postal Code"
                          name={[field.name, "postalcode"]}
                          rules={[
                            {
                              required: true,
                              message: "Please input your postal code",
                            },
                          ]}
                        >
                          <Input size="middle" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Address Type"
                          name={[field.name, "addresstype"]}
                          rules={[
                            {
                              required: true,
                              message: "Please input your address type",
                            },
                          ]}
                        >
                          <Select size="middle" {...addressType} />
                        </Form.Item>
                      </Col>
                      <Col span={8} pull={8}>
                        <Button
                          danger
                          size="middle"
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
              <Form.Item label="Email Address" name="primary_email">
                <Input size="middle" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Form.List name="alternative_email">
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
                        <Form.Item
                          label="Email Address"
                          name={[field.name, "alternative_email"]}
                        >
                          <Input size="middle" />
                        </Form.Item>
                      </Col>

                      <Col span={4}>
                        <Button
                          danger
                          size="middle"
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
              <Form.Item label="Phone Number" name="phone_number">
                <Input size="middle" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Select Type" name={"phone_number_type"}>
                <Select size="middle" placeholder="select" {...contactType} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Form.List name="alternative_phone_number">
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
                        <Form.Item label="Phone" name={[field.name, "phone"]}>
                          <Input size="middle" />
                        </Form.Item>
                      </Col>

                      <Col span={4}>
                        <Button
                          danger
                          size="middle"
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

          <Row justify={"end"}>
            <Col>
              <Button type="primary" size="middle" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Flex>
    </>
  );
};
