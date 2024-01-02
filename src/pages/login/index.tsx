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
import Login2 from "/img/login2.png";
import Wincase from "/img/wincase.png";
import ReCAPTCHA from "react-google-recaptcha";
import "./styles.less";

const { Title, Text } = Typography;

export const Login: React.FC = () => {
  const { show, modalProps } = useModal();
  const [form] = Form.useForm<ILoginForm>();
  const { mutate: login } = useLogin<ILoginForm>();
  return (
    <Layout>
      <Row id="login">
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          lg={{ span: 16 }}
          xxl={{ span: 16 }}
          className="main-col-1"
        >
          <Title level={2} className="main-col-1-title">
            Canadian Immigration CRM software
            <Title
              level={4}
              style={{ fontWeight: 400 }}
              className="main-col-1-title"
            >
              For RCICs and Immigration Lawyers
            </Title>
          </Title>
          <Carousel autoplay className="main-col-1-carousel">
            <div>
              <Image
                src={Login2}
                preview={false}
                className="main-col-1-carousel-content"
              />
            </div>
            <div>
              <Image
                src={Login2}
                preview={false}
                className="main-col-1-carousel-content"
              />
            </div>
          </Carousel>
          <Text className="main-col-1-title">
            &copy; 2023 CaseEasy by Ampcome Technologies Pvt. Ltd.
          </Text>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 8 }}
          xxl={{ span: 8 }}
          className="main-col-2"
        >
          <Space
            direction="vertical"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src={Wincase}
              alt="Wincase Logo"
              preview={false}
              width={280}
            />
          </Space>
          <Title level={2} className="main-col-2-title">
            Login
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
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Title level={5} className="main-col-2-title-1">
                Forgot Password ?
              </Title>
              <Title level={5} className="main-col-2-title-2" onClick={show}>
                Create an account ?
              </Title>
            </Space>

            <ReCAPTCHA
              sitekey="Your client site key"
              onChange={() => {
                console.log("recatcha triggered");
              }}
              size="normal"
            />

            <Button
              block
              type="primary"
              size="large"
              htmlType="submit"
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
