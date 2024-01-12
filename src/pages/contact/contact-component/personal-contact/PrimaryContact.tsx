import React from "react";
import type { TabsProps } from "antd";
import { Breadcrumb, Col, Row, Tabs } from "antd";
import { useNavigation } from "@refinedev/core";
import { PrimaryContactForm } from "./PrimaryContactForm";
import { SpouseContactForm } from "./SpouseContactForm";

export const PrimaryContact = () => {
  const { push } = useNavigation();
  const [clientid, setClientId] = React.useState<any>();
  const [activeTabKey, setActiveTabKey] = React.useState<any>("1");

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "PRIMARY",
      children: (
        <PrimaryContactForm
          clientid={clientid}
          setClientId={setClientId}
          activeTabKey={activeTabKey}
          setActiveTabKey={setActiveTabKey}
        />
      ),
    },
    {
      key: "2",
      label: "SPOUSE",
      children: (
        <SpouseContactForm clientid={clientid} setClientId={setClientId} />
      ),
    },
  ];

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
          <Tabs defaultActiveKey={activeTabKey} items={items} />
        </Col>
      </Row>
    </div>
  );
};
