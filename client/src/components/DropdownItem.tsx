import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

interface Props {
  buttonText: string;
}

const DropdownItem: React.FC<Props> = ({buttonText}) => {
  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        {/* <a onClick={(e) => e.preventDefault()}>
      <Space>
      Click me
      <DownOutlined />
      </Space>
      </a> */}
        <button>{buttonText}</button>
      </Dropdown>
    </>
  );
};
export default DropdownItem;
