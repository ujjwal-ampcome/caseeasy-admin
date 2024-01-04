import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Dropdown, Input, Space, Typography, MenuProps } from "antd";

const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    key: "0",
    label: (
      <Text strong style={{ color: "#2b70d6" }}>
        Select criteria:
      </Text>
    ),
  },
  {
    key: "1",
    label: <Text>Unique Client Identifier (UCI)</Text>,
  },
  {
    key: "2",
    label: <Text>Client Name</Text>,
  },
  {
    key: "3",
    label: <Text>Phone Number</Text>,
  },
  {
    key: "4",
    label: <Text>Email</Text>,
  },
  {
    key: "5",
    label: <Text>Case Number</Text>,
  },
  {
    key: "6",
    label: <Text>Client ID</Text>,
  },
  {
    key: "7",
    label: <Text>Passport Number</Text>,
  },
  {
    key: "8",
    label: <Text>Company Name</Text>,
  },
  {
    key: "9",
    label: <Text>Tag</Text>,
  },
  {
    key: "10",
    label: <Text>Invoice Number</Text>,
  },
];

export const HeadContact: React.FC = () => {
  return (
    <div id="head-contact">
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Input
              size="middle"
              addonBefore={<SearchOutlined />}
              placeholder="Search for a contact or case"
            />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};
