import React from "react";
import { SiderA, MenuA, SubMenuA } from "./style";
import { Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const MenuSider = () => {
  return (
    <SiderA collapsible>
      <div className="logo" />
      <MenuA theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenuA key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenuA>
        <SubMenuA key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenuA>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </MenuA>
    </SiderA>
  );
};

export default MenuSider;
