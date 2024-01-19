import React, { useState } from "react";
import { Menu, Layout, Row, Col, Typography } from "antd";
import { FirmDetails } from "./personalization/firm-details/FirmDetails";
import { Personalization } from "./personalization/Personalization";
import "./styles.less";

export const Settings: React.FC = () => {
  const { Sider } = Layout;
  const [selectedKey, setSelectedKey] = useState<string | null>("1");

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
  };

  const renderComponent = () => {
    switch (selectedKey) {
      case "1":
        return <Personalization />;
      case "2":
        return null;
      case "3":
        return <FirmDetails />;
      default:
        return null;
    }
  };

  const items = [
    { key: "1", label: "Personalization" },
    { key: "2", label: "Permissions" },
    { key: "3", label: "User Management" },
    { key: "4", label: "Templates" },
    { key: "5", label: "IP Restriction" },
    { key: "6", label: "Email Signature" },
    { key: "7", label: "Payment Terms" },
    { key: "8", label: "Referral Codes" },
    { key: "9", label: "Designated Person" },
    { key: "10", label: "Calendar" },
    { key: "11", label: "Fees" },
    { key: "12", label: "Questionnaries" },
    { key: "13", label: "Tasks" },
    { key: "14", label: "Trust Accounts" },
  ];
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Title level={3}>Settings</Typography.Title>
        </Col>
      </Row>
      <Layout id="settings">
        <Sider
          style={{
            backgroundColor: "white",
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              marginTop: "8px",
            }}
          >
            {items.map((item) => (
              <Menu.Item
                key={item.key}
                onClick={() => handleMenuClick(item.key)}
                style={{
                  fontWeight: selectedKey === item.key ? "bold" : "normal",
                }}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <div>{renderComponent()}</div>
        </Layout>
      </Layout>
    </>
  );
};
