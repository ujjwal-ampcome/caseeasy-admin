import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import Boy from "/img/boy.png";
import "../styles.less";

export const HeadAvatar = () => {
  return (
    <Space id="head-avatar">
      <Avatar
        size="large"
        icon={<UserOutlined />}
        src={Boy}
        className="avatar"
      />
    </Space>
  );
};
