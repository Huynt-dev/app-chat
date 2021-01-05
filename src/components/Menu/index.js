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

      <MenuA theme="dark" defaultSelectedKeys={["sub1"]} mode="inline">
        <Menu.Item key="sub1" icon={<MessageOutlined />}>
          Chat
        </Menu.Item>

        <Menu.Item key="sub2" icon={<UserOutlined />}>
          Users
        </Menu.Item>

        <Menu.Item key="sub3" icon={<NotificationOutlined />} title="Team">
          Team 1
        </Menu.Item>

        <Menu.Item key="sub4" icon={<FormOutlined />}>
          Todo
        </Menu.Item>
      </MenuA>
    </SiderA>
  );
};

export default MenuSider;
