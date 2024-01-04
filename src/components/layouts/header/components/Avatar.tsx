import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Boy from "/img/boy.png";
import "../styles.less";

export const HeadAvatar = () => {
  return (
    <div id="head-avatar">
      <Avatar
        size="large"
        icon={<UserOutlined />}
        src={Boy}
        className="avatar"
      />
    </div>
  );
};
