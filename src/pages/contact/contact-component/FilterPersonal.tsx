import React from "react";
import { useSelect } from "@refinedev/antd";
import { useList } from "@refinedev/core";
import {
  AutoComplete,
  Button,
  Form,
  Input,
  Select,
  Space,
  Typography,
} from "antd";
import { filterStore } from "../../../store";

export const FilterPersonal: React.FC = () => {
  const [jobtitle, setJobTitle] = React.useState<string | undefined>();

  const {
    addClientName,
    addAgeRange,
    addNoc,
    addMaritalStatus,
    addContactType,
    addResidence,
  } = filterStore();

  const { selectProps: agerange } = useSelect({
    resource: "enum_age_range",
    meta: {
      fields: ["label", "value"],
    },
    optionLabel: "label",
    optionValue: "value",
  });

  const { selectProps: maritalStatus } = useSelect({
    resource: "enum_marital_status",
    meta: {
      fields: ["label", "value"],
    },
    optionLabel: "label",
    optionValue: "value",
  });

  const { selectProps: contactType } = useSelect({
    resource: "enum_contact_type",
    meta: {
      fields: ["label", "value"],
    },
    optionLabel: "label",
    optionValue: "value",
  });

  const { selectProps: residenceCountry } = useSelect({
    resource: "enum_country_codes",
    meta: {
      fields: ["name", "code"],
    },
    optionLabel: "name",
    optionValue: "code",
  });

  const { data } = useList({
    resource: "job_title",
    meta: {
      fields: ["id", "title", "header", "noc", "skill"],
    },
    pagination: {
      pageSize: 25,
      mode: "off",
    },
    filters: jobtitle
      ? [
          {
            field: "title",
            operator: "startswith",
            value: jobtitle,
          },
        ]
      : undefined,
  });

  const DATA = data?.data ?? [];
  const TIER0 = DATA?.filter((item) => item["skill"] === "0");
  const TIER1 = DATA?.filter((item) => item["skill"] === "1");
  const TIER2 = DATA?.filter((item) => item["skill"] === "2");
  const TIER3 = DATA?.filter((item) => item["skill"] === "3");
  const TIER4 = DATA?.filter((item) => item["skill"] === "4");

  const renderTitle = (title: string) => (
    <Typography.Text strong style={{ color: "gray" }}>
      {title}
    </Typography.Text>
  );

  const renderItem = (title: string, count: string, skill: string) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography.Text>{title}</Typography.Text>
        <Typography.Text>
          TIER: {skill} / NOC: {count}
        </Typography.Text>
      </div>
    ),
  });

  const JobOptions = [
    {
      label: renderTitle("TIER 0 JOBS"),
      options: TIER0.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
    {
      label: renderTitle("TIER 1 JOBS"),
      options: TIER1.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
    {
      label: renderTitle("TIER 2 JOBS"),
      options: TIER2.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
    {
      label: renderTitle("TIER 3 JOBS"),
      options: TIER3.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
    {
      label: renderTitle("TIER 4 JOBS"),
      options: TIER4.map((item) =>
        renderItem(item.title, item.noc, item.skill)
      ),
    },
  ];

  const handleSubmit = (e: any) => {
    addClientName(e?.clientname);
    addAgeRange(e?.agerange);
    addNoc(e?.noc);
    addMaritalStatus(e?.maritalstatus);
    addContactType(e?.contacttype);
    addResidence(e?.residence);
  };

  const handleClear = () => {
    addClientName("");
    addAgeRange("");
    addNoc("");
    addMaritalStatus("");
    addContactType("");
    addResidence("");
  };

  return (
    <Form layout="vertical" onFinish={(e) => handleSubmit(e)}>
      <Form.Item label="Name" name={"clientname"}>
        <Input size="middle" placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Age Range" name={"agerange"}>
        <Select size="middle" placeholder="Select placeholder" {...agerange} />
      </Form.Item>
      <Form.Item label="Job Title/NOC" name="noc">
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          popupMatchSelectWidth={800}
          options={JobOptions}
        >
          <Input
            size="middle"
            placeholder="input here"
            onChange={(e) => setJobTitle(e?.target?.value)}
          />
        </AutoComplete>
      </Form.Item>
      <Form.Item label="Marital Status" name={"maritalstatus"}>
        <Select
          size="middle"
          placeholder="Select placeholder"
          {...maritalStatus}
        />
      </Form.Item>
      <Form.Item label="Contact Type" name={"contacttype"}>
        <Select
          size="middle"
          placeholder="Select placeholder"
          {...contactType}
        />
      </Form.Item>
      <Form.Item label="Country of Residence" name={"residence"}>
        <Select
          size="middle"
          placeholder="Select placeholder"
          {...residenceCountry}
        />
      </Form.Item>
      <Space direction="horizontal" style={{ display: "flex" }}>
        <Button type="primary" size="middle" htmlType="submit">
          Apply
        </Button>
        <Button size="middle" onClick={handleClear}>
          Clear
        </Button>
      </Space>
    </Form>
  );
};
