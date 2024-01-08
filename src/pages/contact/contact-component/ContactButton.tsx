import React from "react";
import type { MenuProps } from "antd";
import { useNavigation } from "@refinedev/core";
import { Button, Dropdown } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

export const ContactButton = () => {
  const { push } = useNavigation();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Personal Contact",
      onClick: () => push("/primary-contact"),
    },
    {
      key: "2",
      label: "Corporate Contact",
      onClick: () => push(""),
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button type="primary" size="large">
          Add Contact <PlusCircleOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};
