import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import React from "react";
const { Text } = Typography;
export const HeadTimer: React.FC = () => {
  return (
    <Space direction="horizontal" id="head-timer">
      <Button
        size="middle"
        className="head-timer-btn"
        icon={<CaretRightOutlined className="head-timer-icon" />}
      >
        <Text className="text">Timer</Text>
      </Button>
    </Space>
  );
};
