import React from "react";
import type { MenuProps, TabsProps } from "antd";
const { Content, Sider } = NormalLayout;
import {
  Button,
  Card,
  Col,
  Menu,
  Layout as NormalLayout,
  Row,
  Tabs,
  Typography,
  theme,
} from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { KeyBuilder, useMenu, useNavigation } from "@refinedev/core";
import { FirmDetails } from "./personalization/firm-details/FirmDetails";
import "./styles.less";

export const Settings: React.FC = () => {
  const { push } = useNavigation();
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  const items: TabsProps["items"] = [
    { key: "1", label: "FIRM DETAILS", children: <FirmDetails /> },
    {
      key: "2",
      label: "REPRESENTATIVE DETAILS",
      children: "Content of tab Pan 2",
    },
  ];

  const onChange = (key: String) => {
    console.log(KeyBuilder);
  };

  return (
    <div id="settings">
      <NormalLayout hasSider>
        <Sider
          width={200}
          className="sider"
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            defaultOpenKeys={defaultOpenKeys}
            selectedKeys={[selectedKey]}
            mode="inline"
          >
            <Menu.Item
              key="/personalization"
              onClick={() => {
                push("/personalization");
              }}
              style={{
                fontWeight:
                  selectedKey === "/personalization" ? "bold" : "normal",
              }}
            >
              Personalization
            </Menu.Item>

            <Menu.Item
              key="/permissions"
              onClick={() => {
                push("/permissions");
              }}
              style={{
                fontWeight: selectedKey === "/permissions" ? "bold" : "normal",
              }}
            >
              Permissions
            </Menu.Item>

            <Menu.Item
              key="/userManagement"
              onClick={() => {
                push("/userManagement");
              }}
              style={{
                fontWeight:
                  selectedKey === "/userManagement" ? "bold" : "normal",
              }}
            >
              User Management
            </Menu.Item>

            <Menu.Item
              key="/templates"
              onClick={() => {
                push("/templates");
              }}
              style={{
                fontWeight: selectedKey === "/templates" ? "bold" : "normal",
              }}
            >
              Templates
            </Menu.Item>

            <Menu.Item
              key="/IpRestrictions"
              onClick={() => {
                push("/IpRestrictions");
              }}
              style={{
                fontWeight:
                  selectedKey === "/IpRestrictions" ? "bold" : "normal",
              }}
            >
              IP Restrictions
            </Menu.Item>

            <Menu.Item
              key="/emailSignature"
              onClick={() => {
                push("/emailSignature");
              }}
              style={{
                fontWeight:
                  selectedKey === "/emailSignature" ? "bold" : "normal",
              }}
            >
              Email Signature
            </Menu.Item>

            <Menu.Item
              key="/paymentTerms"
              onClick={() => {
                push("/paymentTerms");
              }}
              style={{
                fontWeight: selectedKey === "/paymentTerms" ? "bold" : "normal",
              }}
            >
              Payment Terms
            </Menu.Item>

            <Menu.Item
              key="/referralCodes"
              onClick={() => {
                push("/referralCodes");
              }}
              style={{
                fontWeight:
                  selectedKey === "/referralCodes" ? "bold" : "normal",
              }}
            >
              Referral Codes
            </Menu.Item>

            <Menu.Item
              key="/designatedPerson"
              onClick={() => {
                push("/designatedPerson");
              }}
              style={{
                fontWeight:
                  selectedKey === "/designatedPerson" ? "bold" : "normal",
              }}
            >
              Designated Person
            </Menu.Item>

            <Menu.Item
              key="/calendar"
              onClick={() => {
                push("/calendar");
              }}
              style={{
                fontWeight: selectedKey === "/calendar" ? "bold" : "normal",
              }}
            >
              Calendar
            </Menu.Item>

            <Menu.Item
              key="/fees"
              onClick={() => {
                push("/fees");
              }}
              style={{
                fontWeight: selectedKey === "/fees" ? "bold" : "normal",
              }}
            >
              Fees
            </Menu.Item>

            <Menu.Item
              key="/questionnaires"
              onClick={() => {
                push("/questionnaires");
              }}
              style={{
                fontWeight:
                  selectedKey === "/questionnaires" ? "bold" : "normal",
              }}
            >
              Questionnaires
            </Menu.Item>

            <Menu.Item
              key="/tasks"
              onClick={() => {
                push("/tasks");
              }}
              style={{
                fontWeight: selectedKey === "/tasks" ? "bold" : "normal",
              }}
            >
              Tasks
            </Menu.Item>
            <Menu.Item
              key="/trustAccounts"
              onClick={() => {
                push("/trustAccounts");
              }}
              style={{
                fontWeight:
                  selectedKey === "/trustAccounts" ? "bold" : "normal",
              }}
            >
              Trust Accounts
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          className="content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Typography.Title level={3}>Personalization</Typography.Title>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}></Tabs>
          </Row>
        </Content>
      </NormalLayout>
    </div>
  );
};
