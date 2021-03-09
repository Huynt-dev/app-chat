import React, { useState } from "react";
import { useHistory, withRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginData } from "redux/auth/reducer";
import {
  SiderMain,
  Menu,
  Avatar,
  ContentProfile,
  Wrapper,
  Popover,
  List,
  Divider,
  Modal,
  Button,
  By,
} from "./style";
import { ModalProfile } from "../../Modal";
import { MessageOutlined, UserOutlined } from "@ant-design/icons";

const MenuSider = ({ location }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();
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
        <Button
          style={{ width: "100%" }}
          danger
          type="primary"
          onClick={logout}
        >
          Logout
        </Button>
      </List>
    </ContentProfile>
  );

  return (
    <SiderMain collapsed={true}>
      <Modal
        title="Profile"
        visible={isModalVisible}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalProfile
          avatar={user.avatar}
          firstName={user.first_name}
          lastName={user.last_name}
          userName={user.name}
          email={user.email}
        />
      </Modal>

      <Wrapper>
        <Popover
          placement="bottomLeft"
          title="Profile"
          trigger="click"
          visible={isVisible}
          content={content}
          onVisibleChange={handleVisibleChange}
        >
          <Avatar
            shape="square"
            size={50}
            src={user.avatar}
            icon={<UserOutlined />}
          />
        </Popover>
      </Wrapper>

      <Menu
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
        mode="inline"
      >
        <Menu.Item key="/room" icon={<MessageOutlined />}>
          <NavLink to="/room">Messages</NavLink>
        </Menu.Item>
        <Menu.Item key="/users" icon={<UserOutlined />}>
          <NavLink to="/users">Users</NavLink>
        </Menu.Item>
      </Menu>
      <By>
        <p>HUY.NT</p>
      </By>
    </SiderMain>
  );
};

export default withRouter(MenuSider);
