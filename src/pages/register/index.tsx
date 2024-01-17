import { useRegister } from "@refinedev/core";
import { Typography, Space, Form, Input, Button } from "antd";
import { ILoginForm } from "../../components/interfaces";
import "./styles.less";

const { Text, Title } = Typography;

export const Register: React.FC = () => {
  const [form] = Form.useForm<ILoginForm>();
  const { mutate: register } = useRegister<ILoginForm>();

  return (
    <Space direction="vertical" className="main-col">
      <Space direction="vertical" style={{ display: "flex" }}>
        <Title className="main-col-title">
          caseeasy
          <Title level={5} className="main-col-title-2">
            2.0 Preview
          </Title>
        </Title>
        <Title level={2} className="main-col-title-3">
          Register
        </Title>
      </Space>
      <Form<ILoginForm>
        layout="vertical"
        form={form}
        onFinish={(values) => {
          register(values);
        }}
        requiredMark={false}
        initialValues={{
          remember: false,
        }}
      >
        <Space direction="vertical" style={{ display: "flex" }}>
          <Space direction="vertical" className="main-col-space">
            <Text className="main-col-text">Enter your Site ID</Text>
            <Form.Item name="siteid" rules={[{ required: false }]}>
              <Input size="large" placeholder="CCP20232986" />
            </Form.Item>
          </Space>

          <Space direction="vertical" className="main-col-space">
            <Text className="main-col-text">Enter your email address</Text>
            <Form.Item name="email" rules={[{ required: true }]}>
              <Input
                type="email"
                size="large"
                placeholder="Eg. mail@gmail.com"
              />
            </Form.Item>
          </Space>

          <Space direction="vertical" className="main-col-space">
            <Text className="main-col-text">Enter your password</Text>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input type="password" size="large" placeholder="*********" />
            </Form.Item>
          </Space>
        </Space>

        <Button
          type="primary"
          size="middle"
          htmlType="submit"
          block
          className="main-col-btn"
        >
          Sign up
        </Button>
      </Form>
    </Space>
  );
};
