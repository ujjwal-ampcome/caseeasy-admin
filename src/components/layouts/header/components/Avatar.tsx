import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import "../styles.less";

export const HeadAvatar = () => {
  return (
    <Space id="head-avatar">
      <Avatar size="large" icon={<UserOutlined />} className="avatar" />
    </Space>
  );
};
