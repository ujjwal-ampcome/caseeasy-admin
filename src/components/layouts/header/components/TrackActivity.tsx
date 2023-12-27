import React from "react";
import { ControlOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
const { Text } = Typography;

export const HeadActivity = () => {
  return (
    <Space direction="horizontal" id="head-activity">
      <Button
        size="middle"
        icon={<ControlOutlined className="head-activity-icon" />}
        className="head-activity-btn"
      >
        <Text className="text">Track Activity</Text>
      </Button>
    </Space>
  );
};
