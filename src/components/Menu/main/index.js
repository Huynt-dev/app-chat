import React, { useState } from "react";
import { useHistory, withRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginData } from "redux/auth/reducer";
import { SiderA, MenuA, AvatarA, ContentProfile } from "./style";
import { Menu, Popover, List, Divider, Modal, Button } from "antd";
import { ModalProfile } from "../../Modal";
import {
  FormOutlined,
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";

const MenuSider = ({ location }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();
  {
    console.log(location.pathname);
  }
  const logout = () => {
    dispatch(
      setLoginData({
        token: null,
        user: {},
      })
    );
    return history.push("/login");
  };

  const showModal = () => {
    setIsModalVisible(true);
    setIsVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setIsVisible(visible);
  };

  const content = (
    <ContentProfile>
      <List>
        <p>{user.name}</p>

        <Button onClick={showModal}>Edit</Button>
      </List>
      <Divider />
      <List>
        <a href="/login" onClick={logout}>
          Logout
        </a>
      </List>
    </ContentProfile>
  );

  return (
    <SiderA
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <div className="logo" />

      <Modal
        title="Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalProfile
          firstName={user.first_name}
          lastName={user.last_name}
          userName={user.name}
          email={user.email}
        />
      </Modal>

      <Popover
        placement="bottomLeft"
        title="Profile"
        trigger="click"
        visible={isVisible}
        content={content}
        onVisibleChange={handleVisibleChange}
      >
        <AvatarA
          shape="square"
          size={50}
          src={user.avatar}
          icon={<UserOutlined />}
        />
      </Popover>

      <MenuA
        theme="dark"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
        mode="inline"
      >
        <Menu.Item key={"/room"} icon={<MessageOutlined />}>
          <NavLink to="/room">Messages</NavLink>
        </Menu.Item>
        <Menu.Item key="/users" icon={<UserOutlined />}>
          <NavLink to="/users">Users</NavLink>
        </Menu.Item>
        <Menu.Item
          key="/notis"
          icon={<NotificationOutlined />}
          title="notifications"
        >
          <NavLink to="/notis">notifications</NavLink>
        </Menu.Item>
        <Menu.Item key="/todo" icon={<FormOutlined />}>
          <NavLink to="/todo">Todo</NavLink>
        </Menu.Item>
      </MenuA>
    </SiderA>
  );
};

export default withRouter(MenuSider);
