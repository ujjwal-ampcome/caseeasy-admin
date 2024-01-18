import React from "react";
import { useModal } from "@refinedev/antd";
import { useLogin } from "@refinedev/core";
import {
  Col,
  Typography,
  Carousel,
  Input,
  Space,
  Button,
  Form,
  Modal,
  Image,
  Flex,
} from "antd";
import { ILoginForm } from "../../components/interfaces";
import { Register } from "../register";
import Login2 from "/img/login2.png";
import immigration_blue from "/img/immigration_blue.jpg";
import SmallPlane from "/img/small-plane.jpg";
import TravelBg from "/img/travel-background.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import wincaseImg from "/img/wincaseImg.png";
import "./styles.less";
import Paragraph from "antd/es/typography/Paragraph";

const { Title, Text } = Typography;

export const Login: React.FC = () => {
  const { show, modalProps } = useModal();
  const [form] = Form.useForm<ILoginForm>();
  const { mutate: login } = useLogin<ILoginForm>();
  return (
    <>
      <Flex id="login">
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          lg={{ span: 16 }}
          xxl={{ span: 16 }}
          className="main-col-1"
        >
          <Typography.Text className="main-col-1-title">
            Canadian Immigration CRM Software
          </Typography.Text>
          <Paragraph
            style={{ fontWeight: 400, fontSize: "18px" }}
            className="main-col-1-subTitle"
          >
            For RCICs and Immigration Lawyers
          </Paragraph>
          <Carousel autoplay className="main-col-1-carousel">
            <Image
              src={TravelBg}
              height={400}
              width={700}
              preview={false}
              className="main-col-1-carousel-content"
            />
            <Image
              src={immigration_blue}
              height={400}
              width={700}
              preview={false}
              className="main-col-1-carousel-content"
            />
            <Image
              src={SmallPlane}
              height={400}
              width={700}
              preview={false}
              className="main-col-1-carousel-content"
            />
          </Carousel>
          <Text className="main-col-1-footer">
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
          <Space direction="vertical" style={{ display: "flex" }}>
            <Image
              src={wincaseImg}
              alt="Wincase Logo"
              preview={false}
              width={280}
            />
          </Space>
          <Typography.Title level={2} className="main-col-2-title">
            Login
          </Typography.Title>
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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />

            <Button
              block
              type="primary"
              size="middle"
              htmlType="submit"
              className="main-col-2-btn"
            >
              Sign in
            </Button>
          </Form>
        </Col>
      </Flex>
      <Modal {...modalProps} footer={null}>
        <Register />
      </Modal>
    </>
  );
};
