import React from "react";
import { Button, Dropdown, Typography } from "antd";
import type { MenuProps } from "antd";
import {
  CustomerServiceOutlined,
  ExportOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "0",
    label: <Typography.Text strong>RESOURCES</Typography.Text>,
  },
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Typography.Text strong style={{ color: "#2b70d6" }}>
          Support articles <ExportOutlined />
        </Typography.Text>
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
        <Typography.Text strong style={{ color: "#2b70d6" }}>
          Training videos <ExportOutlined />
        </Typography.Text>
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
        <Typography.Text strong style={{ color: "#2b70d6" }}>
          Latest updates <ExportOutlined />
        </Typography.Text>
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
        <Typography.Text strong style={{ color: "#2b70d6" }}>
          Live Chat <CustomerServiceOutlined />
        </Typography.Text>
      </a>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "5",
    label: <Typography.Text strong>GET IN TOUCH</Typography.Text>,
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Typography.Text strong style={{ color: "#2b70d6" }}>
          Share feedback
        </Typography.Text>
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
        <Typography.Text strong style={{ color: "#2b70d6" }}>
          Earn CPD <ExportOutlined />
        </Typography.Text>
      </a>
    ),
  },
];

export const HeadHelp: React.FC = () => {
  return (
    <div id="head-help">
      <Dropdown menu={{ items }}>
        <Button type="text" size="middle">
          <QuestionCircleFilled className="icon" />
          <Typography.Text strong style={{ color: "#8c8989" }}>
            Help
          </Typography.Text>
        </Button>
      </Dropdown>
    </div>
  );
};
