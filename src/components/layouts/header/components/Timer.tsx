import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";
const { Text } = Typography;
export const HeadTimer: React.FC = () => {
  return (
    <div id="head-timer">
      <Button
        size="middle"
        className="btn"
        icon={<CaretRightOutlined className="icon" />}
      >
        <Text className="text">Timer</Text>
      </Button>
    </div>
  );
};
