import React from "react";
import dayjs from "dayjs";
import { useTable } from "@refinedev/antd";
import { Dropdown, List, Menu, Space, Table, Typography } from "antd";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  CustomerServiceOutlined,
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigation, useUpdate } from "@refinedev/core";
import { filterStore } from "../../../store";

dayjs.extend(relativeTime);

export const PersonalContactTable = () => {
  const { push } = useNavigation();
  const { mutate } = useUpdate();
  const { residence, maritalstatus, noc, clientname } = filterStore();
  const { tableProps } = useTable({
    resource: "contacts",
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
        "active",
      ],
    },
    filters: {
      permanent: [
        {
          field: "active",
          operator: "eq",
          value: true,
        },
        {
          field: "first_name",
          operator: "contains",
          value: `%${clientname ?? ""}%` || undefined,
        },
        {
          field: "country_of_residence",
          operator: "eq",
          value: residence || undefined,
        },
        {
          field: "marital_status",
          operator: "eq",
          value: maritalstatus || undefined,
        },
        {
          field: "job_title",
          operator: "contains",
          value: noc || undefined,
        },
      ],
    },
  });

  React.useEffect(() => {
    console.log("residence-", residence);
  }, [residence]);

  return (
    <List>
      <Table {...tableProps} rowKey={"id"}>
        <Table.Column
          fixed="left"
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
        <Table.Column
          dataIndex={"actions"}
          title="Actions"
          fixed={"right"}
          render={(_, record: any) => (
            <>
              <Dropdown
                dropdownRender={() => (
                  <Menu>
                    <Menu.Item
                      key="1"
                      icon={<EditOutlined />}
                      onClick={() => push(`/primary-contact/edit/${record.id}`)}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MailOutlined />}>
                      Email
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CustomerServiceOutlined />}>
                      Convert to Client
                    </Menu.Item>
                    <Menu.Item
                      key="4"
                      icon={<DeleteOutlined />}
                      onClick={async () =>
                        await mutate({
                          resource: "contacts",
                          id: record?.id,
                          values: {
                            active: false,
                          },
                        })
                      }
                    >
                      Delete
                    </Menu.Item>
                  </Menu>
                )}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Options
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </>
          )}
        />
      </Table>
    </List>
  );
};
