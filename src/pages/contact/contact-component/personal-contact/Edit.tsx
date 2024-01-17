import React from "react";
import type { TabsProps } from "antd";
import { Breadcrumb, Col, Row, Tabs } from "antd";
import { useNavigation } from "@refinedev/core";
import { EditSpouseContact } from "./EditSpouseContact";
import { EditPrimaryContact } from "./EditPrimaryContact";

export const EditPersonalContact = () => {
  const { push } = useNavigation();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "PRIMARY",
      children: <EditPrimaryContact />,
    },
    {
      key: "2",
      label: "SPOUSE",
      children: <EditSpouseContact />,
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
          <Tabs defaultActiveKey={"1"} items={items} />
        </Col>
      </Row>
    </div>
  );
};
