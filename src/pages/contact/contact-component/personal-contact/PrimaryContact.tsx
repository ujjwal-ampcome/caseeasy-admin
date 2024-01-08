import React from "react";
import type { TabsProps } from "antd";
import { Breadcrumb, Col, Row, Tabs } from "antd";
import { useNavigation } from "@refinedev/core";
import { PrimaryContactForm } from "./PrimaryContactForm";
import { SpouseContactForm } from "./SpouseContactForm";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "PRIMARY",
    children: <PrimaryContactForm />,
  },
  {
    key: "2",
    label: "SPOUSE",
    children: <SpouseContactForm />,
  },
];

export const PrimaryContact = () => {
  const { push } = useNavigation();
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Contacts",
            onClick: () => push("/contacts"),
          },
          {
            title: "Primary Contact",
          },
        ]}
      />
      <Row>
        <Col>
          <Tabs defaultActiveKey="1" items={items} />
        </Col>
      </Row>
    </div>
  );
};
