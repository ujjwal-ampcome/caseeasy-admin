import { BellOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React from "react";
import "../styles.less";

export const HeadDrawer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div id="head-drawer">
      <BellOutlined onClick={showDrawer} className="bell" />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        size="default"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
