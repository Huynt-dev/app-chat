import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SiderA, MenuA, SubMenuA, AvatarA } from "./style";
import { Menu, Popover, List } from "antd";
import {
  FormOutlined,
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

const MenuSider = () => {
  const [collapsed, setCollapsed] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    return history.push("/login");
  };

  const content = (
    <div>
      <List>
        <a href="/login" onClick={logout}>
          Logout
        </a>
      </List>
    </div>
  );

  return (
    <SiderA
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <div className="logo" />

      <Popover placement="bottomLeft" content={content} trigger="click">
        <AvatarA
          shape="square"
          size={50}
          src={user.avatar}
          icon={<UserOutlined />}
        />
      </Popover>

      <MenuA theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<MessageOutlined />}>
          Chat
        </Menu.Item>
        <SubMenuA key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenuA>

        <Menu.Item key="sub2" icon={<NotificationOutlined />} title="Team">
          Team 1
        </Menu.Item>

        <Menu.Item key="9" icon={<FormOutlined />}>
          Files
        </Menu.Item>
      </MenuA>
    </SiderA>
  );
};

export default MenuSider;
