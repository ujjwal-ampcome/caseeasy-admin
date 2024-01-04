import React from "react";
import type { TabsProps } from "antd";
import { Button, Col, Drawer, Flex, Row, Space, Tabs, Typography } from "antd";
import {
  ArrowsAltOutlined,
  CloudDownloadOutlined,
  FilterOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

export const Contact: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <>
      <Row>
        <Title>Contacts</Title>
      </Row>
      <Row justify={"space-between"}>
        <Col span={8}>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <Button type="primary" size="large" onClick={showDrawer}>
              Filter <FilterOutlined />
            </Button>
            <Button type="primary" size="large">
              Sort <ArrowsAltOutlined />
            </Button>
            <Button type="primary" size="large">
              Export <CloudDownloadOutlined />
            </Button>
          </Space>
        </Col>
        <Col>
          <Button type="primary" size="large">
            Add Contact <PlusCircleOutlined />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Col>
      </Row>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
