import React from "react";
import type { MenuProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Typography } from "antd";

const { Text } = Typography;

const CustomInput = ({ searchParam }: any) => {
  if (searchParam === true) {
    return (
      <Input
        size="large"
        addonBefore={<SearchOutlined />}
        placeholder="Search..."
      />
    );
  } else return null;
};

const CustomDropdown: React.FC<any> = (props: any) => {
  const [items, setItems] = React.useState<MenuProps["items"]>([]);

  React.useEffect(() => {
    const num = props?.props?.item?.length;
    if (num) {
      setItems((prevItems: any) => {
        prevItems.splice(0); // Clear previous items
        return [
          {
            key: "-1",
            label: <CustomInput searchParam={props.props.searchParam} />,
          },
          {
            key: "0",
            label: (
              <Text strong style={{ color: "#2b70d6" }}>
                {props.props.subName}
              </Text>
            ),
          },
          ...props.props.item.map((item: any, index: any) => ({
            key: `${index + 1}`,
            label: <a>{item}</a>,
          })),
        ];
      });
    }
  }, [props.props.item, props.props.searchParam, props.props.subName]);

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Button
          ghost={props?.props?.ghost}
          size={props?.props?.size}
          style={props?.props?.style}
        >
          {props?.props?.name}
          {props?.props?.icon}
        </Button>
      </a>
    </Dropdown>
  );
};

export default CustomDropdown;
