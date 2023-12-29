import React from "react";
import { Col, Row, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { HeadHelp } from "./components/Help";
import { HeadTimer } from "./components/Timer";
import { HeadActivity } from "./components/TrackActivity";
import { HeadContact } from "./components/Contact";
import { HeadDrawer } from "./components/Drawer";
import CustomDropdown from "./../../custom-component/CustomDropdown";
import { HeadAvatar } from "./components/Avatar";
import "./styles.less";

const props = {
  name: "Portals",
  subName: "System",
  searchParam: true,
  addItem: true,
  type: "large",
  item: [
    "Access to Information and Privacy (ATIP)",
    "Authorized Representative",
  ],
  size: "middle",
  style: {
    color: "#fff",
    fontWeight: 400,
    backgroundColor: "#2b70d6",
  },
  icon: <DownOutlined style={{ color: "#fff" }} />,
  ghost: false,
};

export const CustomHeader: React.FC = () => {
  return (
    <Space direction="horizontal" size={"large"} id="parent-header">
      <Row>
        <Col>
          <HeadTimer />
          <HeadActivity />
        </Col>
        <Col push={14}>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <HeadContact />
            <CustomDropdown props={props} className="portal" />
            <HeadHelp />
            <HeadDrawer />
            <HeadAvatar />
          </Space>
        </Col>
      </Row>
    </Space>
  );
};
