import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

interface Props {
  menuListItem: any;
}

const MenuList: React.FC<Props> = ({ menuListItem }) => {
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = menuListItem.map((item: any) => ({
    key: item.key,
    // icon: item.icon,
    label: item.label,
    children: item.children.map((child: any) => ({
      key: child.key,
      label: child.label,
      type: child.type,
      children: child.children.map((subChild: any) => ({
        key: subChild.key,
        label: subChild.label,
      })),
    })),
  }));

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      mode="vertical"
      items={items}
    />
  );
};

export default MenuList;
