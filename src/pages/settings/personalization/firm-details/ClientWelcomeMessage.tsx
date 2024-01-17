import {
  LoadingOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Typography, Upload } from "antd";
import type {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload/interface";
import React from "react";
import { CustomUpload } from "../../../../components/custom-component/CustomUpload";

export const ClientWelcomeMessage: React.FC = () => {
  return (
    <div id="clientWelcomeMessage">
      <Card>
        <Typography.Title level={5}>Client Welcome Message</Typography.Title>
        <Row align={"top"}>
          <Col>
            <Form
              layout="vertical"
              labelCol={{ span: 16 }}
              style={{ maxWidth: 550 }}
              initialValues={{ remember: true }}
              // onFinish={onFinish}
            >
              <Form.Item name="greeting" label="Enter greeting to client below">
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>
              <Form.Item
                name="email"
                label="Support Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item name="phone" label="Support Phone No.">
                <Input style={{ width: "100%" }} />
              </Form.Item>

              <Row gutter={[18, 18]} className="linkArea">
                <div>
                  <Col>
                    <Form.Item name="links" label="Links">
                      <Input />
                    </Form.Item>
                  </Col>
                </div>
                <div>
                  <Col>
                    <Form.Item name="links" label="Website Address">
                      <Input />
                    </Form.Item>
                  </Col>
                </div>

                <div>
                  <Col>
                    <Form.Item>
                      <Button
                        type="text"
                        className="formBtn"
                        // onClick={() => add()}
                      >
                        <PlusCircleOutlined /> Add Another
                      </Button>
                    </Form.Item>
                  </Col>
                </div>
              </Row>

              <Row gutter={[18, 18]}>
                <Form.Item>
                  <Button type="primary">Save</Button>
                </Form.Item>
              </Row>
            </Form>
          </Col>
          <Col push={5}>
            <div className="profileUpload">
              <CustomUpload />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
