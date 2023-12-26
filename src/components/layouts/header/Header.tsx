import {
  BellOutlined,
  CaretRightOutlined,
  ControlOutlined,
  DownOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Input,
  MenuProps,
  Space,
  Typography,
} from "antd";
import React from "react";
import CustomDropdown from "../../customcomponent/CustomDropdown";

const { Text } = Typography;

export const CustomHeader: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

  return (
    <Space
      direction="horizontal"
      size={"large"}
      style={{ background: "#f4ebeb" }}
    >
      <Button
        size="large"
        icon={<CaretRightOutlined style={{ color: "#2b70d6" }} />}
        style={{ backgroundColor: "#eaf1fb", color: "#2b70d6" }}
      >
        Timer
      </Button>
      <Button
        size="large"
        icon={<ControlOutlined style={{ color: "#2b70d6" }} />}
        style={{ backgroundColor: "#eaf1fb", color: "#2b70d6" }}
      >
        Track Activity
      </Button>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Input
              size="large"
              addonBefore={<SearchOutlined />}
              placeholder="Search for a contact or case"
            />
          </Space>
        </a>
      </Dropdown>
      <CustomDropdown
        props={{
          name: "Portals",
          subName: "System",
          searchParam: true,
          addItem: true,
          type: "large",
          item: [
            "Access to Information and Privacy (ATIP)",
            "Authorized Representative",
          ],
          size: "large",
          style: {
            color: "#2b70d6",
            backgroundColor: "#eaf1fb",
          },
          icon: <DownOutlined style={{ color: "#2b70d6" }} />,
          ghost: false,
        }}
      />
      <BellOutlined onClick={showDrawer} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Avatar size="large" icon={<UserOutlined />} />
    </Space>
  );
};
