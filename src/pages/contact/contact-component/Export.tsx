import React from "react";
import {
  Col,
  Divider,
  Flex,
  Row,
  Typography,
  Checkbox,
  Segmented,
  Card,
  Button,
} from "antd";
import { SegmentedValue } from "rc-segmented";

export const Export = () => {
  const [segment, setSegment] = React.useState<SegmentedValue>();
  return (
    <div>
      <Flex vertical>
        <Divider />
        <Typography.Text>
          Only administrative users will have access to the advanced export
          tool. Staff/Agents will only have access to basic exporting features
          which doesn't provide filtering or columns selection and may only
          export records they have access to.
        </Typography.Text>
        <Divider />
      </Flex>
      <Row style={{ paddingBottom: "1em" }}>
        <Col>
          <Flex vertical>
            <Typography.Title level={5}>Time zone</Typography.Title>
            <Typography.Text>
              UTC (Timestamps are in Coordinated Universal Time)
            </Typography.Text>
          </Flex>
        </Col>
      </Row>
      <Row justify={"space-between"} style={{ paddingBottom: "1em" }}>
        <Col>
          <Flex vertical>
            <Typography.Title level={5}>Date Range</Typography.Title>
            <Flex>
              <Checkbox.Group
                onChange={(e) => {
                  console.log(e);
                }}
              >
                <Row justify={"space-between"}>
                  <Col>
                    <Checkbox value="A">Today</Checkbox>
                  </Col>
                  <Col>
                    <Checkbox value="B">Current Month</Checkbox>
                  </Col>
                  <Col>
                    <Checkbox value="C">All records</Checkbox>
                  </Col>
                  <Col>
                    <Checkbox value="D">Custom</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Flex>
          </Flex>
        </Col>
        <Col>
          <Flex vertical>
            <Typography.Title level={5}>Download Format</Typography.Title>
            <Typography.Text>Excel</Typography.Text>
          </Flex>
        </Col>
      </Row>
      <Row justify={"center"} style={{ paddingBottom: "1em" }}>
        <Col>
          <Segmented
            size="large"
            options={[
              { label: "Personal", value: "personal" },
              { label: "Corporate", value: "corporate" },
            ]}
            onChange={(e: SegmentedValue) => setSegment(e)}
          />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col>
          {segment === "corporate" ? (
            <Typography.Title level={4}>
              Corporate currently does not support exports
            </Typography.Title>
          ) : (
            <Card>
              <Flex>
                <Checkbox.Group
                  onChange={(e) => {
                    console.log(e);
                  }}
                >
                  <Row justify={"space-between"}>
                    <Col span={8}>
                      <Checkbox value="1">Created</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="2">Type</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="3">Referral Source</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="4">Initial</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="5">Noc Code</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="6">Job</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="7">Timestamp</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="8">Associated Company</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="9">UCI</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="10">Passport No</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="11">Passport Expiry</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="12">First Name</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="13">Last Name</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="14">Date of Birth</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="15">Age</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="16">Country of Residence</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="17">Country of Citizenship</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="18">Organization Type</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="19">CRA Number</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="20">Company Size</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="21">Placement Agency</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="22">Commenced</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="23">Company Website</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="24">Language</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="25">Login Email</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="26">Created</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="27">Type</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="28">Client ID</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="29">Login Email</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="30">Referral Source</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Flex>
              <Row justify={"end"}>
                <Col>
                  <Button type="primary">Export</Button>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
};
