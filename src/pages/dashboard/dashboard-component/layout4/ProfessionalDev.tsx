import React from "react";
import {
  Avatar,
  Button,
  Card,
  Carousel,
  Col,
  Row,
  Space,
  Typography,
} from "antd";
const { Text, Title } = Typography;
import "./../../styles.less";
import Girl from "/img/girl.png";
import Boy from "/img/boy.png";

export const ProfessionalDev = () => {
  return (
    <Card id="professional-dev">
      <Title level={4}>Continued Professional Development</Title>
      <Carousel autoplay>
        <div>
          <div className="prof-content-style">
            <Space direction="horizontal" className="prof-space" align="center">
              <Row gutter={24} justify="center">
                <Col>
                  <Avatar className="avatar" src={Girl} />
                  <Title level={5} className="title">
                    Robyn Jones, RCIC
                  </Title>
                  <Text className="text-1" strong>
                    CPD, Workshops and Intensive Trainings
                  </Text>
                  <Text className="text-2">
                    Business and Marketing Services
                  </Text>
                  <Button className="btn">Latest Events</Button>
                </Col>
                <Col>
                  <Avatar className="avatar" src={Boy} />
                  <Title level={5} className="title">
                    Kyle Broda, RCIC, M.Ed., M.A.
                  </Title>
                  <Text className="text-1" strong>
                    CPD, IELTS and ICCRC Exam Training, RCIC
                  </Text>
                  <Text className="text-2">
                    Business and Marketing Services
                  </Text>
                  <Button className="btn">Latest Events</Button>
                </Col>
              </Row>
            </Space>
          </div>
        </div>
        <div>
          <div className="prof-content-style">
            <Space direction="horizontal" className="prof-space" align="center">
              <Row gutter={24} justify="center">
                <Col>
                  <Avatar className="avatar" src={Girl} />
                  <Title level={5} className="title">
                    Robyn Jones, RCIC
                  </Title>
                  <Text className="text-1" strong>
                    CPD, Workshops and Intensive Trainings
                  </Text>
                  <Text className="text-2">
                    Business and Marketing Services
                  </Text>
                  <Button className="btn">Latest Events</Button>
                </Col>
                <Col>
                  <Avatar className="avatar" src={Boy} />
                  <Title level={5} className="title">
                    Kyle Broda, RCIC, M.Ed., M.A.
                  </Title>
                  <Text className="text-1" strong>
                    CPD, IELTS and ICCRC Exam Training, RCIC
                  </Text>
                  <Text className="text-2">
                    Business and Marketing Services
                  </Text>
                  <Button className="btn">Latest Events</Button>
                </Col>
              </Row>
            </Space>
          </div>
        </div>
      </Carousel>
    </Card>
  );
};
