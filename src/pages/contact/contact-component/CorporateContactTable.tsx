import React from "react";
import { useTable } from "@refinedev/antd";
import { List, Table } from "antd";

export const CorporateContactTable = () => {
  const { tableProps } = useTable();
  return (
    <List>
      <Table {...tableProps} rowKey={"id"}>
        <Table.Column dataIndex={"first_name"} title="Name" />
        <Table.Column dataIndex={"age"} title="Age" />
        <Table.Column dataIndex={"dob"} title="Date of Birth" />
        <Table.Column dataIndex={"phone"} title="Phone" />
        <Table.Column dataIndex={"email"} title="Email" />
        <Table.Column dataIndex={"marital_status"} title="Marital Status" />
        <Table.Column dataIndex={"tier"} title="TIER/NOC" />
        <Table.Column
          dataIndex={"country_of_residence"}
          title="Country Of Residence"
        />
        <Table.Column dataIndex={"created_at"} title="Created" />
        <Table.Column dataIndex={"actions"} title="Actions" />
      </Table>
    </List>
  );
};
