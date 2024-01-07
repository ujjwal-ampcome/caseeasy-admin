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
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useModal } from "@refinedev/antd";
import { FilterPersonal } from "./contact-component/FilterPersonal";
import { FilterCorporate } from "./contact-component/FilterCorporate";
import { SegmentedValue } from "rc-segmented";
import { Sorter } from "./contact-component/Sorter";
import { Export } from "./contact-component/Export";

const { Title } = Typography;

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
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div id="contact">
      <Row>
        <Title>Contacts</Title>
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
          <Button type="primary" size="large">
            Add Contact <PlusCircleOutlined />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
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
