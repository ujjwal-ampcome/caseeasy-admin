import React from "react";
import type { TabsProps } from "antd";
import {
  Button,
  Col,
  Drawer,
  Modal,
  Row,
  Segmented,
  Space,
  Tabs,
  Tooltip,
  Typography,
} from "antd";
import {
  ArrowsAltOutlined,
  CloudDownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { useModal } from "@refinedev/antd";
import { FilterPersonal } from "./contact-component/FilterPersonal";
import { FilterCorporate } from "./contact-component/FilterCorporate";
import { SegmentedValue } from "rc-segmented";
import { Sorter } from "./contact-component/Sorter";
import { Export } from "./contact-component/Export";
import { ContactButton } from "./contact-component/ContactButton";
import { PersonalContactTable } from "./contact-component/PersonalContactTable";
import { CorporateContactTable } from "./contact-component/CorporateContactTable";

export const Contact: React.FC = () => {
  const { show, modalProps } = useModal();
  const [open, setOpen] = React.useState(false);
  const [segment, setSegment] = React.useState<SegmentedValue>();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "PERSONAL",
      children: <PersonalContactTable />,
    },
    {
      key: "2",
      label: "CORPORATE",
      children: <CorporateContactTable />,
    },
  ];

  return (
    <div id="contact">
      <Row>
        <Typography.Title>Contacts</Typography.Title>
      </Row>
      <Row justify={"space-between"}>
        <Col span={8}>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <Button type="primary" size="large" onClick={showDrawer}>
              Filter <FilterOutlined />
            </Button>
            <Tooltip placement="bottom" title={<Sorter />} color="#fff">
              <Button type="primary" size="large">
                Sort <ArrowsAltOutlined />
              </Button>
            </Tooltip>
            <Button type="primary" size="large" onClick={show}>
              Export <CloudDownloadOutlined />
            </Button>
          </Space>
        </Col>
        <Col>
          <ContactButton />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Tabs defaultActiveKey="1" items={items} />
        </Col>
      </Row>
      <Drawer title="Filter" placement="right" onClose={onClose} open={open}>
        <Segmented
          block
          size="large"
          style={{ marginBottom: "1em" }}
          options={[
            { label: "Personal", value: "personal" },
            { label: "Corporate", value: "corporate" },
          ]}
          onChange={(e: SegmentedValue) => setSegment(e)}
        />
        {segment === "corporate" ? <FilterCorporate /> : <FilterPersonal />}
      </Drawer>
      <Modal
        {...modalProps}
        title="Advanced Export Tool"
        footer={null}
        width={800}
      >
        <Export />
      </Modal>
    </div>
  );
};
