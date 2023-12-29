import React from "react";
import "./../../styles.less";
import { Card, Divider, Space, Typography } from "antd";
import { WifiOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export const LatestNews: React.FC = () => {
  const truncateText = (text: string, maxLength: number) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  };
  return (
    <Card id="latest-news">
      <Space direction="horizontal">
        <Title level={4}>
          <WifiOutlined rotate={45} style={{ marginRight: "0.5em" }} />
          Latest News
        </Title>
      </Space>
      <Space direction="vertical" className="latest-news-scroll">
        <Divider className="latest-news-divider" />
        <Text className="text-date">November 30th 2023</Text>
        <Text strong className="text-heading">
          Canada opens global immigration processing centre in Romania
        </Text>
        <Text className="text-subheading">
          Immigration, Refugees and Citizenship Canada
        </Text>
        <Paragraph>
          Canada is a top destination for people looking for a new place to
          work, study, travel and build their lives with their families. As we
          continue to receive high volumes of applications from around the
          world, Immigration, Refugees and Citizenship Canada (IRCC) is
          committed to reducing wait times and finding ways to better serve our
          clients.
        </Paragraph>
        <Divider className="latest-news-divider" />

        <Text className="text-date">November 30th 2023</Text>
        <Text strong className="text-heading">
          Canada opens global immigration processing centre in Romania
        </Text>
        <Text className="text-subheading">
          Immigration, Refugees and Citizenship Canada
        </Text>
        <Paragraph>
          Canada is a top destination for people looking for a new place to
          work, study, travel and build their lives with their families. As we
          continue to receive high volumes of applications from around the
          world, Immigration, Refugees and Citizenship Canada (IRCC) is
          committed to reducing wait times and finding ways to better serve our
          clients.
        </Paragraph>
        <Divider className="latest-news-divider" />
      </Space>
    </Card>
  );
};
