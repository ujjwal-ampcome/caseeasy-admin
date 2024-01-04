import React from "react";
import { ControlOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
const { Text } = Typography;

export const HeadActivity = () => {
  return (
    <div id="head-activity">
      <Button
        size="middle"
        icon={<ControlOutlined className="icon" />}
        className="btn"
      >
        <Text className="text">Track Activity</Text>
      </Button>
    </div>
  );
};
