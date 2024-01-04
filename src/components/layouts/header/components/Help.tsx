import React from "react";
import { Button, Dropdown, Typography } from "antd";
import type { MenuProps } from "antd";
import {
  CustomerServiceOutlined,
  ExportOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";

const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    key: "0",
    label: <Text strong>RESOURCES</Text>,
  },
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Text strong style={{ color: "#2b70d6" }}>
          Support articles <ExportOutlined />
        </Text>
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Text strong style={{ color: "#2b70d6" }}>
          Training videos <ExportOutlined />
        </Text>
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Text strong style={{ color: "#2b70d6" }}>
          Latest updates <ExportOutlined />
        </Text>
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Text strong style={{ color: "#2b70d6" }}>
          Live Chat <CustomerServiceOutlined />
        </Text>
      </a>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "5",
    label: <Text strong>GET IN TOUCH</Text>,
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Text strong style={{ color: "#2b70d6" }}>
          Share feedback
        </Text>
      </a>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Text strong style={{ color: "#2b70d6" }}>
          Earn CPD <ExportOutlined />
        </Text>
      </a>
    ),
  },
];

export const HeadHelp: React.FC = () => {
  return (
    <div id="head-help">
      <Dropdown menu={{ items }}>
        <Button type="text" className="btn">
          <QuestionCircleFilled className="icon" />
          <Text strong style={{ color: "#8c8989" }}>
            Help
          </Text>
        </Button>
      </Dropdown>
    </div>
  );
};
