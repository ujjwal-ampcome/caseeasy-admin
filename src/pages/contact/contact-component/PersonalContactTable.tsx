import React from "react";
import { useTable } from "@refinedev/antd";
import { List, Table, Typography } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const PersonalContactTable = () => {
  const { tableProps } = useTable({
    resource: "Contacts",
    meta: {
      fields: [
        "id",
        "unique_client_identifier",
        "title",
        "passport_number",
        "first_name",
        "last_name",
        "job_title",
        "marital_status",
        "date_of_birth",
        "country_of_residence",
        "countries_of_citizenship",
        "login_email",
        "phone_number",
        "alternative_email",
        "alternative_phone_number",
        "phone_number_type",
        "profile_photo",
        "address_type",
        "apartment",
        "city",
        "country",
        "postal_code",
        "street_name",
        "street_number",
        "alternative_address",
        "primary_email",
        "created_at",
        "updated_at",
      ],
    },
  });

  console.log("tableProps", tableProps);

  return (
    <List>
      <Table {...tableProps} rowKey={"id"}>
        <Table.Column
          fixed
          title="Name"
          render={(value: any) => {
            if (value.title === "mr") {
              return (
                <Typography.Text ellipsis={true}>
                  Mr. {value?.first_name} {value?.last_name}
                </Typography.Text>
              );
            } else if (value.title === "mrs") {
              return (
                <Typography.Text ellipsis={true}>
                  Mrs. {value?.first_name} {value?.last_name}
                </Typography.Text>
              );
            } else {
              return (
                <Typography.Text ellipsis={true}>
                  {value?.first_name} {value?.last_name}
                </Typography.Text>
              );
            }
          }}
        />
        <Table.Column
          title="Age"
          render={(value: any) => {
            const age = dayjs(value?.date_of_birth).toNow(true);
            return <Typography.Text ellipsis={true}>{age}</Typography.Text>;
          }}
        />
        <Table.Column
          title="Date Of Birth"
          render={(value: any) => {
            const dob = dayjs(value?.date_of_birth).format("MM-DD-YYYY");
            return <Typography.Text ellipsis={true}>{dob}</Typography.Text>;
          }}
        />
        <Table.Column dataIndex={"phone_number"} title="Phone" ellipsis />
        <Table.Column dataIndex={"login_email"} title="Email" ellipsis />
        <Table.Column
          dataIndex={"marital_status"}
          title="Marital Status"
          ellipsis
        />
        <Table.Column dataIndex={"job_title"} title="TIER/NOC" ellipsis />
        <Table.Column
          dataIndex={"country_of_residence"}
          title="Country Of Residence"
          ellipsis
        />
        <Table.Column
          title="Created"
          render={(value: any) => {
            const createdAt = dayjs(value?.created_at).format("MM-DD-YYYY");
            return (
              <Typography.Text ellipsis={true}>{createdAt}</Typography.Text>
            );
          }}
        />
        <Table.Column dataIndex={"actions"} title="Actions" fixed />
      </Table>
    </List>
  );
};
