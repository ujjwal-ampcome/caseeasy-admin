import React from "react";
import easyImg from "/img/easyImg.png";
import mediaImg from "/img/mediaImg.png";
import { Button, Card, Carousel, Col, Row, Space, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

export const Partners: React.FC = () => {
  return (
    <Card id="partners-dev">
      <Title level={4}>Partners & Announcements</Title>
      <Carousel autoplay>
        <div>
          <div className="partners-content-style">
            <Space
              direction="horizontal"
              className="partners-space"
              align="center"
            >
              <Row gutter={24} justify="center">
                <Col>
                  <img src={easyImg} alt="image" height="120px" />
                  <Text className="text-2">
                    Check out our E-Signature software to get important
                    documents signed without the hassle. No need to Print and
                    Scan the Use of a Representative Form or any PDFs,
                    integrates with the CRM
                  </Text>
                  <Row>
                    <Button className="btn">
                      Learn More <ArrowRightOutlined />
                    </Button>
                  </Row>
                </Col>
              </Row>

              <Row gutter={24} justify="center">
                <Col>
                  <img src={mediaImg} alt="image" height="120px" />
                  <Text className="text-2">
                    Earn CPD credits through Immigration Education Alliance
                    (IMEDA), a non-profit organization created by your
                    colleagues to provide you with relevant hands-on immigration
                    education and practical tools.
                  </Text>
                  <Row>
                    <Button className="btn">
                      Learn More <ArrowRightOutlined />
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Space>
          </div>
        </div>

        <div>
          <div className="partners-content-style">
            <Space direction="horizontal" className="prof-space" align="center">
              <Row gutter={24} justify="center">
                <Col>
                  <img src={easyImg} alt="image" height="120px" />
                  <Text className="text-2">
                    Check out our E-Signature software to get important
                    documents signed without the hassle. No need to Print and
                    Scan the Use of a Representative Form or any PDFs,
                    integrates with the CRM
                  </Text>
                  <Row>
                    <Button className="btn">
                      Learn More <ArrowRightOutlined />
                    </Button>
                  </Row>
                </Col>
              </Row>

              <Row gutter={24} justify="center">
                <Col>
                  <img src={mediaImg} alt="image" height="120px" />
                  <Text className="text-2">
                    Earn CPD credits through Immigration Education Alliance
                    (IMEDA), a non-profit organization created by your
                    colleagues to provide you with relevant hands-on immigration
                    education and practical tools.
                  </Text>
                  <Row>
                    <Button className="btn">
                      Learn More <ArrowRightOutlined />
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Space>
          </div>
        </div>
      </Carousel>
    </Card>
  );
};
