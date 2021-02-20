import React, { useState } from "react";
import { Form, Input, Upload, Button, message } from "antd";
import { InputMail, ButtonMail, ButtonApplyPass } from "./style";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeInfo } from "redux/auth/actions";
import ImgCrop from "antd-img-crop";

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const ModalProfile = ({ avatar, firstName, lastName, userName, email }) => {
  const [form] = Form.useForm();
  const [changePassword, setChangePassword] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  // const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const showInput = () => {
    setChangePassword(!changePassword);
  };

  const onChange = ({ fileList: newFileList }) => {
    setImageUrl(newFileList);
  };

  const onFinish = (values) => {
    // console.log("Finish:", values);
    dispatch(changeInfo(values));
  };

  const submitPassword = (values) => {
    console.log("submitPassword:", values);
  };

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    nameUser: userName,
    email: email,
  };

  return (
    <div>
      <Form
        name="profile"
        onFinish={onFinish}
        initialValues={initialValues}
        scrollToFirstError
      >
        <ImgCrop rotate>
          <Upload
            listType="picture-card"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={onChange}
            maxCount={1}
          >
            + Upload
          </Upload>
        </ImgCrop>

        <Form.Item name="firstName" label="First Name">
          <Input />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input />
        </Form.Item>

        <Form.Item label="Name User">
          <Input defaultValue={userName} disabled />
        </Form.Item>

        <Form.Item label="Email">
          <InputMail defaultValue={email} disabled />
          {/* <ButtonMail htmlType="button">Check Mail</ButtonMail> */}
        </Form.Item>

        <Form.Item>
          <ButtonApplyPass htmlType="submit" type="primary">
            Apply Change
          </ButtonApplyPass>
        </Form.Item>
      </Form>
      {/*  changePassword */}
      {changePassword ? (
        <Form onFinish={submitPassword}>
          <Form.Item
            name="OldPassword"
            rules={[
              {
                required: true,
                message: "Please input your Old password!",
              },
            ]}
          >
            <Input.Password placeholder="Old Password" />
          </Form.Item>

          <Form.Item
            name="NewPassword"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your New password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("OldPassword") === value) {
                    return Promise.reject(
                      "New password cannot be the same as your old password"
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password placeholder="New Password" />
          </Form.Item>

          <Form.Item
            name="ConfirmPassword"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("NewPassword") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Old Password" />
          </Form.Item>

          <ButtonApplyPass htmlType="submit" type="primary">
            Change Password
          </ButtonApplyPass>
          <Button type="dashed" danger onClick={showInput}>
            Cancel
          </Button>
        </Form>
      ) : (
        <Button htmlType="button" onClick={showInput}>
          Change your password
        </Button>
      )}
    </div>
  );
};

export default ModalProfile;
