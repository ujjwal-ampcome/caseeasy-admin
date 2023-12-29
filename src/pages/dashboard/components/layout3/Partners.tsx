import React from "react";
import Imeda from "/img/imeda.jpg";
import { Card, Carousel, Typography } from "antd";

const { Title } = Typography;

export const Partners: React.FC = () => {
  return (
    <Card>
      <Title level={4}>Partners & Announcements</Title>
      <Carousel autoplay>
        <img src={Imeda} alt="image" />
      </Carousel>
    </Card>
  );
};
