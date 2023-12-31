import React from "react";
import { useModal } from "@refinedev/antd";
import { useLogin } from "@refinedev/core";
import {
  Col,
  Typography,
  Row,
  Carousel,
  Input,
  Space,
  Button,
  Form,
  Modal,
  Layout,
  Image,
} from "antd";
import { ILoginForm } from "../../components/interfaces";
import { Register } from "../register";
import Login1 from "/img/login1.png";
import Login2 from "/img/login2.png";
import "./styles.less";

const { Title, Text } = Typography;

export const Login: React.FC = () => {
  const { show, modalProps } = useModal();
  const [form] = Form.useForm<ILoginForm>();
  const { mutate: login } = useLogin<ILoginForm>();
  return (
    <Layout>
      <Row>
        <Col span={16} className="main-col-1">
          <Title level={2} className="main-col-1-title">
            Canadian Immigration CRM software
            <Title
              style={{ fontWeight: 400 }}
              level={4}
              className="main-col-1-title"
            >
              For RCICs and Immigration Lawyers
            </Title>
          </Title>
          <Carousel autoplay className="main-col-1-carousel">
            <div>
              <Image src={Login2} className="main-col-1-carousel-content" />
            </div>
            <div>
              <Image src={Login2} className="main-col-1-carousel-content" />
            </div>
          </Carousel>
          <Text className="main-col-1-title">
            &copy; 2023 CaseEasy by Ampcome Technologies Pvt. Ltd.
          </Text>
        </Col>
        <Col span={8} className="main-col-2">
          <Title className="main-col-2-title">
            caseeasy
            <Title level={5} className="main-col-2-title-2">
              2.0 Preview
            </Title>
            <Title level={2} className="main-col-2-title-3">
              Login
            </Title>
          </Title>
          <Form<ILoginForm>
            layout="vertical"
            form={form}
            onFinish={(values) => {
              login(values);
            }}
            requiredMark={false}
            initialValues={{
              remember: false,
            }}
          >
            <Space direction="vertical" style={{ display: "flex" }}>
              <Space direction="vertical" className="main-col-2-space">
                <Text className="main-col-2-text">Enter your Site ID</Text>
                <Form.Item name="siteid" rules={[{ required: false }]}>
                  <Input size="large" placeholder="CCP20232986" />
                </Form.Item>
              </Space>

              <Space direction="vertical" className="main-col-2-space">
                <Text className="main-col-2-text">
                  Enter your email address
                </Text>
                <Form.Item name="email" rules={[{ required: true }]}>
                  <Input
                    type="email"
                    size="large"
                    placeholder="Eg. mail@gmail.com"
                  />
                </Form.Item>
              </Space>

              <Space direction="vertical" className="main-col-2-space">
                <Text className="main-col-2-text">Enter your password</Text>
                <Form.Item name="password" rules={[{ required: true }]}>
                  <Input type="password" size="large" placeholder="*********" />
                </Form.Item>
              </Space>
            </Space>
            <Space
              direction="horizontal"
              size="large"
              style={{ display: "flex" }}
            >
              <Title level={5} className="main-col-2-title-3">
                Forgot Password ?
              </Title>
              {/* <Title level={5} className="main-col-2-title-3">
              Forgot Site ID
            </Title> */}
              <Title level={5} className="main-col-2-title-3" onClick={show}>
                Register New User
              </Title>
            </Space>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              block
              className="main-col-2-btn"
            >
              Sign in
            </Button>
          </Form>
        </Col>
      </Row>
      <Modal {...modalProps} footer={null}>
        <Register />
      </Modal>
    </Layout>
  );
};
